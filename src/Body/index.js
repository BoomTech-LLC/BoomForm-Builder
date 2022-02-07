import React, { useEffect } from 'react'
import Fields from './Fields'

const Body = ({
  isLogic,
  logic,
  fields,
  isPagination,
  pages,
  currentPage,
  setCurrentPage
}) => {
  const updatableFields = []

  if (isLogic)
    for (let i = 0; i < logic.length; i++)
      for (let j = 0; j < logic[i].conditions.length; j++)
        logic[i].conditions[j].item
          ? updatableFields.push(
              `${logic[i].conditions[j].id}.${logic[i].conditions[j].item}`
            )
          : updatableFields.push(logic[i].conditions[j].id)

  return (
    <Fields
      fields={fields}
      logic={logic}
      updatableFields={updatableFields}
      pagination={isPagination ? pages[currentPage].fields : []}
      setCurrentPage={setCurrentPage}
    />
  )
}

export default Body
