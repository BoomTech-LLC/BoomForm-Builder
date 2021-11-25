import React, { useContext } from 'react'
import { Context } from 'boomform'
import Print from '../../Print/Print'

const SubmitButton = ({
  handleValidationFields,
  onSubmit,
  button,
  hide,
  fields,
  name,
  description,
  isPrint
}) => {
  const { state, actions } = useContext(Context)
  const { text, prefix, suffix } = button || { text: 'Submit' }

  if (hide) return null

  const handleClick = (e) => {
    if (!handleValidationFields()) {
      if (onSubmit) onSubmit({ state, actions })
      else console.log({ state, actions })
    } 
  }

  return (
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
  )
}

export default SubmitButton
