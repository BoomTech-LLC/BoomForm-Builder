import React, { useContext, Fragment } from 'react'
import { Context } from 'boomform'
import Print from './../../Print/Print'
import Captch from './Captcha'

const SubmitButton = ({ global, button, fields, hide, formRef }) => {
  const { state, actions } = useContext(Context)

  const { text, prefix, suffix } = button || { text: 'Submit' }
  const { name, description, captcha, isPrint } = global

  if (hide) return null

  const handleClick = (e) => {
    e.preventDefault()

    if (formRef.current.checkValidity()) {
      if (onSubmit) onSubmit({ state, actions })
      else console.log({ state, actions })
    } else {
      formRef.current.reportValidity()
      if (onSubmitFailed) onSubmitFailed(state)
    }
  }

  return (
    <>
      {captcha !== undefined && <Captcha siteKey={captcha} />}
      <div className={'boomForm-button__content'}>
        {suffix}
        <button onClick={handleClick}>
          <span>{text}</span>
        </button>
        {prefix}
        {isPrint && (
          <Print fields={fields} name={name} description={description} />
        )}
      </div>
    </>
  )
}

export default SubmitButton
