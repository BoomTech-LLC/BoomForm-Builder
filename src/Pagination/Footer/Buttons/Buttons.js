import React, { Fragment, useContext } from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Fields/Captcha/Captcha'
import { Context } from 'boomform'
import { getIdPath } from '../../../Helpers/global'

const Buttons = ({
  pages,
  paginationButtons,
  currentPage,
  captcha,
  setCurrentPage,
  ...props
}) => {
  const { state, actions } = useContext(Context)

  const handleNext = () => {
    const { errors } = state
    const { fields } = pages[currentPage]
    const { handleBlur } = actions
    let isErrorExists = false

    Object.keys(errors).map((item) => {
      fields.map((subitem) => {
        const id = item.toString().includes('.') ? getIdPath(item) : item
        if (String(subitem) === String(id)) {
          isErrorExists = true
          handleBlur({
            id: item
          })
        }
      })
    })
    if (!isErrorExists) setCurrentPage((prev) => prev + 1)
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
