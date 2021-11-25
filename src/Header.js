import React from 'react'

const Header = ({ name, description }) => {
  return (
    <div className='boomForm__header'>
      <h2 className='boomForm__name'>{name}</h2>
      <h4 className='boomForm__description'>{description}</h4>
    </div>
  )
}

export default Header
