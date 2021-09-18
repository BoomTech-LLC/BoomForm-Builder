import React, { Fragment } from 'react'
import Quantity from '../Quantity/Quantity'
import { Select as PrimarySelect, Viewer } from 'boomform'
import { getOtherKey } from '../../Helpers/select'

const DropDown = ({ id, label, classnameprefix, quantity, ...props }) => {
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  return (
    <>
      <PrimarySelect id={`${id}`} {...props} />
      <Viewer>
        {({ values, handleChange }) => {
          const { key: otherKey, value: otherValue } = getOtherKey(
            `${id}`,
            values
          )
          return (
            otherKey === 'other' && (
              <input
                {...props}
                autoFocus={true}
                type='text'
                placeholder={otherValue}
                onChange={(e) => {
                  handleChange({
                    id: `${id}.value`,
                    value: e.target.value,
                    e: null,
                    field: {
                      id: `${id}.value`,
                      type: 'select'
                    }
                  })
                }}
              />
            )
          )
        }}
      </Viewer>
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

export default DropDown
