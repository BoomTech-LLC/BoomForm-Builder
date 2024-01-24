import React from 'react'
import { Input, useField } from 'boomform'

const Content = ({ id, isNumber, placeholder }) => {
  const {neededValues} = useField([id])
  const fieldValue = neededValues[id]

  return fieldValue === 'other' ? (
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

export default Content
