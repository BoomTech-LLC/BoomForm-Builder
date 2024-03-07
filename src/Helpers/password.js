const validationOptions = {
  lowercase: '[a-z]',
  uppercase: '[A-Z]',
  symbol: '[^a-zA-Z0-9]',
  number: '[0-9]'
}

export const Validation = (validation) => {
  const {
    HTMLValidate = 0,
    required = 0,
    min = 0,
    max = 0,
    email = 0,
    phone = 0,
    url = 0,
    ...restValidations
  } = validation

  const properties = [
    HTMLValidate,
    required,
    min,
    max,
    email,
    phone,
    url,
    ...Object.values(restValidations)
  ]

  const existingProperties = []

  properties.forEach((property) => {
    if (property !== 0) {
      let stringProperty
      switch (property) {
        case HTMLValidate:
          stringProperty = 'HTMLValidate'
          break
        case required:
          stringProperty = 'required'
          break
        case min:
          stringProperty = 'min'
          break
        case max:
          stringProperty = 'max'
          break
        case email:
          stringProperty = 'email'
          break
        case phone:
          stringProperty = 'phone'
          break
        case url:
          stringProperty = 'url'
          break
        default:
          stringProperty = Object.keys(restValidations).find(
            (key) => restValidations[key] === property
          )
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

  console.log('Existing Properties:', existingProperties)

  const addToRegEx = (existingProps, initialRegEx) => {
    if (existingProps.length === 0) {
      return initialRegEx
    }

    existingProps.forEach((existingProp) => {
      const { key, value } = existingProp
      const checkValue = validationOptions[key]

      if (checkValue && value.value) {
        let newRegExPattern
        checkValue === '[^a-zA-Z0-9]'
          ? (newRegExPattern = `(?:.*${checkValue})`)
          : (newRegExPattern = `(?:.*${checkValue}){${value.value},}`)

        initialRegEx.push({
          msg: value.msg.replace('%S%', value.value),
          value: newRegExPattern
        })
      } else if (value.msg) {
        initialRegEx.push({
          msg: value.msg
        })
      }
    })
    return initialRegEx
  }

  if (!validation.regEx) {
    if (existingProperties.length === 1) {
      const { key, value } = existingProperties[0]
      const checkValue = validationOptions[key]

      if (checkValue && value) {
        checkValue === '[^a-zA-Z0-9]'
          ? (newRegExPattern = `(?:.*${checkValue})`)
          : (newRegExPattern = `(?:.*${checkValue}){${value.value},}`)

        validation.regEx = {
          msg: value.msg?.replace('%S%', value.value),
          value: newRegExPattern
        }
      } else if (value.msg) {
        validation.regEx = {
          msg: value.msg
        }
      }
    } else {
      validation.regEx = []
      addToRegEx(existingProperties, validation.regEx)
    }
  } else if (existingProperties.length > 0) {
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
