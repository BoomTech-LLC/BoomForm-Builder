export const getQuantityValidations = (choiceType, options, id) => {
  const validateQuantity = (value, selectedOption) => {

    const limitLeft =
      (selectedOption?.limit ?? 0) - (selectedOption?.count ?? 0)
    return selectedOption && parseInt(value) > parseInt(limitLeft)
      ? `Value should be less or equal to ${limitLeft}`
      : ''
  }

  switch (choiceType) {
    case 'radio':
      return {
        HTMLValidate: true,
        custom: value => {
          const state = window.__current_form_state
          const selectedOptionKey = isNaN(parseInt(state.values[id]))
            ? state.values[id]
            : parseInt(state.values[id])

          const selectedOption = options?.find(
            option => option.key === selectedOptionKey
          )
          return validateQuantity(value, selectedOption)
        }
      }

    case 'checkbox':
      return {
        HTMLValidate: true,
        custom: value => {
          const state = window.__current_form_state
          const selectedOptions =
            options?.filter(option => state.values[id][option.key]) || []

          for (const selectedOption of selectedOptions) {
            const result = validateQuantity(value, selectedOption)
            if (result) return result
          }
          return ''
        }
      }

    case 'select':
      return {
        HTMLValidate: true,
        custom: value => {
          const state = window.__current_form_state
          const selectedOptionKey = isNaN(parseInt(state.values[id]))
            ? state.values[id]
            : parseInt(state.values[id])
          const selectedOption = options?.find(
            option => option.key === selectedOptionKey
          )
          return validateQuantity(value, selectedOption)
        }
      }

    default:
      return { HTMLValidate: true, custom: () => '' }
  }
}
