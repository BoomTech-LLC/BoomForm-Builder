import React, { Fragment, useContext } from 'react'
import classNames from 'classnames'
import SubmitButton from './../../SubmitButton/SubmitButton'

const Numbers = ({
  formRef,
  global,
  button,
  fields,
  pagination,
  currentPage,
  setCurrentPage
}) => {
  const { pages } = pagination

  const handleSetPage = (index) => {
    if (index !== currentPage) {
      function stepByStepChange(currentStep) {
        if (currentStep > pages.length - 1) return null

        if (currentStep === index) {
          setCurrentPage(index)
          return null
        }

        if (formRef.current.checkValidity()) {
          setCurrentPage(currentStep + 1)
          setTimeout(() => stepByStepChange(currentStep + 1), 0)
        } else formRef.current.reportValidity()
      }

      const step = 0
      stepByStepChange(step)
    }
  }

  return (
    <div className='boomForm-paginationNumbers__content'>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            type='button'
            className={classNames('boomForm-paginationNumber__button', {
              'boomForm-paginationNumber__button-active': index === currentPage
            })}
            onClick={() => handleSetPage(index)}
          >
            {index + 1}
          </button>
        )
      })}

      <SubmitButton
        global={global}
        button={button}
        fields={fields}
        formRef={formRef}
      />
    </div>
  )
}

export default Numbers
