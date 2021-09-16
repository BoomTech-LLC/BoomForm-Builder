import { getNestedValue } from './global'

export const getOtherChecked = (id, values) => {
  if (!id.toString().includes('.')) return values[id]?.other || {}
  const choice = getNestedValue(values, id)
  return choice?.other || {}
}
