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
  setCurrentPage,
  payment
}) => {
  const { pageCounter, buttons, pages } = pagination
  const { type } = buttons

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
          payment={payment}
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
          payment={payment}
        />
      )}
    </>
  )
}

export default Pagination
