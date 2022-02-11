import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription'
      }}
      fields={[
        {
          type: 'phone',
          id: 7,
          defaultCountryCode: 'AM',
          placeholder: '',
          label: 'Phone',
          validation: { HTMLValidate: true }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
