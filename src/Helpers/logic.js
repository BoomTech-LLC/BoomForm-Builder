import { getNestedValue } from '../Helpers/global'

export const conditionalLogic = ({
  fieldValue,
  value,
  rule,
  field,
  item,
  type
}) => {
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
      if (Number(fieldValue) > Number(value)) return true
      else return false
    }
    case 'less': {
      if (Number(fieldValue) < Number(value)) return true
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
            (fieldValue[i].hasOwnProperty('value') &&
              fieldValue[i].value == value) ||
            (fieldValue[i].hasOwnProperty('label') &&
              fieldValue[i].label == value)
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
        const [option] = field.options.filter(option => option.key == i)
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
          return Number(fieldValue) === Number(value)
        } else {
          if (fieldValue?.value) {
            return Object.keys(fieldValue.value).reduce((acc, curr) => {
              if (
                fieldValue.value[curr] &&
                fieldValue?.quantity &&
                Number(fieldValue?.quantity[curr]) === Number(value)
              ) {
                return true
              }
              return acc
            }, false)
          }
        }
      } else {
        return Number(fieldValue) === Number(value)
      }
    }
    case 'quantityLess': {
      if (type === 'multipleChoice') {
        if (item) {
          return Number(fieldValue) < Number(value)
        } else {
          if (fieldValue?.value) {
            return Object.keys(fieldValue.value).reduce((acc, curr) => {
              if (
                fieldValue.value[curr] &&
                fieldValue?.quantity &&
                Number(fieldValue?.quantity[curr]) < Number(value)
              ) {
                return true
              }
              return acc
            }, false)
          }
        }
      } else {
        if (fieldValue) {
          return Number(fieldValue) < Number(value)
        } else {
          return false
        }
      }
    }
    case 'quantityMore': {
      if (type === 'multipleChoice') {
        if (item) {
          return Number(fieldValue) > Number(value)
        } else {
          if (fieldValue?.value) {
            return Object.keys(fieldValue.value).reduce((acc, curr) => {
              if (
                fieldValue.value[curr] &&
                fieldValue?.quantity &&
                Number(fieldValue?.quantity[curr]) > Number(value)
              )
                return true

              return acc
            }, false)
          }
        }
      } else {
        return Number(fieldValue) > Number(value)
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
  logic.map(option => {
    const { action, conditions, operator = 'and', id, handlers } = option

    const isMatch = conditions.reduce((acc, curr) => {
      const { id: key, value, rule, item } = curr

      let fieldValue = key.toString().includes('.')
        ? getNestedValue(values, key)
        : values[key]
      const [field] = fields.filter(field => field.id === key)
      if (field === undefined) return null

      const { type } = field
      const isQuantity = rule.includes('quantity')
      if (isQuantity) {
        switch (type) {
          case 'multipleChoice':
            if (item) {
              const checkedOptionKeys =
                values['1'] && typeof values['1'] === 'object'
                  ? Object.keys(values['1']).filter(
                      key => values['1'][key] === true
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
            } else {
              fieldValue = {
                value: values[key],
                quantity: values?.quantity && values?.quantity[key]
              }
            }
            break

          case 'singleChoice':
            if (item) {
              const singleOption = fields[0].options.filter(
                option =>
                  String(option.key) === String(item) &&
                  values[key] === option.value
              )
              if (singleOption.length) {
                fieldValue =
                  !!values && !!values?.quantity && values?.quantity?.[key]
              } else {
                fieldValue = false
              }
            } else {
              fieldValue = values?.quantity && values?.quantity[key]
            }
            break

          case 'select':
            if (item) {
              fieldValue =
                String(values[key]?.key) === String(item) &&
                values?.quantity &&
                values?.quantity[key]
            } else {
              fieldValue = values?.quantity && values?.quantity[key]
            }
            break

          default:
            break
        }
      }
      if (operator === 'and' && !acc) return
      const matched = conditionalLogic({
        fieldValue: isQuantity
          ? fieldValue
          : getFieldValue(type, fieldValue, field, values, item),
        value,
        rule,
        field,
        item,
        type
      })
      if (operator === 'or' && (matched || acc === 'pass')) {
        return 'pass'
      }
      return matched
    }, true)

    actionHandler(
      id,
      action,
      operator,
      isMatch,
      hiddenFields,
      handlers,
      formRef
    )
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
      const options = field.options.filter(option => option.value == value)
      return options[0]?.label
    }
    case 'name':
    case 'address': {
      let name = ''
      if (value && item) name = value[item]?.value || value[item]
      return name
    }

    case 'price': {
      let name = ''
      if (value && value['first']) {
        name = value['first']
      }
      if (value && value['last']) {
        name += '.' + value['last']
      }
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
      for (let i = 0; i < value?.length; i++) {
        files += value[i]?.name + ' , '
      }
      return files?.slice(0, -2)
    }
    case 'multipleChoice': {
      if (!field && !field.options) return ''
      if (value && values) {
        const checkedOptions = field.options.filter(option => {
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

export const actionHandler = (
  id,
  action,
  operator,
  isMatch,
  hiddenFields,
  handlers,
  formRef
) => {
  if (action === 'show' && !hiddenFields.fields.includes(id))
    hiddenFields.fields.push(id)

  if (action === 'show_page' && !hiddenFields.pages.includes(id))
    hiddenFields.pages.push(id)

  if (isMatch) {
    switch (action) {
      case 'show':
        if (operator === 'or') {
          hiddenFields.fields = hiddenFields.fields.filter(item => item !== id)
          return true
        } else {
          const index = hiddenFields.fields.indexOf(id)
          hiddenFields.fields.splice(index, 1)
          return hiddenFields
        }
        break
      case 'hide_page':
        hiddenFields.pages.push(id)
        break
      case 'show_page':
        hiddenFields.pages = hiddenFields.pages.filter(
          _hiddenId => _hiddenId !== id
        )
        return hiddenFields
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
      hiddenFields.fields = hiddenFields.fields.filter(item => item !== id)
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
      page.fields.filter(id => !hiddenFields.includes(id)).length !== 0
  )
  const requiredFields = fields.filter(
    field => field.required && !hiddenFields.includes(field.id)
  )
  const { values: stateValues } = window.__current_form_state
  let reddirectPage = undefined

  const getPageIndex = fieldId => {
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
