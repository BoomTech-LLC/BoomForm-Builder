import { getNestedValue, timeConversion } from '../Helpers/global'

const conditionalLogic = ({ fieldValue, value, rule, field }) => {
  switch (rule) {
    case 'is': {
      if (fieldValue == value) return true
      else return false
    }
    case 'isNot': {
      if (fieldValue != value) {
        return true
      } else return false
    }
    case 'starts': {
      if (fieldValue && fieldValue.indexOf(value) === 0) return true
      else return false
    }
    case 'contains': {
      if (fieldValue && fieldValue.indexOf(value) !== -1) return true
      else return false
    }
    case 'ends': {
      if (fieldValue && fieldValue.endsWith(value)) return true
      else return false
    }
    case 'greater': {
      if (fieldValue > value) return true
      else return false
    }
    case 'less': {
      if (fieldValue < value) return true
      else return false
    }
    case 'checked': {
      if (!field) return false
      for (let i in fieldValue)
        if (fieldValue[i]) {
          const [option] = field.options.filter((option) => option.key == i)
          if (option && option.value === value) return true
        }

      return false
    }
    case 'doNotChecked': {
      if (!field) return false
      for (let i in fieldValue) {
        const [option] = field.options.filter((option) => option.key == i)
        if (option && !fieldValue[i] && option.value === value) return true
      }
      return false
    }
    case 'checkedMore': {
      let count = 0
      for (let i in fieldValue) if (fieldValue[i]) count++

      if (count > parseInt(value)) return true
      return false
    }
    case 'checkedLess': {
      let count = 0
      for (let i in fieldValue) if (fieldValue[i]) count++
      if (count < parseInt(value)) return true
      return false
    }
    case 'checkedEqual': {
      let count = 0
      for (let i in fieldValue) if (fieldValue[i]) count++
      if (count === parseInt(value)) return true
      return false
    }
    default:
      return null
  }
}

export const getHiddenIds = ({ logic, values, fields }) => {
  let hiddenFields = []
  logic.map((option) => {
    const { action, conditions, operator = 'and', id } = option
    for (let i = 0; i < conditions.length; i++) {
      const { id: key, value, rule, item } = conditions[i]
      const fieldValue = key.toString().includes('.')
        ? getNestedValue(values, key)
        : values[key]
      const [field] = fields.filter((field) => field.id === key)
      if (field === undefined) return null

      const { type } = field

      const isMatch = conditionalLogic({
        fieldValue: getFieldValue(type, fieldValue, field, values, item),
        value,
        rule,
        field
      })

      if (action === 'show') hiddenFields.push(id)

      if (isMatch) {
        if (action === 'show') {
          if (operator === 'or') {
            hiddenFields = hiddenFields.filter((item) => item !== id)
            break
          } else {
            const index = hiddenFields.indexOf(id)
            hiddenFields.splice(index, 1)
          }
        } else {
          hiddenFields.push(id)
          if (operator === 'or') break
        }
      } else {
        if (operator === 'and' && action === 'hide') {
          hiddenFields = hiddenFields.filter((item) => item !== id)
          break
        }
      }
    }
  })
  return hiddenFields
}

export const getFieldValue = (type, value, field, values, item) => {
  if (value === null) return ''

  switch (type) {
    case 'select': {
      let newValue = value?.value
      if (value?.key === 'placeholder') newValue = ''

      return newValue
    }
    case 'phone': {
      return `${value?.code}${value?.phone || ''}`
    }
    case 'time': {
      return `${value?.hour || ''} : ${value?.minute || ''} ${
        value?.format ? value.format?.value : ''
      }`
    }
    case 'signature': {
      return value?.url
    }

    case 'singleChoice': {
      if (!field) return ''
      const [option] = field.options.filter(
        (option) => option.key === parseInt(value) || option.key === 'other'
      )

      return option && option.label
    }

    case 'name':
    case 'address': {
      let name = ''
      if (value && item) name = value[item]?.value || value[item]
      return name
    }

    case 'price': {
      let name = value['first'] + '.' + value['last']
      return name
    }
    case 'terms': {
      let terms = ''
      if (value) terms = 'checked'
      else terms = 'not checked'
      return terms
    }
    case 'file': {
      let files = ''
      for (let i = 0; i < value.length; i++) {
        files += value[i].name + ' , '
      }
      return files.slice(0, -2)
    }
    default:
      return value
  }
}

// const getFieldValue = (type, fieldValue, item) => {
//   switch (type) {
//     case 'phone':
//       let phone = ''
//       if (fieldValue) phone = `${fieldValue.code}${fieldValue.phone}`
//       return phone
//     case 'date':
//       let date = ''
//       if (fieldValue)
//         date = `${fieldValue.split('-')[2]}-${fieldValue.split('-')[1]}-${
//           fieldValue.split('-')[0]
//         }`
//       return date
//     case 'time':
//       let time = ''
//       if (fieldValue) {
//         if (fieldValue.hour && fieldValue.minute && fieldValue.format) {
//           time = timeConversion(
//             `${fieldValue.hour}:${fieldValue.minute}${fieldValue.format.value}`
//           )
//           if (!time) return ''
//         } else {
//           if (fieldValue.hour && fieldValue.minute)
//             time = `${fieldValue.hour}:${fieldValue.minute}`
//         }
//       }
//       return time
//     case 'scaleRating':
//       let scaleRating = ''
//       if (fieldValue)
//         for (let i in fieldValue) {
//           const { checked, value } = fieldValue[i]
//           if (checked) scaleRating = value
//         }
//       return scaleRating
//     case 'price':
//       let price = ''
//       if (fieldValue) price = `${fieldValue.first || 0}.${fieldValue.last || 0}`
//       return price
//     case 'address':
//     case 'name':
//       let address = ''
//       if (fieldValue && item)
//         address = fieldValue[item]?.value || fieldValue[item]
//       return address
//     default:
//       return fieldValue?.value || fieldValue
//   }
// }
