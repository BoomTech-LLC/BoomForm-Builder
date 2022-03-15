import React, { useState } from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const [total, setTotal] = useState(0)

  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription',
        isPrint: true
      }}
      fields={[
        {
          id: 1,
          label: 'Phone <span>sdf asmkdfasdf </span>',
          type: 'phone',
          defaultCountryCode: 'AM',
          validation: { required: { msg: 'Phone Is required' } }
        },
        {
          id: 2,
          label: 'Phonasd fasd fasdgasde',
          type: 'phone',
          defaultCountryCode: 'AM',
          validation: { required: { msg: 'Phone Is required' } }
        },
        {
          id: 3,
          label: 'Phon sfadf asdf asde',
          type: 'phone',
          defaultCountryCode: 'AM',
          validation: { required: { msg: 'Phone Is required' } }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
