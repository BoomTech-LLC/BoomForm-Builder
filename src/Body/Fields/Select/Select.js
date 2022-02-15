import React, { Fragment } from 'react'
import Quantity from './../Quantity/Quantity'
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
  const { showPrices } = payment

  const _options = options

  if (showPrices)
    _options.map((option) => {
      if (option.label)
        option.label =
          option.label + formatPrice({ payment, price: option.price })
    })

  return (
    <>
      <PrimarySelect id={id} options={_options} {...props} />
      <Other id={id} />
      <Quantity {...quantity} id={id} classnameprefix={classnameprefix} />
    </>
  )
}

export default DropDown
