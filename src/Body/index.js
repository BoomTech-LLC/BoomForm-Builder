import React from 'react'
import Fields from './Fields'

const Body = ({
  payment,
  fields,
  currentPage,
  setCurrentPage,
  global,
  formRef,
  pages,
  printableFields,
  prevCurrent
}) => {
  console.log('Printable FIelds inside body', printableFields)
  return (
    <Fields
      fields={fields}
      payment={payment}
      setCurrentPage={setCurrentPage}
      global={global}
      pages={pages}
      currentPage={currentPage}
      formRef={formRef}
      printableFields={printableFields}
      prevCurrent={prevCurrent}
    />
  )
}

export default Body
