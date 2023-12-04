import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { Radio } from 'boomform'
import { getOptions } from '../../../Helpers/scaleRating'

const ScaleRating = ({
  id,
  max = 5,
  min = 0,
  preFix,
  middleFix,
  postFix,
  classnameprefix,
  initial,
  ...props
}) => {
  return (
    <div className='boomForm-scaleRating__wrapper'>
      <div className='scaleRating-option__wrapper'>
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
      </div>

      <div className='boomForm-scaleRating__inputs'>
        {preFix && <span>{preFix}</span>}
        {middleFix && <span>{middleFix}</span>}
        {postFix && <span>{postFix}</span>}
      </div>
    </div>
  )
}

export default ScaleRating
