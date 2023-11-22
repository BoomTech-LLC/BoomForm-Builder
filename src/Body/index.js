import React from 'react'
import Fields from './Fields'

const Body = ({ payment, fields, printableFields }) => {
  return (
    <Fields
      fields={fields}
      payment={payment}
      printableFields={printableFields}
    />
  )
}

export default Body
