import React, { Fragment } from 'react'
import Quantity from '../Quantity/Quantity'
import { Select as PrimarySelect, Viewer } from 'boomform'

const DropDown = ({ id, label, classnameprefix, quantity, ...props }) => {
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  return (
    <Viewer>
      {({ values, handleChange }) => {
        return (
          <>
            <PrimarySelect id={`${id}.selected`} {...props} />
            {values[id]?.selected.key === 'other' && (
              <input
                {...props}
                autoFocus={true}
                type='text'
                placeholder={values[id]?.selected.value}
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
