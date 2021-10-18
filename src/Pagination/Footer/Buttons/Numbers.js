import React, { Fragment } from 'react'
import classNames from 'classnames'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'
import Captcha from './../../../Fields/Captcha/Captcha'
import Print from '../../../Print/Print'

const Numbers = ({
  button,
  fields,
  currentPage,
  pages,
  captcha,
  isPrint,
  name,
  description,
  setCurrentPage,
  onSubmit
}) => {
  const handleSetPage = (index) => setCurrentPage(index)

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
          onSubmit={onSubmit}
          button={button}
          hide={currentPage !== pages.length - 1}
        />
        {isPrint && currentPage === pages.length - 1 && (
          <Print fields={fields} name={name} description={description} />
        )}
      </div>
    </>
  )
}

export default Numbers
