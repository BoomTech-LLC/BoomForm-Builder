import React, { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'

import countries from '../../../../Helpers/countries'

const List = ({
  id,
  values,
  selectedKey,
  handleCodeChange,
  selectedItemCallback
}) => {
  return Object.values(countries)
    .filter((country) => {
      const searchTerm = values[id]?.search
      if (searchTerm === null || searchTerm === undefined) return true

      if (
        country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        country.key.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        country.dial_code.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      )
        return true

      return false
    })
    .map((country) => {
      const { key, dial_code, name } = country
      const isSelected = selectedKey === key

      const itemRefCallback = (node) => {
        if (isSelected && node) {
          selectedItemCallback(node)
        }
      }

      return (
        <div
          ref={itemRefCallback}
          id={`country_item${id}`}
          className={classNames('country_code_item', {
            selected: isSelected
          })}
          onClick={() => handleCodeChange(key)}
          key={key}
        >
          <div
            className='country_code_item_img'
            style={{
              backgroundImage: `url(https://form.boomte.ch/images/flags/${key.toLowerCase()}.svg)`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <span className='country_code_item_txt'>
            <span>{name}</span>
            <span>({dial_code})</span>
          </span>
        </div>
      )
    })
}

export default List
