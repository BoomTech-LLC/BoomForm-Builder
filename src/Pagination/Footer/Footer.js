import React from 'react'
import Buttons from './Buttons/Buttons'
import Numbers from './Buttons/Numbers'

const Footer = ({ paginationButtons, ...props }) => {
  const { type } = paginationButtons

  if (type === 0)
    return <Buttons paginationButtons={paginationButtons} {...props} />
  else return <Numbers {...props} />
}

export default Footer
