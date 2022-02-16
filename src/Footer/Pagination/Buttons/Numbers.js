import React, { Fragment, useContext } from 'react'
import classNames from 'classnames'
import SubmitButton from './../../SubmitButton/SubmitButton'
import Captcha from '../../Captcha'

const Numbers = ({
  formRef,
  global,
  button,
  fields,
  pagination,
  currentPage,
  setCurrentPage,
  payment
}) => {
  const { pages } = pagination
  const { captcha } = global

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
          global={global}
          button={button}
          fields={fields}
          formRef={formRef}
          payment={payment}
        />
      </div>
    </>
  )
}

export default Numbers
