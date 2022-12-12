import React, { memo, useEffect } from 'react'
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
  pages,
  currentPage,
  formRef
}) => {
  const data = useField(updatableFields)
console.log(formRef);
  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields
  })

  const printableFields = getPrintableFields(fields, logicIds, pagination)

  if (printableFields.length === 0 && pages.length - 1 > currentPage) {
    const { onPageChange } = global

    setCurrentPage((prev) => prev + 1)
    if (onPageChange) onPageChange()
  }
  useEffect(() => {
   
    const submitHandler = (e) => {
      if (printableFields.length === 1 && currentPage < pages.length - 1) {
        e.preventDefault();
        if (pages.length - 1 > currentPage) {
          setCurrentPage(prev => prev + 1)
        }
      }
    }
   formRef?.current.addEventListener('submit', submitHandler)
    return () => {
      formRef?.current.removeEventListener('submit',submitHandler)
    }
  }, [])

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
