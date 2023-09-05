import React from 'react'
import { BoomForm } from 'boomform'
import Form from './Form'
import countries from './Helpers/countries'

const Builder = ({
  global = {},
  fields = [],
  button = {},
  pagination = {},
  logic = [],
  payment = {},
  pages = {}
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
    >
      {() => (
        <Form
          global={global}
          fields={fields}
          button={button}
          payment={payment}
          pagination={pagination}
          logic={logic}
          pages={pages}
        />
      )}
    </BoomForm>
  )
}

export { Builder, countries }
