import React, { Fragment } from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Fields/Captcha/Captcha'

const Buttons = ({
  pages,
  paginationButtons,
  currentPage,
  captcha,
  setCurrentPage,
  ...props
}) => {
  const handleNext = () => setCurrentPage((prev) => prev + 1)
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
        <SubmitButton hide={currentPage !== pages.length - 1} {...props} />
        {currentPage !== pages.length - 1 ? (
          <button
            type='button'
            className='boomForm-paginationButton boomForm-paginationButton-next'
            onClick={handleNext}
          >
            {next}
          </button>
        ) : null}
      </div>
    </>
  )
}

export default Buttons
