import { getNestedValue } from '../Helpers/global'

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

export const getHiddenIds = ({ logic, values }) => {
  let hiddenFields = []
  logic.map((option) => {
    const { action, conditions, operator = 'and', id } = option
    for (let i = 0; i < conditions.length; i++) {
      const { id: key, value, rule, item } = conditions[i]
      const fieldValue = key.toString().includes('.')
        ? getNestedValue(values, key)
        : values[key]
      const isMatch = conditionalLogic({
        fieldValue: fieldValue?.value || fieldValue,
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
