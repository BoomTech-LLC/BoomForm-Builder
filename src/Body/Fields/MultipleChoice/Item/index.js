import React, { useState, useEffect } from 'react'
import { Checkbox } from 'boomform'
import classNames from 'classnames'
import Quantity from '../../Quantity/Quantity'
import { formatPrice } from './../../../../Helpers/payment'

const Item = ({ id, options, option, quantity, payment, classnameprefix }) => {
  const { key, value, checked, label, price } = option

  const computeLimitLeft = currentOption => {
    if (!currentOption || !('limit' in currentOption) || typeof currentOption.limit !== 'number' || currentOption.limit <= 0) {return null}
    const limitLeft = currentOption.limit - (currentOption.count || 0)
    return limitLeft > 0 ? limitLeft : null
  }

  const [max, setMax] = useState(() => (checked ? computeLimitLeft(option) : null))

  useEffect(() => {
    setMax(checked ? computeLimitLeft(option) : null)
  }, [checked, option])

  const handleOnChange = e => {
    const { handleChange, field, state, value } = e
    const { values } = state

    let isAnyChecked = false
    if (values[id])
      options.map(option => {
        if (field.id === `${id}.${option.key}` && value) isAnyChecked = true
        else if (field.id !== `${id}.${option.key}` && values[id][option.key])
          isAnyChecked = true
      })

    if (isAnyChecked)
      setTimeout(() => handleChange({ id: `${id}.error`, value: 'Checked' }))
    else setTimeout(() => handleChange({ id: `${id}.error`, value: '' }))

    if (value) setMax(computeLimitLeft(option))
    else setMax(null)
  }

  return (
    <label
      className={classNames('boomForm-multipleChoice__item', {
        [`${classnameprefix}-multipleChoice__item`]: classnameprefix
      })}
      key={`${id}.${key}`}
    >
      <Checkbox
        id={`${id}.${key}`}
        value={value}
        initial={checked}
        onChange={handleOnChange}
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
      <Quantity
        {...quantity}
        id={`${id}.${key}`}
        classnameprefix={classnameprefix}
        max={max}
        option={option}
      />
    </label>
  )
}

export default Item
