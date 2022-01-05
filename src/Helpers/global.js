export const getPrintableFields = (fields, logic = [], pagination = []) => {
  const printableFields = fields.flatMap(({ id }) =>
    !logic.includes(id) ? id : []
  )
  return [printableFields, pagination].reduce((a, c) => {
    if (!c.length) return a
    return a.filter((i) => c.includes(i))
  })
}

export const getPlaceholder = (placehodler, id) =>
  placehodler !== undefined && placehodler[id] ? placehodler[id] : undefined

export const getInitial = (initials, id) =>
  initials !== undefined && initials[id] !== null ? initials[id] : undefined

export const getValidation = (validation, id) =>
  validation !== undefined && validation[id] ? validation[id] : undefined

export const getNestedValue = (values, index) => {
  return index
    .toString()
    .split('.')
    .reduce((acc, index) => {
      return acc[index] || {}
    }, values)
}

export const timeConversion = (s) => {
  const ampm = s.slice(-2)
  const hours = Number(s.slice(0, 2))
  let time = s.slice(0, -2)
  if (ampm === 'AM') {
    if (hours === 12) {
      return time.replace(s.slice(0, 2), '00')
    }
    return time
  } else if (ampm === 'PM') {
    if (hours !== 12) {
      return time.replace(s.slice(0, 2), String(hours + 12))
    }
    return time
  }
  return false
}

export const getErrorByType = (id, type, errors, touched) => {
  switch (type) {
    case 'name':
      if (
        errors[`${id}.first`] !== undefined &&
        touched[`${id}.first`] === true
      )
        return errors[`${id}.first`]
      if (
        errors[`${id}.middle`] !== undefined &&
        touched[`${id}.middle`] === true
      )
        return errors[`${id}.middle`]

      if (errors[`${id}.last`] !== undefined && touched[`${id}.last`] === true)
        return errors[`${id}.last`]
      return null

    case 'address':
      if (
        errors[`${id}.street`] !== undefined &&
        touched[`${id}.street`] === true
      )
        return errors[`${id}.street`]

      if (
        errors[`${id}.street2`] !== undefined &&
        touched[`${id}.street2`] === true
      )
        return errors[`${id}.street2`]

      if (errors[`${id}.city`] !== undefined && touched[`${id}.city`] === true)
        return errors[`${id}.city`]

      if (
        errors[`${id}.state`] !== undefined &&
        touched[`${id}.state`] === true
      )
        return errors[`${id}.state`]

      if (errors[`${id}.zip`] !== undefined && touched[`${id}.zip`] === true)
        return errors[`${id}.zip`]

      if (
        errors[`${id}.country`] !== undefined &&
        touched[`${id}.country`] === true
      )
        return errors[`${id}.country`]

      return null

    case 'price':
      if (
        errors[`${id}.first`] !== undefined &&
        touched[`${id}.first`] === true
      )
        return errors[`${id}.first`]

      if (errors[`${id}.last`] !== undefined && touched[`${id}.last`] === true)
        return errors[`${id}.last`]

    case 'phone':
      if (
        errors[`${id}.phone`] !== undefined &&
        touched[`${id}.phone`] === true
      )
        return errors[`${id}.phone`]

    case 'time':
      if (
        errors[`${id}.format`] !== undefined &&
        touched[`${id}.format`] === true
      )
        return errors[`${id}.format`]

      if (errors[`${id}.hour`] !== undefined && touched[`${id}.hour`] === true)
        return errors[`${id}.hour`]

      if (
        errors[`${id}.minute`] !== undefined &&
        touched[`${id}.minute`] === true
      )
        return errors[`${id}.minute`]

      return null

    default:
      return errors[id] !== undefined && touched[id] === true
        ? errors[id]
        : null
  }
}
