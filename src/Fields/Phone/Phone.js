import React from 'react'
import { Input } from 'boomform'

const Phone = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='phone' />
}

export default Phone
