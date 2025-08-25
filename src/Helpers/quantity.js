export const getQuantityValidations = (choiceType, options, id) => {
  const validateQuantity = (value, selectedOption) => {
    if (
      !selectedOption ||
      !('limit' in selectedOption) ||
      typeof selectedOption.limit !== 'number' ||
      selectedOption.limit <= 0
    ) {
      return ''
    }

    const limitLeft = selectedOption.limit - (selectedOption.count ?? 0)

    if (limitLeft <= 0) {
      return ''
    }

    return parseInt(value) > parseInt(limitLeft)
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
          if (!state?.values || typeof state.values[id] !== 'object') {
            return ''
          }

          const selectedOptions =
            options?.filter(option => state?.values[id][option.key]) || []

          if (selectedOptions.length === 0) {
            return ''
          }

          let hasValidValidation = false
          for (const selectedOption of selectedOptions) {
            if (
              selectedOption &&
              'limit' in selectedOption &&
              typeof selectedOption.limit === 'number' &&
              selectedOption.limit > 0
            ) {
              const limitLeft =
                selectedOption.limit - (selectedOption.count || 0)

              if (limitLeft > 0) {
                hasValidValidation = true
                const result = validateQuantity(value, selectedOption)
                if (result) return result
              }
            }
          }

          if (!hasValidValidation) {
            return ''
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
