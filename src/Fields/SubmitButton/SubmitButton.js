import React, { useContext } from 'react'
import { Context } from 'boomform'

const SubmitButton = ({ onSubmit, button, hide }) => {
  const { state, actions } = useContext(Context)
  const { text, prefix, suffix } = button || { text: 'Submit' }

  if (hide) return null

  const handleClick = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit({ state, actions })
    else console.log({ state, actions })
  }

  return (
    <div className={'boomForm-button__content'}>
      {suffix}
      <button onClick={handleClick}>
        <span>{text}</span>
      </button>
      {prefix}
    </div>
  )
}

export default SubmitButton
