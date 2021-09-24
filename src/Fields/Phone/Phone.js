import React, { Fragment } from 'react'
import { Input } from 'boomform'
import DropDown from './DropDown/DropDown'

const Phone = ({
  label,
  classnameprefix,
  id,
  defaultCountryCode,
  ...props
}) => {
  return (
    <>
      <DropDown id={id} />
      <Input id={`${id}.phone`} type='phone' {...props} />
    </>
  )
}

export default Phone
