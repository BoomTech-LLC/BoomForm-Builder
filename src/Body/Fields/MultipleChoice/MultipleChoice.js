import React, { Fragment } from 'react'
import { Input } from 'boomform'
import Other from './Other'
import Item from './Item'

const MultipleChoice = ({
  id,
  options,
  classnameprefix,
  quantity,
  validation
}) => (
  <>
    {options.map((option) => {
      const { key } = option

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
            classnameprefix={classnameprefix}
          />
        )
    })}
    <Input id={`${id}.error`} validation={validation} />
  </>
)

export default MultipleChoice
