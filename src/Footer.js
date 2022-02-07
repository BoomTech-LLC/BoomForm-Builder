import React, { Fragment } from 'react'

import SubmitButton from './Body/Fields/SubmitButton/SubmitButton'
import Captcha from './Body/Fields/Captcha/Captcha'

const Footer = ({ fields, captcha, ...props }) => {
  return (
    <>
      {captcha !== undefined && <Captcha siteKey={captcha} />}
      <SubmitButton {...props} fields={fields} />
    </>
  )
}

export default Footer
