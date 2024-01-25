import React from 'react'
import { Input, useField } from 'boomform'

const Content = ({ id, index, placeholder, isNumber }) => {
  const { neededValues } = useField([`${id}.${index}`])
  const isChecked = neededValues[id]?.other || false
  const handleOnChange = (e) => {
    const { handleChange, value } = e

    setTimeout(() =>
      handleChange({
        id: `${id}.error`,
        value: value
      })
    )
  }

  if (isChecked)
    return (
      <Input
        type={isNumber ? 'number' : 'text'}
        id={`other.${id}`}
        autoFocus={true}
        placeholder={placeholder}
        className='boomForm-other__item'
        onChange={handleOnChange}
      />
    )
  else
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: placeholder
        }}
      ></span>
    )
}

export default Content
