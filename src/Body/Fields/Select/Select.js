import React, { Fragment } from 'react'
import Quantity from './../Quantity/Quantity'
import { Select as PrimarySelect } from 'boomform'
import Other from './Other'

const DropDown = ({ id, label, classnameprefix, quantity, ...props }) => {
  const { value: quantityValue, label: quantityLabel, enabled } = quantity || {}

  return (
    <>
      <PrimarySelect id={id} {...props} />
      <Other id={id} />
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
