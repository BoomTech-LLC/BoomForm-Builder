import React, { Fragment, useContext } from 'react'
import classNames from 'classnames'
import SubmitButton from './../../SubmitButton/SubmitButton'
import Captcha from '../../Captcha'
import { getShowableData } from '../../../Helpers/pagination'

const Numbers = ({
  formRef,
  global,
  button,
  fields,
  pagination,
  currentPage,
  setCurrentPage,
  payment,
  logic,
  logicIds,
  RomanNumerals
}) => {
  const { pages } = pagination
  const { captcha, onPageChange } = global

  const { showableCurrentPage, pagesLength, actualPages } = getShowableData({
    currentPage,
    logicIds,
    pagination
  })
  const pageButtons = Array.from(
    { length: pagesLength },
    (_, index) => index + 1
  )
  const handleSetPage = index => {
    if (index !== currentPage) {
      function stepByStepChange(currentStep) {
        if (currentStep > pages.length - 1) return null

        if (currentStep === index) {
          setCurrentPage(index)
          if (onPageChange) onPageChange()
          return null
        }

        if (formRef.current.checkValidity()) {
          setCurrentPage(currentStep + 1)
          if (onPageChange) onPageChange()
          setTimeout(() => stepByStepChange(currentStep + 1), 0)
        } else formRef.current.reportValidity()
      }

      const step = 0
      stepByStepChange(step)
    }
  }
  const convertToRoman = num => {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ]

    let roman = ''
    for (const { value, numeral } of romanNumerals) {
      while (num >= value) {
        roman += numeral
        num -= value
      }
    }
    return roman
  }

  return (
    <>
      {captcha !== undefined && currentPage === pages.length - 1 && (
        <Captcha siteKey={captcha} />
      )}
      <div className='boomForm-paginationNumbers__content'>
        {pageButtons.map((page, index) => {
          return (
            <button
              key={index}
              type='button'
              className={classNames('boomForm-paginationNumber__button', {
                'boomForm-paginationNumber__button-active':
                  index === showableCurrentPage - 1
              })}
              onClick={() => handleSetPage(actualPages[index])}
            >
              {RomanNumerals ? convertToRoman(index + 1) : index + 1}
            </button>
          )
        })}

        <SubmitButton
          hide={showableCurrentPage !== pagesLength}
          global={global}
          button={button}
          fields={fields}
          formRef={formRef}
          payment={payment}
          logic={logic}
          logicIds={logicIds}
          pagination={pagination}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Numbers
