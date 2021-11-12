import React, { Fragment, useContext } from 'react'
import { Context } from 'boomform'

import SubmitButton from './Fields/SubmitButton/SubmitButton'
import Captcha from './Fields/Captcha/Captcha'
import { getErrorByType } from './Helpers/global'

const Footer = ({ fields, captcha, ...props }) => {
  const { state, actions } = useContext(Context)

  const handleValidationFields = () => {
    const { errors, touched } = state
    const { handleBlur } = actions
    let isErrorExists = false
    Object.keys(touched).forEach((key) => (touched[key] = true))
    Object.keys(errors).map((item) => {
      fields.map((field) => {
        const { id, type } = field
        const isError = getErrorByType(id, type, errors, touched)
        if (isError) {
          isErrorExists = true
          handleBlur({
            id: item,
            e: null,
            field: field
          })
        }
      })
    })
    return isErrorExists
  }

  return (
    <>
      {captcha !== undefined && <Captcha siteKey={captcha} />}
      <div>
        <SubmitButton
          handleValidationFields={() => handleValidationFields()}
          {...props}
        />
      </div>
    </>
  )
}

export default Footer
