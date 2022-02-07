import React, { Fragment, useContext } from 'react'
import SubmitButton from './../../../Body/Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Body/Fields/Captcha/Captcha'

const Buttons = ({
  pages,
  paginationButtons,
  currentPage,
  captcha,
  setCurrentPage,
  fields,
  formRef,
  ...props
}) => {
  const handleNext = () => {
    if (formRef.current.checkValidity()) setCurrentPage((prev) => prev + 1)
    else formRef.current.reportValidity()
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
          hide={currentPage !== pages.length - 1}
          fields={fields}
          formRef={formRef}
          {...props}
        />

        {currentPage !== pages.length - 1 && (
          <button
            type='button'
            className='boomForm-paginationButton boomForm-paginationButton-next'
            onClick={() => handleNext()}
          >
            {next}
          </button>
        )}
      </div>
    </>
  )
}

export default Buttons
