import React from 'react'
import { Input } from 'boomform'
import { isIphone } from '../../../Helpers/global'

const Date = ({ validation = {}, ...props }) => {
  const { min, max } = validation
  if (min || max) {
    validation = {
      ...validation,
      custom: (value) => {
        if (value) {
          if (min?.value > value) return min?.msg
          if (max?.value < value) return max?.msg
        }
        return false
      }
    }
  }
  const handleChange = ({ ref }) => {
    if (isIphone()) {
      setTimeout(() => {
        ref.current.value = '';
        
      })
}
  }
  return (
    <Input
      {...props}
      type='date'
      validation={validation}
      min={min?.value}
      max={max?.value}
      onChange={handleChange}
    />
  )
}

export default Date
