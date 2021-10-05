import React from 'react'
import SubmitButton from './Fields/SubmitButton/SubmitButton'

const Footer = ({ onSubmit, button }) => {
  return (
    <div>
      <SubmitButton button={button} onSubmit={onSubmit} />
    </div>
  )
}

export default Footer
