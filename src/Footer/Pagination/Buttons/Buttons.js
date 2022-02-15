import React from 'react'
import SubmitButton from './../../SubmitButton/SubmitButton'

const Buttons = ({
  formRef,
  global,
  button,
  fields,
  pagination,
  currentPage,
  setCurrentPage
}) => {
  const { paginationButtons, pages } = pagination
  const { prev = 'Prev', next = 'Next' } = paginationButtons

  const handleNext = () => {
    if (formRef.current.checkValidity()) setCurrentPage((prev) => prev + 1)
    else formRef.current.reportValidity()
  }

  const handlePrev = () => setCurrentPage((prev) => prev - 1)

  return (
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
        global={global}
        button={button}
        fields={fields}
        formRef={formRef}
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
  )
}

export default Buttons
