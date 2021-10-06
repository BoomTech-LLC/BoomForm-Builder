import React, { Fragment } from 'react'
import { Custom, Error } from 'boomform'
import ReCAPTCHA from 'react-google-recaptcha'

const Captcha = ({ siteKey }) => {
  const onChange = (handleChange, value) => {
    handleChange({
      id: 'captcha',
      e: null,
      value,
      field: { id: 'captcha' }
    })
  }

  const onBlur = (handleBlur) => {
    handleBlur({
      id: 'captcha',
      e: null,
      value: null,
      field: { id: 'captcha' }
    })
  }

  return (
    <Custom
      id='captcha'
      validation={{ required: { msg: 'Captcha Is Required' } }}
    >
      {({ handleChange, handleBlur }) => {
        return (
          <div id='field-captcha' className='boomForm-field__content'>
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={(value) => onChange(handleChange, value)}
              onBlur={() => onBlur(handleBlur)}
            />
            <div className={`boomForm-field__error`}>
              <span className={`boomForm-field__error_text`}>
                <Error id='captcha' />
              </span>
            </div>
          </div>
        )
      }}
    </Custom>
  )
}

export default Captcha
