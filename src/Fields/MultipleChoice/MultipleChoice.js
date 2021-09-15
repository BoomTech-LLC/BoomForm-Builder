import React, { Fragment, useState } from 'react'
import classNames from 'classnames/bind'
import Quantity from '../Quantity/Quantity'
import { Checkbox, Input } from 'boomform'

const MultipleChoice = ({
  id,
  label,
  options,
  classnameprefix,
  quantity,
  ...props
}) => {
  const [otherChecked, setOtherChecked] = useState(null)
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  const handleOtherChange = ({ value }) => {
    if (value.checked) setOtherChecked(true)
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
              <Checkbox
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
                        type: 'checkbox'
                      }
                    })
                  }}
                />
              ) : (
                <span>{placeholder}</span>
              )}
              {enabled && (
                <Quantity
                  id={`${id}.quantitys.${key}`}
                  label={quantityLabel}
                  value={quantityValue}
                  classnameprefix={classnameprefix}
                />
              )}
            </label>
          )
        else
          return (
            <label
              className={classNames('boomForm-multipleChoice__item', {
                [`${classnameprefix}-multipleChoice__item`]: classnameprefix
              })}
              key={`${id}.${key}`}
            >
              <Checkbox
                {...props}
                id={`${id}.${key}`}
                name={id}
                value={value}
                initial={checked}
              />
              <span>{label}</span>
              {enabled && (
                <Quantity
                  id={`${id}.quantitys.${key}`}
                  label={quantityLabel}
                  value={quantityValue}
                  classnameprefix={classnameprefix}
                />
              )}
            </label>
          )
      })}
    </>
  )
}

export default MultipleChoice
