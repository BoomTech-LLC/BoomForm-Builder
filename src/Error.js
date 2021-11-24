import React, { useContext, memo, useEffect, useRef, useState } from 'react'
import { Context } from 'boomform'
import classNames from 'classnames/bind'
import { getErrorByType } from './Helpers/global'

const Error = ({ classnameprefix, id, type, formRef }) => {
  const { state } = useContext(Context)
  const { errors, touched } = state

  const possibleError = getErrorByType(id, type, errors, touched)

  useEffect(() => {
    if (formRef && formRef.current) {
      Array.from(formRef.current.elements).forEach(element => {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName === "SELECT") {
          if (possibleError !== null && element.validity.customError === true) element.reportValidity();
        }
      })
    }
  }, [state])

  if (possibleError === null) return null

  return (
    <div
      className={classNames(`boomForm-field__error`, {
        [`${classnameprefix}-field__error`]: classnameprefix
      })}
    >
      <span
        className={classNames(`boomForm-field__error_text`, {
          [`${classnameprefix}-field__error_text`]: classnameprefix
        })}
      >
        {possibleError}
      </span>
    </div>
  )
}

export default memo(Error)
