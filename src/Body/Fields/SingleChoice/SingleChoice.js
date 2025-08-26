import React, { Fragment, useMemo, useState } from 'react'
import classNames from 'classnames/bind'
import Quantity from './../Quantity/Quantity'
import Item from './Item'
import Other from './Other'
import { limitLeft } from '../../../Helpers/quantity'

const SingleChoice = ({
  id,
  options,
  classnameprefix,
  quantity,
  payment,
  validation
}) => {
  const initiallyChecked = useMemo(
    () => options?.find(opt => opt.checked),
    [options]
  )

  const [max, setMax] = useState(() => limitLeft(initiallyChecked))

  const handleChange = e => {
    if (!e) return
    const { value } = e

    const selectedOption = options?.find(
      option => option.value === value || option.key === value
    )

    if (selectedOption) {
      setMax(limitLeft(selectedOption))
    }
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
                onChange={handleChange}
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
