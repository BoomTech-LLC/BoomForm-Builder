import React, { Fragment, useEffect, useMemo, useState } from 'react'
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

  const initiallyChecked = useMemo(() => options?.find(o => o.checked), [options])
  const [max, setMax] = useState(() => (initiallyChecked ? computeLimitLeft(initiallyChecked) : null))

  useEffect(() => {
    setMax(initiallyChecked ? computeLimitLeft(initiallyChecked) : null)
  }, [initiallyChecked])

  const handleSelect = option => {
    // Defer state update to avoid setState during render warnings from underlying components
    setTimeout(() => {
      setMax(computeLimitLeft(option))
    }, 0)
  }

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
                onSelect={() => handleSelect(option)}
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
