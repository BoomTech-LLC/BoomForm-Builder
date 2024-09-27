import React, { Fragment } from 'react'
import { Input } from 'boomform'
import Other from './Other'
import Item from './Item'

const MultipleChoice = ({
  id,
  options,
  classnameprefix,
  quantity,
  validation,
  payment,
  limit: limitState
}) => {
  const [hasInitial] = options.filter(option => option.checked)

  return (
    <>
      {options.map(option => {
        const { key, count = 0, limit: optionLimit = 0 } = option
        if (limitState && optionLimit > 0 && count === optionLimit) {
          return null
        }
        if (key === 'other')
          return (
            <Other
              key={`${id}.${key}`}
              id={id}
              options={options}
              option={option}
              quantity={quantity}
              classnameprefix={classnameprefix}
            />
          )
        else
          return (
            <Item
              key={`${id}.${key}`}
              id={id}
              options={options}
              option={option}
              quantity={quantity}
              payment={payment}
              classnameprefix={classnameprefix}
            />
          )
      })}
      <Input
        id={`${id}.error`}
        validation={validation}
        initial={hasInitial ? 'Checked' : ''}
      />
    </>
  )
}

export default MultipleChoice
