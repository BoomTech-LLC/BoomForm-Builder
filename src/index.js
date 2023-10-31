import React from 'react'
import { BoomForm } from 'boomform'
import Form from './Form'
import countries from './Helpers/countries'
import GridForm from './Grid'

const Builder = ({
  global = {},
  fields = [],
  button = {},
  pagination = {},
  logic = [],
  payment = {},
  pages = {},
  gridOptions = {}
}) => {
  return (
    <BoomForm
      global={global}
      fields={fields}
      button={button}
      payment={payment}
      pagination={pagination}
      logic={logic}
      pages={pages}
      gridOptions={gridOptions}
    >
      {() => {
        if (gridOptions && gridOptions.layout) {
          return (
            <GridForm
              global={global}
              fields={fields}
              button={button}
              payment={payment}
              pagination={pagination}
              logic={logic}
              pages={pages}
              gridOptions={gridOptions}
            />
          )
        } else
          return (
            <Form
              global={global}
              fields={fields}
              button={button}
              payment={payment}
              pagination={pagination}
              logic={logic}
              pages={pages}
            />
          )
      }}
    </BoomForm>
  )
}

export { Builder, countries }
