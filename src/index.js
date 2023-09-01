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
  layout = {},
  pages = {},
  isEditor = false
}) => {
  return (
    <BoomForm
      global={global}
      fields={fields}
      button={button}
      payment={payment}
      pagination={pagination}
      logic={logic}
      isEditor={isEditor}
      pages={pages}
    >
      {() =>
        (
          <Form
            global={global}
            fields={fields}
            button={button}
            payment={payment}
            pagination={pagination}
            logic={logic}
            layout={layout}
            pages={pages}
            isEditor={isEditor}
          />
        )
      }
    </BoomForm>
  )
}

export { Builder, countries }
