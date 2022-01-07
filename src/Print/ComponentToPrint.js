import React, { forwardRef } from 'react'
import Table from './Table'

const ComponentToPrint = forwardRef(({ fields, name, description }, ref) => {
  console.log(fields)
  return (
    <div ref={ref}>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <Table fields={fields} />
    </div>
  )
})
export default ComponentToPrint
