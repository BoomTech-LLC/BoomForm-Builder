import React, { Fragment } from 'react'

import SubmitButton from './SubmitButton/SubmitButton'
import Pagination from './Pagination/Pagination'
import Captcha from './Captcha'

const Footer = ({
  formRef,
  global,
  button,
  fields,
  isPagination,
  pagination,
  currentPage,
  setCurrentPage,
  payment,
  logic,
  allFiles
}) => {
  const { captcha } = global
  const { pages } = pagination

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
        logic={logic}
      />
    )
  else
    return (
      <>
        {captcha !== undefined && <Captcha siteKey={captcha} />}
        <SubmitButton
          global={global}
          button={button}
          fields={fields}
          formRef={formRef}
          payment={payment}
          logic={logic}
          allFiles={allFiles}
        />
      </>
    )
}

export default Footer
