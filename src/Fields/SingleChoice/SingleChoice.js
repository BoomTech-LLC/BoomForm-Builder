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
    <>
      <div
        className={classNames('boomForm-singleChoice__optionsContent', {
          [`${classnameprefix}-singleChoice__optionsContent`]: classnameprefix
        })}
      >
        {options.map(
          ({
            key,
            label,
            placeholder = 'other',
            value,
            checked,
            isNumber = false,
            ...attr
          }) => {
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
                    id={id}
                    value={value || 'other'}
                    initial={checked}
                  />
                  <Viewer>
                    {({ values }) => {
                      return values[id] === 'other' ? (
                        <Input
                          type={isNumber ? 'number' : 'text'}
                          id={`other.${id}`}
                          autoFocus={true}
                          placeholder={placeholder}
                          className='boomForm-other__item'
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
                    {...attr}
                    {...props}
                    id={id}
                    value={value}
                    initial={checked}
                  />
                  <span>{label}</span>
                </label>
              )
          }
        )}
      </div>
      {enabled && (
        <Quantity
          {...props}
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
