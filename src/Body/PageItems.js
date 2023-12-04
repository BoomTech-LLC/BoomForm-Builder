import React, { Fragment } from 'react'

import Field from './Field'

const PageItems = ({ fields, pageFields, payment }) => {
  return (
    <>
      {fields.map((field) => {
        if (!pageFields.includes(field.id)) return null
        const { preFix, postFix } = field
        return (
          (
            <div class='boomForm_field'>
              {preFix && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: preFix
                  }}
                />
              )}

              <Field key={field.id} payment={payment} {...field} />

              {postFix && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: postFix
                  }}
                />
              )}
            </div>
          )
        )
      })}
    </>
  )
}

export default PageItems
