import React from 'react'
import { countryListForPhone } from '../../../Helpers/phone'

const List = ({ id, setIsOpen, handleChange, values, selectedKey }) => {
  const handleCodeChange = (dial_code) => {
    setIsOpen(false)
    handleChange({
      id: `${id}.code`,
      value: dial_code,
      field: { fieldType: 'custom', id: `${id}.code` }
    })
  }

  return countryListForPhone
    .filter((country) => {
      const searchTerm = values[id]?.search
      if (searchTerm === null || searchTerm === undefined) return true

      if (
        country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        country.code.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        country.dial_code.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      )
        return true

      return false
    })
    .map((country) => {
      const { key, dial_code, flag, name } = country
      
      return (
        <div
          className={'country_code_item' + (selectedKey === key) ? ' selected' : ''}
          onClick={() => handleCodeChange(dial_code)}
          key={key}
        >
          <img src={flag} alt={flag} className='country_code_item_img' />
          <span className='country_code_item_txt'>{name}</span>
        </div>
      )
    })
}

export default List
