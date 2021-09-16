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
  initials !== undefined && initials[id] ? initials[id] : undefined

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
