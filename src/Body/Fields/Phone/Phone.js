import React, { Fragment } from 'react'
import { Input } from 'boomform'
import DropDown from './DropDown/DropDown'

const Phone = ({
  label,
  classnameprefix,
  id,
  defaultCountryCode ='AF',
  payment,
  ...props
}) => {

  return (
    <>
      <DropDown id={id} defaultCountryCode={defaultCountryCode} />
      <Input id={`${id}.phone`} type='phone' {...props} />
    </>
  )
}

export default Phone
