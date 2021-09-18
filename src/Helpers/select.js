import { getNestedValue } from './global'

export const getOtherKey = (id, values) => {
  const selected = getNestedValue(values, id)
  return selected || {}
}
