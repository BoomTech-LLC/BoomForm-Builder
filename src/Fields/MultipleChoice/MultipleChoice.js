import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Quantity from '../Quantity/Quantity'
import { Checkbox, Viewer } from 'boomform'
import { getOtherChecked } from '../../Helpers/choice'

const MultipleChoice = ({
  id,
  label,
  options,
  classnameprefix,
  quantity,
  validation,
  ...props
}) => {
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  return (
    <>
      {options.map(
        (
          {
            key,
            label,
            placeholder,
            value,
            checked,
            isNumber = false,
            ...attr
          },
          index
        ) => {
          if (key === 'other')
            return (
              <label
                className={classNames('boomForm-multipleChoice__item', {
                  [`${classnameprefix}-multipleChoice__item`]: classnameprefix
                })}
                key={`${id}.${key}`}
              >
                <Viewer>
                  {({ values, handleChange }) => {
                    const { checked: otherChecked } = getOtherChecked(
                      id,
                      values
                    )

                    let isSomeChecked = true
                    if (values[id] !== undefined) {
                      const checkboxValues = Object.values(values[id])
                      if (checkboxValues.includes(true)) isSomeChecked = false
                    }

                    return (
                      <>
                        <Checkbox
                          {...props}
                          id={`${id}.${key}`}
                          value={value || 'other'}
                          initial={checked}
                          validation={
                            index === options.length - 1 && isSomeChecked
                              ? validation
                              : {}
                          }
                        />
                        {otherChecked || (otherChecked === null && checked) ? (
                          <input
                            className='boomForm-other__item'
                            autoFocus={true}
                            type={isNumber ? 'number' : 'text'}
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
                                  ...props,
                                  id: `${id}.other`,
                                  type: 'checkbox',
                                  name: id
                                }
                              })
                            }}
                          />
                        ) : (
                          <span>{placeholder}</span>
                        )}
                      </>
                    )
                  }}
                </Viewer>
                {enabled && (
                  <Quantity
                    {...props}
                    id={`${id}.${key}`}
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
                <Viewer>
                  {({ values }) => {
                    let isSomeChecked = true
                    if (values[id] !== undefined) {
                      const checkboxValues = Object.values(values[id])
                      if (checkboxValues.includes(true)) isSomeChecked = false
                    }

                    return (
                      <Checkbox
                        {...attr}
                        {...props}
                        id={`${id}.${key}`}
                        value={value}
                        initial={checked}
                        validation={
                          index === options.length - 1 && isSomeChecked
                            ? validation
                            : {}
                        }
                      />
                    )
                  }}
                </Viewer>
                <span>{label}</span>
                {enabled && (
                  <Quantity
                    {...props}
                    id={`${id}.${key}`}
                    label={quantityLabel}
                    value={quantityValue}
                    classnameprefix={classnameprefix}
                  />
                )}
              </label>
            )
        }
      )}
    </>
  )
}

export default MultipleChoice
