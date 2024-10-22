import React, { Fragment } from 'react'
import { Input } from 'boomform'

const Email = ({ label, classnameprefix, payment, ...props }) => {
  return <Input {...props} type="email" name="email" autoComplete="email" />
}

export default Email
