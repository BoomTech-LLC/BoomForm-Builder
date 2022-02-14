import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Quantity from './../Quantity/Quantity'
import Item from './Item'
import Other from './Other'

const SingleChoice = ({ id, options, classnameprefix, quantity }) => (
  <>
    <div
      className={classNames('boomForm-singleChoice__optionsContent', {
        [`${classnameprefix}-singleChoice__optionsContent`]: classnameprefix
      })}
    >
      {options.map((option) => {
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
              classnameprefix={classnameprefix}
            />
          )
      })}
    </div>
    <Quantity {...quantity} id={id} classnameprefix={classnameprefix} />
  </>
)

export default SingleChoice
