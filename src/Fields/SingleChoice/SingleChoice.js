import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Quantity from '../Quantity/Quantity'
import { Radio, Input, Viewer } from 'boomform'

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
    <Viewer>
      {({ values }) => {
        const { checked: otherChecked } = values[id]?.other || {}
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
      }}
    </Viewer>
  )
}

export default SingleChoice
