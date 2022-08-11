import React, { memo } from 'react'
import { useField } from 'boomform'
import Field from './Field'
import { getPrintableFields } from './../Helpers/global'
import { getHiddenIds } from './../Helpers/logic'

const Fields = ({
  fields,
  logic,
  pagination,
  setCurrentPage,
  updatableFields,
  payment
}) => {
  console.log(1, updatableFields)

  const data = useField(updatableFields)

  console.log(2, data)

  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields
  })

  console.log(3, logicIds)
  const printableFields = getPrintableFields(fields, logicIds, pagination)

  console.log(4, printableFields)
  if (printableFields.length === 0) setCurrentPage((prev) => prev + 1)

  return (
    <div className='boomForm-fields'>
      {fields.map((field) => {
        const { id } = field

        if (!printableFields.includes(id)) return null

        return <Field key={id} payment={payment} {...field} />
      })}
    </div>
  )
}

export default memo(Fields)
