import React, { Fragment } from 'react'
import SubmitButton from './Fields/SubmitButton/SubmitButton'
import Captcha from './Fields/Captcha/Captcha'
import Print from './Print/Print'

const Footer = ({
  captcha,
  button,
  fields,
  name,
  description,
  isPrint,
  onSubmit
}) => {
  return (
    <>
      {captcha !== undefined && <Captcha siteKey={captcha} />}
      <div>
        <SubmitButton button={button} onSubmit={onSubmit} />
        {isPrint && (
          <Print fields={fields} name={name} description={description} />
        )}
      </div>
    </>
  )
}

export default Footer
