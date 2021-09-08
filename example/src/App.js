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
      fields={[{ id: 1, type: 'name' }]}
    />
  )
}

export default App
