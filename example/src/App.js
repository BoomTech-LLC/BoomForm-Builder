import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: '123',
        description: '456',
        innerComponent: (state) => console.log(state)
      }}
      fields={[{
        id: "file",
        type: "file",
        validation: {
          HTMLValidate: true,
          required: { msg: "Barev" }
        }
      }]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
