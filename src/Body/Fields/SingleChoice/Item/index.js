import React, { Fragment } from 'react'
import { Radio } from 'boomform'
import classNames from 'classnames'

const Item = ({ id, option, classnameprefix }) => {
  const { key, label, value, checked } = option

  return (
    <label
      className={classNames('boomForm-singleChoice__item', {
        [`${classnameprefix}-singleChoice__item`]: classnameprefix
      })}
      key={`${id}.${key}`}
    >
      <Radio id={id} value={value} initial={checked} />
      <span
        dangerouslySetInnerHTML={{
          __html: label
        }}
      ></span>
    </label>
  )
}

export default Item
