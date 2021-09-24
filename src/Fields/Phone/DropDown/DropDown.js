import React, { Fragment, useState, useEffect } from 'react'
import { Input, Custom } from 'boomform'
import classNames from 'classnames/bind'
import List from './List'
import {
  getPhoneCountryByCode,
  getPhoneCountryByDialCode,
  countryListForPhone
} from '../../../Helpers/phone'

const DropDown = ({ id, defaultCountryCode }) => {
  const [isOpen, setIsOpen] = useState(false)

  let [defaultCountry] = countryListForPhone
  if (defaultCountryCode)
    defaultCountry = getPhoneCountryByCode(defaultCountryCode)

  const handleClickClose = (e) => {
    if (e.target.classList.value.indexOf('country_code') === -1)
      setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('click', handleClickClose)

    return () => window.removeEventListener('click', handleClickClose)
  }, [])

  return (
    <div
      className={classNames('country_code_picker', {
        country_code_picker_active: isOpen
      })}
    >
      <Custom initial={defaultCountry.dial_code} id={`${id}.code`}>
        {(state) => {
          const { handleChange, value, values } = state
          const { flag } = getPhoneCountryByDialCode(value)
          return (
            <>
              <div
                className='country_code_action'
                onClick={() => setIsOpen(true)}
              >
                <img src={flag} alt={flag} className='country_code_image' />
              </div>
              <div>{value}</div>
              {isOpen && (
                <div className='country_code_dropdown'>
                  <div className='country_code_search'>
                    <Input
                      id={`${id}.search`}
                      type='search'
                      className='country_code_search_input'
                      placeholder='Search ...'
                    />
                  </div>
                  <div className='country_code_list'>
                    <List
                      handleChange={handleChange}
                      id={id}
                      values={values}
                      setIsOpen={setIsOpen}
                    />
                  </div>
                </div>
              )}
            </>
          )
        }}
      </Custom>
    </div>
  )
}

export default DropDown