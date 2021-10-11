import React, { Fragment } from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Fields/Captcha/Captcha'

const Buttons = ({
  onSubmit,
  button,
  pages,
  paginationButtons,
  currentPage,
  setCurrentPage,
  captcha
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
            className='boomForm-paginationButton'
            onClick={handlePrev}
          >
            {prev}
          </button>
        ) : null}
        <SubmitButton
          button={button}
          onSubmit={onSubmit}
          hide={currentPage !== pages.length - 1}
        />
        {currentPage !== pages.length - 1 ? (
          <button
            type='button'
            className='boomForm-paginationButton'
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
