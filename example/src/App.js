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
        type: "file"
      }]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
