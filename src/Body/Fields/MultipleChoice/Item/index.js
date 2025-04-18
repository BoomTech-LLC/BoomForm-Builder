import React from 'react'
import { Checkbox } from 'boomform'
import classNames from 'classnames'
import Quantity from '../../Quantity/Quantity'
import { getQuantityValidations } from '../../../../Helpers/quantity'
import { formatPrice } from './../../../../Helpers/payment'

const Item = ({ id, options, option, quantity, payment, classnameprefix }) => {
  const { key, value, checked, label, price } = option
  const quantityValidations = getQuantityValidations('checkbox', options, id)
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
        validation={quantityValidations}
      />
    </label>
  )
}

export default Item
