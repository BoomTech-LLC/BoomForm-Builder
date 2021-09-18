import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Quantity from '../Quantity/Quantity'
import { Radio, Viewer } from 'boomform'
import { getOtherChecked } from '../../Helpers/choice'

const SingleChoice = ({
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
      {options.map(
        ({ key, label, placeholder, value, checked, type = 'text' }) => {
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
                />
                <Viewer>
                  {({ values, handleChange }) => {
                    const { checked: otherChecked } = getOtherChecked(
                      id,
                      values
                    )
                    return otherChecked ||
                      (otherChecked === null && checked) ? (
                      <input
                        {...props}
                        autoFocus={true}
                        type={type}
                        placeholder={placeholder}
                        onChange={(e) => {
                          handleChange({
                            id: `${id}.other`,
                            value: {
                              checked: true,
                              value: e.target.value
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
                    )
                  }}
                </Viewer>
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
                />
                <span>{label}</span>
              </label>
            )
        }
      )}

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
