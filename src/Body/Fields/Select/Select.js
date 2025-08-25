import React, { useEffect, useState, Fragment, useMemo } from 'react'
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
  const { showPrices } = payment

  const computeLimitLeft = currentOption => {
    if (
      !currentOption ||
      !('limit' in currentOption) ||
      typeof currentOption.limit !== 'number' ||
      currentOption.limit <= 0
    ) {
      return null
    }
    const limitLeft = currentOption.limit - (currentOption.count || 0)
    return limitLeft > 0 ? limitLeft : null
  }

  const initiallySelected = useMemo(() => options?.find(o => o.checked), [options])
  const [max, setMax] = useState(() => (initiallySelected ? computeLimitLeft(initiallySelected) : null))

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

  useEffect(() => {
    setMax(initiallySelected ? computeLimitLeft(initiallySelected) : null)
  }, [initiallySelected])

  if (!_options) return null

  const handleOnChange = e => {
    const selectedKey = e?.value
    const selectedOption = options?.find(opt => opt?.key === selectedKey)
    setMax(computeLimitLeft(selectedOption))
  }

  return (
    <>
      <PrimarySelect id={id} options={_options} onChange={handleOnChange} {...props} />
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
