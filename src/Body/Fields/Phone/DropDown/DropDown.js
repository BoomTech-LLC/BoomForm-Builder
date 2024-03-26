import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Input, Custom } from 'boomform'
import classNames from 'classnames/bind'
import List from './List'
import countries from '../../../../Helpers/countries'

const DropDown = ({ id, defaultCountryCode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const listRef = useRef(null)
  const selectedItemRef = useRef(null)

  useEffect(() => {
    window.addEventListener('click', handleClose)

    return () => window.removeEventListener('click', handleClose)
  }, [])

  useEffect(() => {
    if (isOpen && selectedItemRef.current && listRef.current) {
      listRef.current.scrollTop =
        selectedItemRef.current.offsetTop - listRef.current.offsetTop
    }
  }, [isOpen])

  const handleClose = (e) => {
    if (e.target.classList.value.indexOf('country_code') === -1)
      setIsOpen(false)
  }

  const handleOpen = (e) => {
    setIsOpen(
      isOpen === false ? (e.target?.offsetTop < 200 ? 'bottom' : 'top') : false
    )
  }

  let _defaultCountryCode = defaultCountryCode
  if (!countries[defaultCountryCode]) _defaultCountryCode = 'US'

  const handleSelectedItemRef = (ref) => {
    selectedItemRef.current = ref
      ?.closest('.country_code_list')
      ?.querySelector('.selected')
  }

  return (
    <div
      className={classNames('country_code_picker', {
        country_code_picker_active: isOpen !== false
      })}
    >
      <Custom initial={_defaultCountryCode} id={`${id}.code`}>
        {({ handleChange, value, values }) => {
          const handleCodeChange = (key) => {
            setIsOpen(false)
            handleChange({
              id: `${id}.code`,
              value: key
            })
          }

          return (
            <>
              <div className='country_code_action' onClick={handleOpen}>
                <div
                  className='country_code_image'
                  style={{
                    backgroundImage: `url(https://cdn.boomte.ch/images/flags/${value.toLowerCase()}.svg)`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                <div className='country_code_value'>
                  {countries[value].dial_code}
                </div>
              </div>
              <div>
                {isOpen !== false && (
                  <div
                    className={classNames('country_code_dropdown', {
                      open_bottom: isOpen === 'bottom'
                    })}
                  >
                    <div className='country_code_search'>
                      <Input
                        id={`${id}.search`}
                        type='search'
                        className='country_code_search_input'
                        placeholder='Search ...'
                      />
                    </div>
                    <div className='country_code_list' ref={listRef}>
                      <List
                        onClick={(event) => event.stopPropagation()}
                        handleCodeChange={handleCodeChange}
                        id={id}
                        values={values}
                        selectedKey={value}
                        selectedItemCallback={handleSelectedItemRef}
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )
        }}
      </Custom>
    </div>
  )
}

export default DropDown
