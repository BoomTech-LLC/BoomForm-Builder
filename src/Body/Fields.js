import React, { memo, Fragment } from 'react'
import Field from './Field'

const Fields = ({ fields, payment, printableFields }) => {
  return (
    <>
      {printableFields.map((pageFields, index) => {
        return (
          <div key={'page' + index} className='boomForm-fields'>
            {fields.map((field) => {
              if (!pageFields.includes(field.id)) return null
              return <Field key={field.id} payment={payment} {...field} />
            })}
          </div>
        )
      })}
    </>
  )
}

export default memo(Fields)
