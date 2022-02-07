import React, { Fragment } from 'react'
import { Input } from 'boomform'

const Email = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='email' />
}

export default Email
