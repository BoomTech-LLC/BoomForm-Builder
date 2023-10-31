import React, { Fragment } from 'react'

import Field from './Field'

const PageItems = ({ fields, pageFields, payment }) => {
  return (
    <>
      {fields.map((field) => {
        if (!pageFields.includes(field.id)) return null
        return (
          <div key={field.id}>
            <Field key={field.id} payment={payment} {...field} />
          </div>
        )
      })}
    </>
  )
}

export default PageItems
