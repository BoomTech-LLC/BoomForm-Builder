import React, { Fragment, useState } from 'react'
import Quantity from '../Quantity/Quantity'
import { Select as PrimarySelect, Input } from 'boomform'

const DropDown = ({ id, label, classnameprefix, quantity, ...props }) => {
  const [value, setValue] = useState(null)
  const { value: quantityValue, label: quantityLabel, enabled } = quantity

  return (
    <>
      <PrimarySelect
        id={`${id}.selected`}
        onChange={({ value }) => setValue(value)}
        {...props}
      />
      {value?.key === 'other' && (
        <Input
          {...props}
          id={`${id}.otherValue`}
          type='text'
          placeholder={value?.value}
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
}

export default DropDown
