import React, { useEffect, useState, Fragment } from 'react'
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
  const [_options, set_Options] = useState(null)

  useEffect(() => {
    const { showPrices } = payment
    const newOptions = [...options]

    if (showPrices)
      newOptions.map((option) => {
        if (option.label)
          option.label =
            option.label + formatPrice({ payment, price: option.price })
      })

    set_Options(newOptions)
  }, [])

  if (!_options) return null

  return (
    <>
      <PrimarySelect id={id} options={_options} {...props} />
      <Other id={id} />
      <Quantity {...quantity} id={id} classnameprefix={classnameprefix} />
    </>
  )
}

export default DropDown
