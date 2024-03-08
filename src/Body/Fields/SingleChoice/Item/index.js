import React, { Fragment } from 'react'
import { Radio } from 'boomform'
import classNames from 'classnames'
import { formatPrice } from './../../../../Helpers/payment'
import Quantity from '../../Quantity/Quantity'

const Item = ({
  id,
  option,
  payment,
  classnameprefix,
  validation,
  quantity,
  isPerOption
}) => {
  const { key, label, value, checked, price, quantity: optionQuantity } = option
  return (
    <label
      className={classNames('boomForm-singleChoice__item', {
        [`${classnameprefix}-singleChoice__item`]: classnameprefix
      })}
      key={`${id}.${key}`}
    >
      <Radio id={id} value={value} initial={checked} validation={validation} />
      <span
        dangerouslySetInnerHTML={{
          __html:
            label +
            formatPrice({
              payment,
              price
            })
        }}
      ></span>
      {isPerOption && <Quantity
        id={`${id}.${key}`}
        classnameprefix={classnameprefix}
        quantity={optionQuantity || quantity}
      />}
    </label>
  )
}

export default Item
