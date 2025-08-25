import React, { Fragment } from 'react'
import { Radio } from 'boomform'
import classNames from 'classnames'
import { formatPrice } from './../../../../Helpers/payment'

const Item = ({ id, option, payment, classnameprefix, validation, onSelect }) => {
  const { key, label, value, checked, price } = option

  const handleOnChange = e => {
    console.log(e);
    
    const { value: isSelected } = e
    if (isSelected && typeof onSelect === 'function') {
      onSelect(option)
    }
  }

  return (
    <label
      className={classNames('boomForm-singleChoice__item', {
        [`${classnameprefix}-singleChoice__item`]: classnameprefix
      })}
      key={`${id}.${key}`}
    >
      <Radio id={id} value={value} initial={checked} validation={validation} onChange={handleOnChange} />
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
