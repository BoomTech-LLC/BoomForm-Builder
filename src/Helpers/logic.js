import { getNestedValue } from '../Helpers/global'

const conditionalLogic = ({ fieldValue, value, rule, field, item, type }) => {
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
      if (!field || !field.options) return false
      for (let i in fieldValue) {
        if (fieldValue[i]) {
          if (fieldValue[i].key === 'other') {
            if (
              fieldValue[i]?.value === value ||
              fieldValue[i]?.label === value
            )
              return true
          } else if (
            Object.keys(fieldValue[i]).includes('value') &&
            fieldValue[i].value == value
          ) {
            return true
          }
        }
      }
      return false
    }
    case 'doNotChecked': {
      if (!field || !field.options) return false
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
    case 'doesNotContain': {
      if (fieldValue && fieldValue.indexOf(value) === -1) return true
      else return false
    }
    case 'isEmpty': {
      if (!fieldValue) return true
      else return false
    }
    case 'isFilled': {
      if (fieldValue) return true
      else return false
    }
    case 'doesNotStart': {
      if (fieldValue) {
        if (fieldValue?.startsWith(value)) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    }
    case 'doesNotEnd': {
      if (fieldValue) {
        if (fieldValue?.endsWith(value)) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    }
    case 'quantityEqual': {
      if (type === 'multipleChoice') {
        if (item) {
          return String(fieldValue) === String(value)
        } else {
          if (fieldValue?.value) {
            return Object.keys(fieldValue.value).reduce((acc, curr) => {
              if (
                fieldValue.value[curr] &&
                fieldValue?.quantity &&
                String(fieldValue?.quantity[curr]) === String(value)
              )
                return true
              return acc
            }, false)
          }
        }
      } else {
        return fieldValue == value
      }
    }
    case 'quantityLess': {
      if (type === 'multipleChoice') {
        if (item) {
          return fieldValue < value
        } else {
          if (fieldValue?.value) {
            return Object.keys(fieldValue.value).reduce((acc, curr) => {
              if (
                fieldValue.value[curr] &&
                fieldValue?.quantity &&
                fieldValue?.quantity[curr] < value
              )
                return true
              return acc
            }, false)
          }
        }
      } else {
        if (fieldValue) {
          return fieldValue < value
        } else {
          return false
        }
      }
    }
    case 'quantityMore': {
      if (type === 'multipleChoice') {
        if (item) {
          return fieldValue > value
        } else {
          if (fieldValue?.value) {
            return Object.keys(fieldValue.value).reduce((acc, curr) => {
              if (
                fieldValue.value[curr] &&
                fieldValue?.quantity &&
                fieldValue?.quantity[curr] > value
              )
                return true
              return acc
            }, false)
          }
        }
      } else {
        return fieldValue > value
      }
    }
    default:
      return null
  }
}

export const getHiddenIds = ({ logic, values, fields, formRef }) => {
  let hiddenFields = {
    fields: [],
    pages: []
  }
  logic.map((option) => {
    const { action, conditions, operator = 'and', id, handlers } = option

    for (let i = 0; i < conditions.length; i++) {
      const { id: key, value, rule, item } = conditions[i]

      let fieldValue = key.toString().includes('.')
        ? getNestedValue(values, key)
        : values[key]
      const [field] = fields.filter((field) => field.id === key)
      if (field === undefined) return null

      const { type } = field
      const isQuantity = rule.includes('quantity')
      if (isQuantity) {
        if (item) {
          if (type === 'multipleChoice') {
            const checkedOptionKeys =
              values['1'] && typeof values['1'] === 'object'
                ? Object.keys(values['1']).filter(
                    (key) => values['1'][key] === true
                  )
                : []
            const foundOption = checkedOptionKeys.includes(String(item))
            if (foundOption) {
              fieldValue =
                values?.[key] &&
                values?.quantity &&
                values?.quantity[key] &&
                values?.quantity[key][item]
            } else {
              return false
            }
          }

          if (type === 'singleChoice') {
            const singleOption = fields[0].options.filter((option) => {
              return (
                String(option.key) === String(item) &&
                values[key] === option.value
              )
            })
            if (singleOption.length) {
              fieldValue =
                !!values && !!values?.quantity && values?.quantity?.[key]
            } else {
              fieldValue = false
            }
          }
          if (type === 'select') {
            fieldValue =
              String(values[key]?.key) === String(item) &&
              values?.quantity &&
              values?.quantity[key]
          }
        } else {
          if (type === 'multipleChoice') {
            fieldValue = {
              value: values[key],
              quantity: values?.quantity && values?.quantity[key]
            }
          } else {
            fieldValue = values?.quantity && values?.quantity[key]
          }
        }
      }

      const isMatch = conditionalLogic({
        fieldValue: isQuantity
          ? fieldValue
          : getFieldValue(type, fieldValue, field, values, item),
        value,
        rule,
        field,
        item,
        type
      })
      if (
        actionHandler(
          id,
          action,
          operator,
          isMatch,
          hiddenFields,
          handlers,
          formRef
        )
      )
        break
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
      if (!field || !field.options) return ''
      const options = field.options.filter((option) => option.value == value)
      return options[0]?.label
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
    case 'multipleChoice': {
      if (!field && !field.options) return ''
      if (value && values) {
        const checkedOptions = field.options.filter((option) => {
          if (value[option.key]) {
            return true
          } else return false
        })

        return checkedOptions
      }
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

export const actionHandler = (
  id,
  action,
  operator,
  isMatch,
  hiddenFields,
  handlers,
  formRef
) => {
  if (action === 'show') hiddenFields.fields.push(id)
  if (action === 'show_page') hiddenFields.pages.push(id)
  if (isMatch) {
    switch (action) {
      case 'show':
        if (operator === 'or') {
          hiddenFields.fields = hiddenFields.fields.filter(
            (item) => item !== id
          )
          return true
        } else {
          const index = hiddenFields.fields.indexOf(id)
          hiddenFields.fields.splice(index, 1)
        }
        break
      case 'hide_page':
        hiddenFields.pages.push(id)
        break
      case 'show_page':
        hiddenFields.pages = hiddenFields.pages.filter(
          (_hiddenId) => _hiddenId !== id
        )
        break
      case 'callback':
        if (handlers) {
          const { onConditionTrue } = handlers
          if (onConditionTrue) {
            onConditionTrue(formRef.current)
          }
        }
        break
      default:
        hiddenFields.fields.push(id)
        if (operator === 'or') return true
    }
  } else {
    if (operator === 'and' && action === 'hide') {
      hiddenFields.fields = hiddenFields.fields.filter((item) => item !== id)
      return true
    }
    if (action === 'callback') {
      const { onConditionFalse } = handlers
      if (onConditionFalse) {
        onConditionFalse(formRef.current)
      }
    }
  }
}

export const getUpdatableFields = ({ logic }) => {
  const updatableFields = []

  if (logic.length > 0) {
    for (let i = 0; i < logic.length; i++) {
      for (let j = 0; j < logic[i].conditions.length; j++) {
        const condition = logic[i].conditions[j]
        if (condition.rule.includes('quantity')) {
          updatableFields.push(`quantity.${logic[i].conditions[j].id}`)
          updatableFields.push(`${logic[i].conditions[j].id}`)
        } else {
          logic[i].conditions[j].item
            ? updatableFields.push(
                `${logic[i].conditions[j].id}.${logic[i].conditions[j].item}`
              )
            : updatableFields.push(logic[i].conditions[j].id)
        }
      }
    }
  }
  return updatableFields
}
export const formValueCheker = ({ logicIds, pagination = {}, fields }) => {
  if (Object.keys(pagination).length === 0) return
  const { pages: hiddenPages, fields: hiddenFields } = logicIds
  const filtredPages = pagination.pages.filter(
    (page, index) =>
      !hiddenPages.includes(index) &&
      page.fields.filter((id) => !hiddenFields.includes(id)).length !== 0
  )
  const requiredFields = fields.filter(
    (field) => field.required && !hiddenFields.includes(field.id)
  )
  const { values: stateValues } = window.__current_form_state
  let reddirectPage = undefined

  const getPageIndex = (fieldId) => {
    for (let i = 0; i < filtredPages.length; i++) {
      if (filtredPages[i].fields.includes(fieldId)) {
        reddirectPage = String(i)
        break
      }
    }
  }
  for (let i = 0; i < requiredFields.length; i++) {
    if (
      stateValues[requiredFields[i].id] === null ||
      stateValues[requiredFields[i].id] === undefined
    ) {
      getPageIndex(requiredFields[i].id)
      break
    }
  }
  return reddirectPage
}
