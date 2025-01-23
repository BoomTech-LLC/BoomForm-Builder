const validationOptions = {
  lowercase: '[a-z]',
  uppercase: '[A-Z]',
  symbol: '[^a-zA-Z0-9]',
  number: '[0-9]'
}

export const stockedValidation = validation => {
  const { required, lowercase, uppercase, symbol, number } = validation

  const existingProperties = [
    { key: 'lowercase', value: lowercase },
    { key: 'uppercase', value: uppercase },
    { key: 'symbol', value: symbol },
    { key: 'number', value: number }
  ].filter(prop => prop.value)

  const addToRegEx = (existingProps, initialRegEx) => {
    if (existingProps.length === 0) {
      return initialRegEx
    }
    existingProps.forEach(({ key, value }) => {
      if (validationOptions[key] && value.value) {
        initialRegEx.push({
          msg: value.msg.replace('%S%', value.value),
          value: required
            ? `(?:.*${validationOptions[key]}){${value.value},}`
            : `^$|(?=(.*${validationOptions[key]}){${value.value},})`
        })
      }
    })
    return initialRegEx
  }

  if (!validation.regEx && existingProperties.length > 0) {
    validation.regEx = addToRegEx(existingProperties, [])
  } else if (validation.regEx) {
    const regExArray = Array.isArray(validation.regEx)
      ? [...validation.regEx]
      : [validation.regEx]
    validation.regEx = addToRegEx(existingProperties, regExArray)
  }

  Object.keys(validation).forEach(key => {
    if (validationOptions[key]) {
      delete validation[key]
    }
  })

  return validation
}
