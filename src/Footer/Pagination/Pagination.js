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
  payment,
  logic,
  logicIds,
  prevCurrent

}) => {
  const { pageCounter, buttons, pages } = pagination
  const { type } = buttons

  console.log("%cPagination" , "font-size:25px;");
  console.log('logicIds', logicIds)

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
          logic={logic}
          prevCurrent={prevCurrent}
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
          logic={logic}
        />
      )}
    </>
  )
}

export default Pagination
