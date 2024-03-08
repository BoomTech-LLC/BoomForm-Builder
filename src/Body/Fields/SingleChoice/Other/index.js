import React from 'react'
import { Radio } from 'boomform'
import classNames from 'classnames'
import Content from './Content'
import Quantity from '../../Quantity/Quantity'

const Other = ({ id, option, classnameprefix, isPerOption }) => {
  const {
    key,
    value,
    checked,
    isNumber,
    placeholder,
    quantity: optionQuantity
  } = option

  return (
    <label
      className={classNames('boomForm-singleChoice__item', {
        [`${classnameprefix}-singleChoice__item`]: classnameprefix
      })}
      key={`${id}.${key}`}
    >
      <Radio id={id} value={value || 'other'} initial={checked} />
      <Content
        id={id}
        value={value}
        isNumber={isNumber}
        placeholder={placeholder}
      />
      {isPerOption && optionQuantity && (
        <Quantity
          id={`${id}.${key}`}
          quantity={optionQuantity}
          classnameprefix={classnameprefix}
        />
      )}
    </label>
  )
}

export default Other
