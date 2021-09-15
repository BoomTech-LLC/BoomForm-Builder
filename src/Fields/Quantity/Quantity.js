import React from 'react'
import classNames from 'classnames/bind'
import { Input } from 'boomform'

const Quantity = ({ id, label, value, classnameprefix }) => {
  return (
    <label
      className={classNames('boomForm-quantity__item', {
        [`${classnameprefix}-quantity__item`]: classnameprefix
      })}
    >
      {label}
      <span>:</span>
      <Input id={`${id}.quantity`} type='number' initial={value} min={1} />
    </label>
  )
}
export default Quantity
