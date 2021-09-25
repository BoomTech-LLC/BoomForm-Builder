import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { Radio } from 'boomform'

const ScaleRating = ({
  id,
  max = 5,
  min = 0,
  preFix,
  postFix,
  classnameprefix,
  initial,
  ...props
}) => {
  return (
    <>
      <span>{preFix}</span>
      {Array.from(
        { length: max + 1 },
        (val, index) => index >= min && index
      ).map((value) => {
        if (value === false) return
        return (
          <div
            key={value}
            className={classNames('boomForm-scaleRating-option__content', {
              [`${classnameprefix}-scaleRating-option__content`]:
                classnameprefix
            })}
          >
            <span>{value}</span>
            <Radio
              {...props}
              id={`${id}.${value}`}
              value={value}
              name={id}
              initial={initial === value ? true : false}
            />
          </div>
        )
      })}
      <span>{postFix}</span>
    </>
  )
}

export default ScaleRating
