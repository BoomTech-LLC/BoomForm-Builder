import { getNestedValue, timeConversion } from '../Helpers/global'

const conditionalLogic = ({ fieldValue, value, item, rule }) => {
  switch (rule) {
    case 'is': {
      if (fieldValue == value || fieldValue?.[item] == value) return true
      else return false
    }
    case 'isNot': {
      if (
        (fieldValue != value && !item) ||
        (fieldValue?.[item] != value && item)
      ) {
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
      for (let i in fieldValue) {
        const { checked, value: option } = fieldValue[i]
        if (checked && option === value) return true
      }
      return false
    }
    case 'doNotChecked': {
      for (let i in fieldValue) {
        const { checked, value: option } = fieldValue[i]
        if (!checked && option === value) return true
      }
      return false
    }
    case 'checkedMore': {
      let count = 0
      for (let i in fieldValue) {
        const { checked, value: option } = fieldValue[i]
        count = count + checked
        if (count > value) return true
      }
      return false
    }
    case 'checkedLess': {
      let count = 0
      for (let i in fieldValue) {
        const { checked, value: option } = fieldValue[i]
        count = count + checked
        if (count < value) return true
      }
      return false
    }
    case 'checkedEqual': {
      let count = 0
      for (let i in fieldValue) {
        const { checked, value: option } = fieldValue[i]
        count = count + checked
        if (count == value) return true
      }
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
      const { type } = field

      const isMatch = conditionalLogic({
        fieldValue: getFieldValue(type, fieldValue, item),
        value,
        item,
        rule
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

const getFieldValue = (type, fieldValue, item) => {
  switch (type) {
    case 'phone':
      let phone = ''
      if (fieldValue) phone = `${fieldValue.code}${fieldValue.phone}`
      return phone
    case 'date':
      let date = ''
      if (fieldValue)
        date = `${fieldValue.split('-')[2]}-${fieldValue.split('-')[1]}-${
          fieldValue.split('-')[0]
        }`
      return date
    case 'time':
      let time = ''
      if (fieldValue) {
        if (fieldValue.hour && fieldValue.minute && fieldValue.format) {
          time = timeConversion(
            `${fieldValue.hour}:${fieldValue.minute}${fieldValue.format.value}`
          )
          if (!time) return ''
        } else {
          if (fieldValue.hour && fieldValue.minute)
            time = `${fieldValue.hour}:${fieldValue.minute}`
        }
      }
      return time
    case 'scaleRating':
      let scaleRating = ''
      if (fieldValue)
        for (let i in fieldValue) {
          const { checked, value } = fieldValue[i]
          if (checked) scaleRating = value
        }
      return scaleRating
    case 'price':
      let price = ''
      if (fieldValue) price = `${fieldValue.first || 0}.${fieldValue.last || 0}`
      return price
    case 'address':
      let address = ''
      if (fieldValue && item)
        address = fieldValue[item]?.value || fieldValue[item]
      return address
    default:
      return fieldValue?.value || fieldValue
  }
}
