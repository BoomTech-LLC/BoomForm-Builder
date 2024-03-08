const validationOptions = {
  lowercase: '[a-z]',
  uppercase: '[A-Z]',
  symbol: '[^a-zA-Z0-9]',
  number: '[0-9]'
}

export const stockedValidation = (validation) => {
  const {
    lowercase = 0,
    uppercase = 0,
    symbol = 0,
    number = 0
  } = validation

  const properties = [
    lowercase,
    uppercase,
    symbol,
    number
  ]

  const existingProperties = []

  properties.forEach((property) => {
    if (property !== 0) {
      let stringProperty
      switch (property) {
        case lowercase:
          stringProperty = 'lowercase'
          break
        case uppercase:
          stringProperty = 'uppercase'
          break
        case symbol:
          stringProperty = 'symbol'
          break
        case number:
          stringProperty = 'number'
          break
        default:
          break
      }

      const isExisting = existingProperties.some(
        (existingProp) => existingProp.key === stringProperty
      )

      if (!isExisting) {
        existingProperties.push({
          key: stringProperty,
          value: property
        })
      }
    }
  })


  const addToRegEx = (existingProps, initialRegEx) => {
    if (existingProps.length === 0) {
      return initialRegEx
    }

    existingProps.forEach((existingProp) => {
      const { key, value } = existingProp
      const checkValue = validationOptions[key]

      if (checkValue && value.value) {
        let newRegExPattern= `(?:.*${checkValue}){${value.value},}`

        initialRegEx.push({
          msg: value.msg.replace('%S%', value.value),
          value: newRegExPattern
        })
      } 
      // else if (value.msg) {
      //   initialRegEx.push({
      //     msg: value.msg
      //   })
      // }
    })
    return initialRegEx
  }

  if (!validation.regEx) {
    if (existingProperties.length > 0) {
      validation.regEx = addToRegEx(existingProperties , []);
    }
  } else{
    let regExArray = []

    if (Array.isArray(validation.regEx)) {
      regExArray = [...validation.regEx]
    } else {
      regExArray.push(validation.regEx)
    }

    const regEx = addToRegEx(existingProperties, regExArray)
    validation.regEx = regEx
  }

  for (let key in validation) {
    if (validationOptions[key]) {
      delete validation[key]
    }
  }
  return validation
}
