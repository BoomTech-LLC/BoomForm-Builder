import React, { Fragment } from 'react'
import SubmitButton from './Fields/SubmitButton/SubmitButton'
import Captcha from './Fields/Captcha/Captcha'

const Footer = ({ captcha, ...props }) => {
  return (
    <>
      {captcha !== undefined && <Captcha siteKey={captcha} />}
      <div>
        <SubmitButton {...props} />
      </div>
    </>
  )
}

export default Footer
