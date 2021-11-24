import React, { memo } from 'react'
import Field from './Field'
import { getPrintableFields } from './Helpers/global'
import { Viewer } from 'boomform'
import { getHiddenIds } from './Helpers/logic'

const Fields = ({ fields, logic, pagination, formRef }) => {
  return (
    <Viewer>
      {({ values }) => {
        const logicIds = getHiddenIds({ logic, values, fields })
        const printableFields = getPrintableFields(fields, logicIds, pagination)
        return (
          <div className='boomForm-fields'>
            {fields.map((field) => {
              const { id } = field

              if (!printableFields.includes(id)) return null

              return <Field key={id} formRef={formRef} {...field} />
            })}
          </div>
        )
      }}
    </Viewer>
  )
}

export default memo(Fields)
