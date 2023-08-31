export const getPrintableData = (allFields, logic = [], normalPagination) => {
  const data = {}

  if (normalPagination.pages) {
    const printableFields = allFields.flatMap(({ id }) =>
      !logic.includes(id) ? id : []
    )
    normalPagination.pages.forEach((currentPage, index) => {
      data[index] = {
        title: currentPage.title,
        isHidden: false, // THIS SHOULD BE CHECKED IN LOGIC WRITTEN ON THE TOP
        printableFields: currentPage.fields.filter((id) =>
          printableFields.includes(id)
        )
      }
    })
    return data
  } else return []
}
