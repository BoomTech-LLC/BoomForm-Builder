import React from 'react'
import { Input, useField } from 'boomform'

const Other = ({ id, index, placeholder, isNumber }) => {
  const field = useField([`${id}.${index}`])

  return field?.value ? (
    <Input
      type={isNumber ? 'number' : 'text'}
      id={`other.${id}`}
      autoFocus={true}
      placeholder={placeholder}
      className='boomForm-other__item'
      onChange={(e) => {
        const { handleChange, value } = e
        setTimeout(() =>
          handleChange({
            id: `${id}.error`,
            value: value
          })
        )
      }}
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
