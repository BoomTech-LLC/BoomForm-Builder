import React from 'react'
import { Input, useField } from 'boomform'

const Other = ({ id, isNumber, placeholder }) => {
  const field = useField([id])

  return field?.value === 'other' ? (
    <Input
      type={isNumber ? 'number' : 'text'}
      id={`other.${id}`}
      autoFocus={true}
      placeholder={placeholder}
      className='boomForm-other__item'
    />
  ) : (
    <span
      dangerouslySetInnerHTML={{
        __html: placeholder
      }}
    ></span>
  )
}

export default Other
