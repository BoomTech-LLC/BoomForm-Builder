import React, { useState } from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const [total, setTotal] = useState(0)

  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription'
      }}
      fields={[
        {
          id: 1,
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
