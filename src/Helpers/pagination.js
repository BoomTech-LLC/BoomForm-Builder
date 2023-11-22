export const getNextPageIndex = ({ pagination, logicIds, currentPage }) => {
  let nextPage = undefined
  if (pagination) {
    const { pages, mode = 'page' } = pagination
    if (currentPage === pages.length - 1 || mode !== 'page') {
      return nextPage
    }
    for (
      let i = currentPage + 1;
      i <= pages.length - 1 && nextPage === undefined;
      i++
    ) {
      if (
        !logicIds.pages.includes(i) &&
        pages[i].fields.filter((id) => !logicIds.fields.includes(id)).length !==
          0
      ) {
        nextPage = String(i)
      }
    }
  }
  return nextPage
}
export const getPrevPageIndex = ({ pagination, logicIds, currentPage }) => {
  let prevPage = undefined
  if (currentPage === 0) {
    return prevPage
  }
  if (pagination) {
    const { pages } = pagination
    for (let i = currentPage - 1; i >= 0 && prevPage === undefined; i--) {
      if (
        !logicIds.pages.includes(i) &&
        pages[i].fields.filter((id) => !logicIds.fields.includes(id)).length !==
          0
      ) {
        prevPage = String(i)
      }
    }
  }
  return prevPage
}
