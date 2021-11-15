import React, { Fragment, useState } from 'react'
import { Input } from 'boomform'

const Password = ({ label, classnameprefix, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return <> 
    <Input {...props} type={showPassword ? 'text' : 'password'} />
    <span onClick={() => setShowPassword(value => !value)} >
    <before content='gegs' style={{width: '50px', height: '50px', backgroundColor: '#000', color: "#fff"}}></before>
    </span>
  </>
}

export default Password
