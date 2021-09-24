import React from 'react'
import Builder from 'boomform-builder'

const innerComponent = (attrs) => {
  console.log('Inner Component', attrs)
}

const App = () => {
  return (
    <Builder
      global={{
        name: 'Form',
        description: 'Description',
        innerComponent: innerComponent
      }}
      fields={[
        {
          id: 1,
          type: 'phone',
          defaultCountryCode: 'AM',
          validation: { required: { msg: 'BArev Vazgenchik' } }
        }
      ]}
    />
  )
}

export default App
