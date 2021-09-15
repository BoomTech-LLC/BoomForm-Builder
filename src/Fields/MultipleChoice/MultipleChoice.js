import React, { Fragment } from 'react'
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
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

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
              />
              <Input
                {...props}
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
              <span>{label}</span>
              <Checkbox
                {...props}
                id={`${id}.${key}`}
                name={id}
                value={value}
                initial={checked}
              />
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
