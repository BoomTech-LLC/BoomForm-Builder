import React, { Fragment } from 'react'
import Quantity from '../Quantity/Quantity'
import { Select as PrimarySelect, Viewer } from 'boomform'
import { getOtherKey } from '../../Helpers/select'

const DropDown = ({ id, label, classnameprefix, quantity, ...props }) => {
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  return (
    <Viewer>
      {({ values, handleChange }) => {
        const { key: otherKey, value: otherValue } = getOtherKey(
          `${id}.selected`,
          values
        )
        return (
          <>
            <PrimarySelect id={`${id}.selected`} {...props} />
            {otherKey === 'other' && (
              <input
                {...props}
                autoFocus={true}
                type='text'
                placeholder={otherValue}
                onChange={(e) => {
                  handleChange({
                    id: `${id}.selected.value`,
                    value: e.target.value,
                    e: null,
                    field: {
                      id: `${id}.selected.value`,
                      type: 'select'
                    }
                  })
                }}
              />
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
      }}
    </Viewer>
  )
}

export default DropDown
