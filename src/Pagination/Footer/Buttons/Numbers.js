import React, { Fragment, useContext } from 'react'
import classNames from 'classnames'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Fields/Captcha/Captcha'
import { Context } from 'boomform'
import { getErrorByType } from '../../../Helpers/global'

const Numbers = ({
  button,
  currentPage,
  pages,
  captcha,
  setCurrentPage,
  fields,
  ...props
}) => {
  const { state, actions } = useContext(Context)

  const handleSetPage = (index) => {
    const { errors, touched } = state
    const { fields: pageFields } = pages[currentPage]
    const { handleBlur } = actions
    let isErrorExists = false

    Object.keys(errors).map((item) => {
      fields.map((field) => {
        const { id, type, name } = field
        if (pageFields.includes(id)) {
          if (type === 'multipleChoice' || type === 'singleChoice')
            touched[name] = true
          else touched[id] = true
          const isError = getErrorByType(id, type, errors, touched)
          if (isError) {
            isErrorExists = true
            handleBlur({
              id: item
            })
          }
        }
      })
    })

    if (!isErrorExists) setCurrentPage(index)
  }

  return (
    <>
      {captcha !== undefined && currentPage === pages.length - 1 && (
        <Captcha siteKey={captcha} />
      )}
      <div className='boomForm-paginationNumbers__content'>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              type='button'
              className={classNames('boomForm-paginationNumber__button', {
                'boomForm-paginationNumber__button-active':
                  index === currentPage
              })}
              onClick={() => handleSetPage(index)}
            >
              {index + 1}
            </button>
          )
        })}
        <SubmitButton
          hide={currentPage !== pages.length - 1}
          fields={fields}
          {...props}
        />
      </div>
    </>
  )
}

export default Numbers
