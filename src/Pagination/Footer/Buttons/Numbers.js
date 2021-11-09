import React, { Fragment, useContext } from 'react'
import classNames from 'classnames'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Fields/Captcha/Captcha'
import { Context } from 'boomform'
import { getErrorByType } from '../../../Helpers/global'

const Numbers = ({
  button,
  currentPage,
  pages,
  captcha,
  setCurrentPage,
  fields,
  ...props
}) => {
  const { state, actions } = useContext(Context)

  const handleValidationFields = (index, isValidateSubmit = false) => {
    const { errors, touched } = state
    const { fields: pageFields } = pages[currentPage]
    const { handleBlur } = actions
    let isErrorExists = false
    let pageIndex = false;
    pages.forEach((page, _index) => {
      const checkTouchedKey = Object.keys(touched).find((touchedKey) => page.fields.find((_key) => touchedKey.includes(String(_key))));
      const checkErrorsKey = Object.keys(errors).find((errorKey) => page.fields.find((_key) => errorKey.includes(String(_key))));
      if (index >= _index) {
        if (_index === currentPage && checkTouchedKey) {
          touched[checkTouchedKey] = true;
        } else if (_index > currentPage && !checkTouchedKey) {
          if (pageIndex === false) pageIndex = _index;
        } else if (_index > currentPage && checkErrorsKey) {
          if (pageIndex === false) pageIndex = _index;
        } else {
          if (pageIndex === false) pageIndex = true
        }
      }
    });
    const vlidateCaptcha = currentPage === pages.length - 1 && Object.keys(errors).includes('captcha');
    Object.keys(errors).map((item) => {
      fields.map((field) => {
        const { id, type } = field
        if (pageFields.includes(id)) {
          const isError = getErrorByType(id, type, errors, touched)
          if (isError || vlidateCaptcha) {
            isErrorExists = true
            handleBlur({
              id: item,
              e: null,
              field: field
            })
          }
        }
      })
    })
    const endNoIndexData = isErrorExists || vlidateCaptcha;
    if (isValidateSubmit) return endNoIndexData;
    if (endNoIndexData) return true;
    if (typeof pageIndex === 'number') return pageIndex;
    else return typeof index === 'number' ? index : false;
  }

  const handleSetPage = (index) => {
    if (currentPage > index) {
      setCurrentPage(index);
    } else {
      const newIndex = handleValidationFields(index);
      if (typeof newIndex === 'number') setCurrentPage(newIndex);
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
          handleValidationFields={() => handleValidationFields( pages.length - 1, true)}
          hide={currentPage !== pages.length - 1}
          fields={fields}
          {...props}
        />
      </div>
    </>
  )
}

export default Numbers
