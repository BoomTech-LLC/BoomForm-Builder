import React, { Fragment, useState } from 'react'
import classNames from 'classnames/bind'
import { Input } from 'boomform'

const Password = ({ label, classnameprefix, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return <> 
    <Input {...props} type={showPassword ? 'text' : 'password'} />
    <span 
      onClick={() => setShowPassword(value => !value)}  
      className={classNames({'no-show-password': !showPassword, 'show-password': showPassword})}
    ></span>
  </>
}

export default Password
