import React, { Fragment, useState } from 'react'
import classNames from 'classnames/bind'
import { Input } from 'boomform'
import { Validation } from '../../../Helpers/password'

const Password = ({
  label,
  classnameprefix,
  payment,
  validation,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const newValidation = Validation(validation)
  return (
    <>
      <Input
        {...props}
        validation={newValidation}
        type={showPassword ? 'text' : 'password'}
      />
      <span
        onClick={() => setShowPassword((value) => !value)}
        className={classNames('password-icon', { active: showPassword })}
      ></span>
    </>
  )
}

export default Password
