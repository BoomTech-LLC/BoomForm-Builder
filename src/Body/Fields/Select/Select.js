import React, { Fragment } from 'react'
import Quantity from './../Quantity/Quantity'
import { Select as PrimarySelect, Viewer, Input } from 'boomform'
import { getOtherKey } from '../../../Helpers/select'

const DropDown = ({ id, label, classnameprefix, quantity, ...props }) => {
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  return (
    <>
      <PrimarySelect id={id} {...props} />
      <Viewer>
        {({ values }) => {
          const {
            key: otherKey,
            value: otherValue,
            isNumber
          } = getOtherKey(`${id}`, values)
          return (
            otherKey === 'other' && (
              <Input
                type={isNumber ? 'number' : 'text'}
                id={`other.${id}`}
                autoFocus={true}
                placeholder={otherValue}
                className='boomForm-other__item'
              />
            )
          )
        }}
      </Viewer>
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

export default DropDown
