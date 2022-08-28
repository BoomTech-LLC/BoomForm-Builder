import React, { Fragment } from 'react'
import SubmitButton from './../../SubmitButton/SubmitButton'
import Captcha from './../../Captcha'

const Buttons = ({
  formRef,
  global,
  button,
  fields,
  pagination,
  currentPage,
  setCurrentPage,
  payment,
  logic
}) => {
  const { buttons, pages, onPageChange } = pagination
  const { prev = 'Prev', next = 'Next' } = buttons
  const { captcha } = global

  const handleNext = () => {
    if (formRef.current.checkValidity()) {
      setCurrentPage((prev) => prev + 1)

      if (onPageChange) onPageChange()
    } else formRef.current.reportValidity()
  }

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1)
    if (onPageChange) onPageChange()
  }

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
          global={global}
          button={button}
          fields={fields}
          formRef={formRef}
          payment={payment}
          logic={logic}
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
