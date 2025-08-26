import React from 'react'
import classNames from 'classnames/bind'
import { Input } from 'boomform'

const Quantity = ({
  id,
  label,
  value,
  classnameprefix,
  enabled,
  max,
}) => {
  if (!enabled) return null

  return (
    <label
      className={classNames('boomForm-quantity__item', {
        [`${classnameprefix}-quantity__item`]: classnameprefix
      })}
    >
      {label}
      {label && <span>:</span>}
      <Input
        id={`quantity.${id}`}
        type='number'
        initial={value}
        min={1}
        max={max}
      />
    </label>
  )
}
export default Quantity
