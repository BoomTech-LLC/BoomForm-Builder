import React, { useEffect, useState, Fragment, useMemo, useRef } from 'react'
import Quantity from './../Quantity/Quantity'
import { Select as PrimarySelect } from 'boomform'
import Other from './Other'
import { formatPrice } from './../../../Helpers/payment'
import { limitLeft } from '../../../Helpers/quantity.js'

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

  const initiallySelected = useMemo(
    () => options?.find(o => o.checked),
    [options]
  )
  const [max, setMax] = useState(() =>
    initiallySelected ? limitLeft(initiallySelected) : null
  )

  const lastValueRef = useRef(null)
  const handleOnChange = e => {
    console.log(e)

    setMax(e.value ? limitLeft(e.value) : null)
  }

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
      <PrimarySelect
        id={id}
        options={_options}
        {...props}
        onChange={handleOnChange}
      />
      <Other id={id} />
      <Quantity
        {...quantity}
        id={id}
        classnameprefix={classnameprefix}
        max={max}
      />
    </>
  )
}

export default DropDown
