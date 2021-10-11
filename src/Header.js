import React from 'react'
import Pagination from './Pagination/Header/Pagination'

const Header = ({ name, description }) => {
  return (
    <div className='boomForm__header'>
      <div className='boomForm__name'>{name}</div>
      <div className='boomForm__description'>{description}</div>
    </div>
  )
}

export default Header
