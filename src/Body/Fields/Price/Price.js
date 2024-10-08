import React, { Fragment } from 'react'
import { Input } from 'boomform'
import {
  getPlaceholder,
  getInitial,
  getValidation
} from './../../../Helpers/global'

const Price = ({
  id,
  placeholders,
  initials,
  validations,
  label,
  currency = '$',
  separator = '.',
  classnamepreFix,
  isDecimal = true,
  ...props
}) => {
  return (
    <>
      <span className='currency__symbol'>{currency}</span>
      <span className='price__first'>
        <Input
          {...props}
          id={`${id}.first`}
          type='number'
          placeholder={getPlaceholder(placeholders, 'first')}
          initial={getInitial(initials, 'first')}
          validation={getValidation(validations, 'first')}
        />
      </span>
      {isDecimal && (
        <>
          <span className='price__separator'>{separator}</span>
          <span className='price__last'>
            <Input
              {...props}
              id={`${id}.last`}
              type='number'
              placeholder={getPlaceholder(placeholders, 'last')}
              initial={getInitial(initials, 'last')}
              validation={getValidation(validations, 'last')}
            />
          </span>
        </>
      )}
    </>
  )
}

export default Price
