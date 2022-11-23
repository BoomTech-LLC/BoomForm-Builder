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
  payment,
  global,
  isPagination
}) => {
  const data = useField(updatableFields)

  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields
  })

  const printableFields = getPrintableFields(fields, logicIds, pagination)

  if (printableFields.length === 0 && !isPagination) {
    const { onPageChange } = global

    setCurrentPage((prev) => prev + 1)
    if (onPageChange) onPageChange()
  }

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
