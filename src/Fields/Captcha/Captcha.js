import React, { Fragment } from 'react'
import { Custom } from 'boomform'
import ReCAPTCHA from 'react-google-recaptcha'
import Error from './../../Error'

const Captcha = ({ siteKey }) => {
  const onChange = (handleChange, value) => {
    handleChange({
      id: 'captcha',
      e: null,
      value,
      field: {
        id: 'captcha',
        initial: null,
        validation: { required: { msg: 'Captcha Is Required' } }
      }
    })
  }

  const onBlur = (handleBlur, value) => {
    handleBlur({
      id: 'captcha',
      e: null,
      value: value,
      field: { id: 'captcha', initial: null }
    })
  }

  return (
    <Custom
      id='captcha'
      validation={{ required: { msg: 'Captcha Is Required' } }}
    >
      {({ handleChange, handleBlur, value }) => {
        return (
          <div id='field-captcha' className='boomForm-field__content'>
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={(newValue) => onChange(handleChange, newValue)}
              onBlur={() => onBlur(handleBlur, value)}
            />
            <Error
              classnameprefix={'captcha'}
              id={'captcha'}
              type={'captcha'}
            />
          </div>
        )
      }}
    </Custom>
  )
}

export default Captcha
