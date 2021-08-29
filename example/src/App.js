import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{ name: 'Form', description: 'Description' }}
      fields={[{ id: 1, type: 'text' }]}
    />
  )
}

export default App
