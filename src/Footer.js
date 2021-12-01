import React, { Fragment } from 'react'

import SubmitButton from './Fields/SubmitButton/SubmitButton'
import Captcha from './Fields/Captcha/Captcha'

const Footer = ({ fields, captcha, ...props }) => {
  return (
    <>
      {captcha !== undefined && <Captcha siteKey={captcha} />}
      <SubmitButton {...props} />
    </>
  )
}

export default Footer
