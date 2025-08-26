import React, { Fragment } from 'react'
import { Radio } from 'boomform'
import classNames from 'classnames'
import { formatPrice } from './../../../../Helpers/payment'

const Item = ({
  id,
  option,
  payment,
  classnameprefix,
  validation,
  onChange
}) => {
  const { key, label, value, checked, price } = option

  return (
    <label
      className={classNames('boomForm-singleChoice__item', {
        [`${classnameprefix}-singleChoice__item`]: classnameprefix
      })}
      key={`${id}.${key}`}
    >
      <Radio
        id={id}
        name={id}
        value={value}
        initial={checked}
        validation={validation}
        onChange={onChange}
      />
      <span
        dangerouslySetInnerHTML={{
          __html:
            label +
            formatPrice({
              payment,
              price,
              shouldFormat: true
            })
        }}
      ></span>
    </label>
  )
}

export default Item
