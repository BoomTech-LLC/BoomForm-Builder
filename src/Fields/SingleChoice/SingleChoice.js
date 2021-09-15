import React, { Fragment, useState } from 'react'
import classNames from 'classnames/bind'
import Quantity from '../Quantity/Quantity'
import { Radio, Input } from 'boomform'

const SingleChoice = ({
  id,
  label,
  options,
  classnameprefix,
  quantity,
  ...props
}) => {
  const [otherChecked, setOtherChecked] = useState(null)
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  const handleOtherChange = ({ value, id: key }) => {
    if (key === `${id}.other` && value.checked) setOtherChecked(true)
    else setOtherChecked(false)
  }
  return (
    <>
      {options.map(({ key, label, placeholder, value, checked }) => {
        if (key === 'other')
          return (
            <label
              className={classNames('boomForm-singleChoice__item', {
                [`${classnameprefix}-singleChoice__item`]: classnameprefix
              })}
              key={`${id}.${key}`}
            >
              <Radio
                {...props}
                id={`${id}.${key}`}
                name={id}
                value={value || 'other'}
                initial={checked}
                onChange={handleOtherChange}
              />
              {otherChecked || (otherChecked === null && checked) ? (
                <Input
                  {...props}
                  autoFocus={true}
                  id={`${id}.otherValue`}
                  type='text'
                  placeholder={placeholder}
                  onClick={({ handleChange }) => {
                    handleChange({
                      id: `${id}.other`,
                      value: {
                        checked: true,
                        value: 'other'
                      },
                      e: null,
                      field: {
                        id: `${id}.other`,
                        type: 'radio',
                        name: id
                      }
                    })
                  }}
                />
              ) : (
                <span>{placeholder}</span>
              )}
            </label>
          )
        else
          return (
            <label
              className={classNames('boomForm-singleChoice__item', {
                [`${classnameprefix}-singleChoice__item`]: classnameprefix
              })}
              key={`${id}.${key}`}
            >
              <Radio
                {...props}
                id={`${id}.${key}`}
                name={id}
                value={value}
                initial={checked}
                onChange={handleOtherChange}
              />
              <span>{label}</span>
            </label>
          )
      })}

      {enabled && (
        <Quantity
          id={id}
          label={quantityLabel}
          value={quantityValue}
          classnameprefix={classnameprefix}
        />
      )}
    </>
  )
}

export default SingleChoice
