import React, { Fragment } from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Fields/Captcha/Captcha'
import Print from '../../../Print/Print'

const Buttons = ({
  fields,
  button,
  pages,
  paginationButtons,
  currentPage,
  captcha,
  isPrint,
  name,
  description,
  setCurrentPage,
  onSubmit
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
        {isPrint && currentPage === pages.length - 1 && (
          <Print fields={fields} name={name} description={description} />
        )}
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
