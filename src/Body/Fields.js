import React, { memo, useEffect, useRef, Fragment } from 'react'
import { useField } from 'boomform'
import Field from './Field'
import { getPrintableFields, getRendableData } from './../Helpers/global'
import { getHiddenIds } from './../Helpers/logic'
import GridForm from '../Grid'

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
  formRef,
  gridOptions
}) => {
  const prevCurrent = useRef(currentPage)
  const data = useField(updatableFields)
  const { onPageChange } = global

  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields
  })

  const printableFields = getRendableData(
    fields,
    logicIds,
    pagination,
    currentPage
  )

  useEffect(() => {
    const submitHandler = (e) => {
      if (printableFields.length === 1 && currentPage < pages.length - 1) {
        e.preventDefault()
        if (pages.length - 1 > currentPage) {
          setCurrentPage((prev) => prev + 1)
        }
      }
    }
    formRef?.current.addEventListener('submit', submitHandler)
    return () => {
      formRef?.current.removeEventListener('submit', submitHandler)
    }
  }, [])

  if (gridOptions && gridOptions.layout) {
    return (
      <GridForm
        fields={fields}
        setCurrentPage={setCurrentPage}
        payment={payment}
        pages={pages}
        currentPage={currentPage}
        gridOptions={gridOptions}
        printableFields={printableFields}
        prevCurrent={prevCurrent}
        onPageChange={onPageChange}
      />
    )
  }
  return (
    <>
      {printableFields.map((pageFields, index) => {
        if (pageFields.length === 0 && pages.length - 1 > currentPage) {
          if (prevCurrent.current < currentPage) {
            setCurrentPage((prev) => prev + 1)
            prevCurrent.current = currentPage
          } else {
            setCurrentPage((prev) => prev - 1)
            prevCurrent.current = prevCurrent.current - 1
          }

          if (onPageChange) onPageChange()
        }

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
