import React from 'react'
import { Input } from 'boomform'

const Password = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='password' />
}

export default Password
