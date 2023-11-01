import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { Radio } from 'boomform'
import { getOptions } from '../../../Helpers/scaleRating'

const ScaleRating = ({
  id,
  max = 5,
  min = 0,
  start,
  end,
  classnameprefix,
  initial,
  ...props
}) => {
  return (
    <>
      <span>{start}</span>
      {getOptions({ min, max }).map((value) => {
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
              id={id}
              value={`${value}`}
              initial={initial === value ? true : false}
            />
          </div>
        )
      })}
      <span>{end}</span>
    </>
  )
}

export default ScaleRating
