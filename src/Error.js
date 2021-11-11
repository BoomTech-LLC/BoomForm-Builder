import React, { useContext, memo } from 'react'
import { Context } from 'boomform'
import classNames from 'classnames/bind'
import { getErrorByType } from './Helpers/global'

const Error = ({ classnameprefix, id, type }) => {
  const { state } = useContext(Context)
  const { errors, touched } = state

  const possibleError = getErrorByType(id, type, errors, touched)
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
