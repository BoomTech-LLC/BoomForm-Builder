import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Quantity from './../Quantity/Quantity'
import Item from './Item'
import Other from './Other'

const SingleChoice = ({
  id,
  options,
  classnameprefix,
  quantity = {},
  payment,
  validation
}) => {
  const { isPerOption = false } = quantity
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
                isPerOption={isPerOption}
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
                quantity={quantity}
                isPerOption={isPerOption}
                classnameprefix={classnameprefix}
                validation={index === 0 ? validation : {}}
              />
            )
        })}
      </div>
      {!isPerOption && (
        <Quantity {...quantity} id={id} classnameprefix={classnameprefix} />
      )}
    </>
  )
}

export default SingleChoice
