import React, { Fragment, useEffect, useMemo, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import Quantity from './../Quantity/Quantity'
import Item from './Item'
import Other from './Other'
import { limitLeft } from '../../../Helpers/quantity.js'

const SingleChoice = ({
  id,
  options,
  classnameprefix,
  quantity,
  payment,
  validation
}) => {
  const initiallyChecked = useMemo(
    () => options?.find(o => o.checked),
    [options]
  )
  const [max, setMax] = useState(() =>
    initiallyChecked ? limitLeft(initiallyChecked) : null
  )

  const lastValueRef = useRef(null)

  useEffect(() => {
    const checkFieldValue = () => {
      try {
        const state = window.__current_form_state
        if (state?.values && state.values[id]) {
          const selectedValue = state.values[id]

          if (selectedValue !== lastValueRef.current) {
            lastValueRef.current = selectedValue

            const selectedOption = options?.find(
              option =>
                option.key === selectedValue || option.value === selectedValue
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
    setMax(initiallyChecked ? limitLeft(initiallyChecked) : null)
    if (initiallyChecked) {
      lastValueRef.current = initiallyChecked.value || initiallyChecked.key
    }
  }, [initiallyChecked])

  return (
    <>
      <div
        className={classNames('boomForm-singleChoice__optionsContent', {
          [`${classnameprefix}-singleChoice__optionsContent`]: classnameprefix
        })}
      >
        {options.map((option, index) => {
          const { key } = option
          if (key === 'other')
            return (
              <Other
                key={`${id}.${key}`}
                id={id}
                option={option}
                classnameprefix={classnameprefix}
              />
            )
          else
            return (
              <Item
                key={`${id}.${key}`}
                id={id}
                option={option}
                payment={payment}
                classnameprefix={classnameprefix}
                validation={index === 0 ? validation : {}}
              />
            )
        })}
      </div>
      <Quantity
        {...quantity}
        id={id}
        classnameprefix={classnameprefix}
        max={max}
      />
    </>
  )
}

export default SingleChoice
