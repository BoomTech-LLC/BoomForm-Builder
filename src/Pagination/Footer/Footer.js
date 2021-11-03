import React from 'react'
import Buttons from './Buttons/Buttons'
import Numbers from './Buttons/Numbers'

const Footer = ({ paginationButtons, isSingleField, ...props }) => {
  const { type } = paginationButtons

  if (type === 0 || isSingleField)
    return <Buttons paginationButtons={paginationButtons} isSingleField={isSingleField} {...props} />
  else return <Numbers {...props} />
}

export default Footer
