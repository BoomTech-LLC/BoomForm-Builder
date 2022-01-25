import React from 'react'
import classNames from 'classnames/bind'

import { countries, flagPrefix } from '../../../Helpers/countries'

const List = ({ id, setIsOpen, handleChange, values, selectedKey }) => {
  const handleCodeChange = (countryCode) => {
    setIsOpen(false)
    handleChange({
      id: `${id}.code`,
      value: countryCode,
      asd: 1,
      field: { fieldType: 'custom', id: `${id}.code` }
    })
  }

  return Object.keys(countries)
    .filter((country) => {
      const searchTerm = values[id]?.search
      if (searchTerm === null || searchTerm === undefined) return true
      if (
        countries[country].name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        countries[country].country_code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        countries[country].dial_code?.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return true

      return false
    })
    .map((country) => {
      const { key, name, country_code } = countries[country]
      const flag = `${flagPrefix}${country_code}.svg`
      return (
        <div
          id={`country_item${id}`}
          className={classNames('country_code_item', {
            selected: selectedKey === key
          })}
          onClick={() => handleCodeChange(country_code)}
          key={key}
        >
          <img src={flag} alt={flag} className='country_code_item_img' />
          <span className='country_code_item_txt'>{name}</span>
        </div>
      )
    })
}

export default List
