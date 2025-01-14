import React, { Fragment, useState } from 'react'
import classNames from 'classnames/bind'
import { Input } from 'boomform'
import { stockedValidation } from '../../../Helpers/password'

const Password = ({
  label,
  classnameprefix,
  matchPassword,
  payment,
  validation,
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState({
    showPassword: false,
    showConfirmPassword: false
  })
  const newValidation = stockedValidation(validation)

  const preventPaste = e => {
    e.preventDefault()
  }

  return (
    <>
      <Input
        {...props}
        validation={newValidation}
        type={passwordVisible.showPassword ? 'text' : 'password'}
      />
      <span
        onClick={() =>
          setPasswordVisible(prev => ({
            ...prev,
            showPassword: !prev.showPassword
          }))
        }
        className={classNames('password-icon', {
          active: passwordVisible.showPassword
        })}
      ></span>

      {matchPassword?.enabled && (
        <>
          <Input
            {...props}
            id={`${props.id}_confirm`}
            validation={{HTMLValidate:true}}
            type={passwordVisible.showConfirmPassword ? 'text' : 'password'}
            placeholder={matchPassword?.placeholder}
            match={{
              id: props.id,
              msg: matchPassword.msg,
            }}
            onPaste={preventPaste}
          />
          <span
            onClick={() =>
              setPasswordVisible(prev => ({
                ...prev,
                showConfirmPassword: !prev.showConfirmPassword
              }))
            }
            className={classNames('confirm-password-icon', {
              active: passwordVisible.showConfirmPassword
            })}
          ></span>
        </>
      )}
    </>
  )
}

export default Password
