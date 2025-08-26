export const limitLeft = currentOption => {
  if (
    !currentOption ||
    !('limit' in currentOption) ||
    typeof currentOption.limit !== 'number' ||
    currentOption.limit <= 0
  ) {
    return null
  }
  const limitLeft = currentOption.limit - (currentOption.count || 0)
  return limitLeft > 0 ? limitLeft : null
}
