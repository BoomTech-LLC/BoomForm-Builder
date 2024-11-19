import React, { useState } from 'react'
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

  const preventPaste = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Input
        {...props}
        validation={newValidation}
        type={passwordVisible.showPassword ? 'text' : 'password'}
        placeholder={label}
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
            validation={newValidation}
            type={passwordVisible.showConfirmPassword ? 'text' : 'password'}
            placeholder={matchPassword?.placeholder}
            matchPassword={matchPassword}
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
