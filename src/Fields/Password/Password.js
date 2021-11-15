import React, { Fragment, useState } from 'react'
import { Input } from 'boomform'

const Password = ({ label, classnameprefix, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return <> 
    <Input {...props} type={showPassword ? 'text' : 'password'} />
    <span className='show-password'></span>
  </>
}

export default Password
