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

  useEffect(() => {
    const checkFieldValue = () => {
      try {
        const state = window.__current_form_state

        if (state?.values && state.values[id]) {
          const selectedValue = state.values[id]

          const selectedKey =
            selectedValue?.key || selectedValue?.value || selectedValue

          if (selectedKey !== lastValueRef.current) {
            lastValueRef.current = selectedKey

            const selectedOption = options?.find(
              option =>
                option.key === selectedKey || option.value === selectedKey
            )

            if (selectedOption) {
              const newMax = limitLeft(selectedOption)
              setMax(newMax)
            }
          }
        } else if (lastValueRef.current !== null) {
          lastValueRef.current = null
          setMax(null)
        }
      } catch (e) {
        console.error(e)
      }
    }

    checkFieldValue()

    const interval = setInterval(checkFieldValue, 1000)

    return () => clearInterval(interval)
  }, [id, options])

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
    setMax(initiallySelected ? limitLeft(initiallySelected) : null)
    if (initiallySelected) {
      lastValueRef.current = initiallySelected.value || initiallySelected.key
    }
  }, [initiallySelected])

  if (!_options) return null

  return (
    <>
      <PrimarySelect id={id} options={_options} {...props} />
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
