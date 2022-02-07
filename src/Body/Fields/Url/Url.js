import React from 'react'
import { Input } from 'boomform'

const Url = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='url' />
}

export default Url
