import React from 'react'
import classNames from 'classnames/bind'
import { Input } from 'boomform'

const Quantity = ({
  id,
  label,
  value,
  classnameprefix,
  enabled,
  validation,
  option
}) => {
  if (!enabled) return null

  let maxValue = null

  if (option) {
    if (
      option?.checked &&
      'limit' in option &&
      typeof option.limit === 'number' &&
      option.limit > 0
    ) {
      maxValue = option.limit - (option.count || 0)
      if (maxValue <= 0) {
        maxValue = null
      }
    }
  }

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
        validation={validation}
        min={1}
        max={maxValue}
      />
    </label>
  )
}
export default Quantity
