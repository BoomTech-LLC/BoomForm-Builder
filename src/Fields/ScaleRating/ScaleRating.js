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
  ...props
}) => {
  return (
    <>
      <span>{preFix}</span>
      <div
        className={classNames('boomForm-scaleRating-option__content', {
          [`${classnameprefix}-scaleRating-option__content`]: classnameprefix
        })}
      >
        {Array.from(
          { length: max + 1 },
          (val, index) => index >= min && index
        ).map((item, i) => {
          if (item === false) return
          return (
            <>
              <span>{i}</span>
              <Radio
                key={item}
                id={`${id}.${i}`}
                value={`${id}.${i}`}
                name={id}
                {...props}
              />
            </>
          )
        })}
      </div>
      <span>{postFix}</span>
    </>
  )
}

export default ScaleRating
