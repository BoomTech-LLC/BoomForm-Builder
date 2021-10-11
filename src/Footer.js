import React from 'react'
import SubmitButton from './Fields/SubmitButton/SubmitButton'
import Captcha from './Fields/Captcha/Captcha'

const Footer = ({ captcha, button, onSubmit }) => {
  return (
    <>
      {captcha !== undefined && <Captcha siteKey={captcha} />}
      <div>
        <SubmitButton button={button} onSubmit={onSubmit} />
      </div>
    </>
  )
}

export default Footer
