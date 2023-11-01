import React, { memo, useEffect, useRef, Fragment } from 'react'
import { useField } from 'boomform'
import Field from './Field'
import { getRendableData } from './../Helpers/global'
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
              const { preFix, postFix } = field

              return (
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
            })}
          </div>
        )
      })}
    </>
  )
}

export default memo(Fields)
