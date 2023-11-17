import React, { memo, useEffect, Fragment } from 'react'
import Field from './Field'


const Fields = ({
  fields,
  setCurrentPage,
  payment,
  global,
  pages,
  currentPage,
  formRef,
  printableFields,
  prevCurrent
}) => {

  console.log('====================================')
  console.log('Printable fields inside FieldsJs', printableFields)
  console.log('====================================')

  useEffect(() => {
    const submitHandler = (e) => {
      if (printableFields.length === 1 && currentPage < pages.length - 1) {
        e.preventDefault()
        if (pages.length - 1 > currentPage) {
          setCurrentPage((prev) => prev + 1)
        }
      }
    }
    if (formRef && formRef.current) {
      formRef?.current.addEventListener('submit', submitHandler)
    }
    return () => {
      if (formRef && formRef.current) {
        formRef?.current.removeEventListener('submit', submitHandler)
      }
    }
  }, [])

  return (
    <>
      {printableFields.map((pageFields, index) => {
        if (
          pageFields &&
          pageFields.length === 0 &&
          pages.length - 1 > currentPage
        ) {
          if (prevCurrent.current < currentPage) {
            console.log('====================================');
            console.log("SETTCURRRENTTTTPAAGGGEEE");
            console.log('====================================');
            setCurrentPage((prev) => prev + 1)
            prevCurrent.current = currentPage
          } else {
            console.log('====================================');
            console.log("ELSE :  SETTCURRRENTTTTPAAGGGEEE");
            console.log('====================================');
            setCurrentPage((prev) => prev - 1)
            prevCurrent.current = prevCurrent.current - 1
          }
        }
        console.log('====================================')
        console.log('Returning fields')
        console.log('====================================')
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
