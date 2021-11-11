import React, { Fragment, useContext } from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Fields/Captcha/Captcha'
import { Context } from 'boomform'
import { getErrorByType } from '../../../Helpers/global'

const Buttons = ({
  pages,
  paginationButtons,
  currentPage,
  captcha,
  setCurrentPage,
  fields,
  ...props
}) => {
  const { state, actions } = useContext(Context)

  const handleValidationFields = () => {
    const { errors, touched } = state
    const { fields: pageFields } = pages[currentPage]
    const { handleBlur } = actions
    let isErrorExists = false
    Object.keys(touched).forEach((key) => {
      if (pages[currentPage].fields.find((_key) => key.includes(_key))) touched[key] = true;
    })
    const validationCaptcha = currentPage === pages.length - 1 && Object.keys(errors).includes('captcha');
    Object.keys(errors).map((item) => {
      fields.map((field) => {
        const { id, type } = field
        if (pageFields.includes(id)) {
          const isError = getErrorByType(id, type, errors, touched)
          if (isError || validationCaptcha) {
            isErrorExists = true
            handleBlur({
              id: item,
              e: null,
              field: field
            })
          }
        }
      })
    })
    return isErrorExists || validationCaptcha;
  }

  const handleNext = () => {
    if (!handleValidationFields()) setCurrentPage((prev) => prev + 1);
  }
  const handlePrev = () => setCurrentPage((prev) => prev - 1)

  const { prev = 'Prev', next = 'Next' } = paginationButtons

  return (
    <>
      {captcha !== undefined && currentPage === pages.length - 1 && (
        <Captcha siteKey={captcha} />
      )}
      <div className='boomForm-paginationButtons__content'>
        {currentPage !== 0 ? (
          <button
            type='button'
            className='boomForm-paginationButton boomForm-paginationButton-prev'
            onClick={handlePrev}
          >
            {prev}
          </button>
        ) : null}
        <SubmitButton
          handleValidationFields={() => handleValidationFields()}
          hide={currentPage !== pages.length - 1}
          fields={fields}
          {...props}
        />
        {currentPage !== pages.length - 1 && 
          <button
            type='button'
            className='boomForm-paginationButton boomForm-paginationButton-next'
            onClick={() => handleNext()}
          >
            {next}
          </button>
        }
      </div>
    </>
  )
}

export default Buttons
