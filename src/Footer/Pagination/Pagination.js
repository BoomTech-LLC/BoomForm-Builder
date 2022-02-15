import React, { Fragment } from 'react'
import Counter from './Counter'
import Buttons from './Buttons/Buttons'
import Numbers from './Buttons/Numbers'

const Pagination = ({
  formRef,
  global,
  button,
  fields,
  pagination,
  currentPage,
  setCurrentPage
}) => {
  const { pageCounter, type, pages } = pagination

  return (
    <>
      {pageCounter && (
        <Counter currentPage={currentPage} pagesLangth={pages.length} />
      )}
      {type === 0 ? (
        <Buttons
          formRef={formRef}
          global={global}
          button={button}
          fields={fields}
          pagination={pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <Numbers
          formRef={formRef}
          global={global}
          button={button}
          fields={fields}
          pagination={pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  )
}

export default Pagination
