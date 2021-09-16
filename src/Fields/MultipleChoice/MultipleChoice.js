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
  ...props
}) => {
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  return (
    <Viewer>
      {({ values, handleChange }) => {
        const { checked: otherChecked } = getOtherChecked(id, values)

        return (
          <>
            {options.map(
              ({ key, label, placeholder, value, checked, type = 'text' }) => {
                if (key === 'other')
                  return (
                    <label
                      className={classNames('boomForm-singleChoice__item', {
                        [`${classnameprefix}-singleChoice__item`]:
                          classnameprefix
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
                      {otherChecked || (otherChecked === null && checked) ? (
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
                                type: 'checkbox',
                                name: id
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
                        [`${classnameprefix}-multipleChoice__item`]:
                          classnameprefix
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
              }
            )}
          </>
        )
      }}
    </Viewer>
  )
}

export default MultipleChoice
