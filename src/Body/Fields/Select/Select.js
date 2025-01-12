import React, { useEffect, useState, Fragment } from 'react'
import Quantity from './../Quantity/Quantity'
import { getQuantityValidations } from '../../../Helpers/quantity'
import { Select as PrimarySelect } from 'boomform'
import Other from './Other'
import { formatPrice } from './../../../Helpers/payment'

const DropDown = ({
  id,
  label,
  classnameprefix,
  quantity,
  options,
  payment,
  ...props
}) => {
  const [_options, set_Options] = useState(null)
  const { showPrices } = payment
  const quantityValidations = getQuantityValidations('select', options, id)

  useEffect(() => {
    const newOptions = [...options]

    if (showPrices)
      newOptions.map(option => {
        if (option.label)
          option.label =
            option.label +
            formatPrice({ payment, price: option.price, shouldFormat: true })
      })

    set_Options(newOptions)
  }, [options, showPrices])

  if (!_options) return null

  return (
    <>
      <PrimarySelect id={id} options={_options} {...props} />
      <Other id={id} />
      <Quantity
        {...quantity}
        id={id}
        classnameprefix={classnameprefix}
        validation={quantityValidations}
      />
    </>
  )
}

export default DropDown
