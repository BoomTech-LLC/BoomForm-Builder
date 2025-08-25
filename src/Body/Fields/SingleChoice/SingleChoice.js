import React, { Fragment, useEffect, useMemo, useState, useRef } from 'react'
import classNames from 'classnames/bind'
import Quantity from './../Quantity/Quantity'
import Item from './Item'
import Other from './Other'

const SingleChoice = ({
  id,
  options,
  classnameprefix,
  quantity,
  payment,
  validation
}) => {
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

  const initiallyChecked = useMemo(
    () => options?.find(o => o.checked),
    [options]
  )
  const [max, setMax] = useState(() =>
    initiallyChecked ? computeLimitLeft(initiallyChecked) : null
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
              const newMax = computeLimitLeft(selectedOption)
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
    setMax(initiallyChecked ? computeLimitLeft(initiallyChecked) : null)
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
