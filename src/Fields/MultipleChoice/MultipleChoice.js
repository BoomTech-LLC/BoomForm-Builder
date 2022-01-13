import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Quantity from '../Quantity/Quantity'
import { Checkbox, Viewer, Input } from 'boomform'

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
                <Checkbox
                  {...props}
                  id={`${id}.${key}`}
                  value={value || 'other'}
                  initial={checked}
                  onChange={(e) => {
                    const { handleChange, state, value, field } = e

                    const { values } = state
                    let isAnyChecked = false
                    if (field.id === `${id}.other` && value) {
                      isAnyChecked = true
                    } else if (values[id]) {
                      options.map((option) => {
                        if (values[id][option.key] && option.key !== 'other')
                          isAnyChecked = true
                      })
                    }

                    if (!value && !isAnyChecked)
                      setTimeout(() =>
                        handleChange({ id: `${id}.error`, value: '' })
                      )
                  }}
                />
                <Viewer>
                  {({ values }) => {
                    return (
                      <>
                        {values[id] !== undefined && values[id].other ? (
                          <Input
                            type={isNumber ? 'number' : 'text'}
                            id={`other.${id}`}
                            autoFocus={true}
                            placeholder={placeholder}
                            className='boomForm-other__item'
                            onChange={(e) => {
                              const { handleChange, field, state, value } = e
                              setTimeout(() =>
                                handleChange({
                                  id: `${id}.error`,
                                  value: value
                                })
                              )
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
                <Checkbox
                  {...attr}
                  {...props}
                  id={`${id}.${key}`}
                  value={value}
                  initial={checked}
                  onChange={(e) => {
                    const { handleChange, field, state, value } = e
                    const { values } = state
                    let isAnyChecked = false
                    if (values[id]) {
                      options.map((option) => {
                        if (field.id === `${id}.${option.key}` && value)
                          isAnyChecked = true
                        else if (
                          field.id !== `${id}.${option.key}` &&
                          values[id][option.key]
                        )
                          isAnyChecked = true
                      })
                    }

                    if (isAnyChecked)
                      setTimeout(() =>
                        handleChange({ id: `${id}.error`, value: 'Checked' })
                      )
                    else
                      setTimeout(() =>
                        handleChange({ id: `${id}.error`, value: '' })
                      )
                  }}
                />
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
      <Input id={`${id}.error`} validation={validation} />
    </>
  )
}

export default MultipleChoice
