import React from 'react'
import { Input } from 'boomform'

const Date = ({ validation = {}, ...props }) => {
  const { min, max } = validation
  if (min || max) {
    validation = {
      ...validation,
      custom: (value) => {
        if (min?.value > value) return min?.msg
        if (max?.value < value) return max?.msg
      }
    }
  }
  console.log(validation)
  return (
    <Input
      {...props}
      type='date'
      validation={validation}
      min={min?.value}
      max={max?.value}
    />
  )
}

export default Date
