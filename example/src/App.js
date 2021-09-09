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
        { id: 1, type: 'name' },
        {
          id: 2,
          type: 'custom',
          component: () => {
            return 123
          }
        }
      ]}
    />
  )
}

export default App
