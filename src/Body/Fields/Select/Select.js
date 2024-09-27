import React, { useEffect, useState } from 'react'
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
  limit: limitState,
  ...props
}) => {
  const [_options, set_Options] = useState(null)
  const { showPrices } = payment

  useEffect(() => {
    const newOptions = options.map(option => {
      const { count = 0, limit: optionLimit = 0 } = option

      if (limitState && optionLimit > 0 && count >= optionLimit) {
        return null
      }

      if (showPrices && option.label) {
        option.label = option.label + formatPrice({
          payment,
          price: option.price,
          shouldFormat: true
        })
      }
      return option
    }).filter(Boolean)

    set_Options(newOptions)
  }, [options, showPrices, limitState])

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
