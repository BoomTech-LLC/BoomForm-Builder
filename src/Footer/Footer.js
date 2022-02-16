import React, { Fragment } from 'react'

import SubmitButton from './SubmitButton/SubmitButton'
import Pagination from './Pagination/Pagination'

const Footer = ({
  formRef,
  global,
  button,
  fields,
  isPagination,
  pagination,
  currentPage,
  setCurrentPage,
  payment
}) => {
  if (isPagination)
    return (
      <Pagination
        global={global}
        button={button}
        fields={fields}
        formRef={formRef}
        pagination={pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        payment={payment}
      />
    )
  else
    return (
      <SubmitButton
        global={global}
        button={button}
        fields={fields}
        formRef={formRef}
        payment={payment}
      />
    )
}

export default Footer
