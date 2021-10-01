import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Terms And Conditions'
      }}
      fields={[
        {
          id: 1,
          type: 'address',
          validation: { required: { msg: 'Vazgen' } }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
