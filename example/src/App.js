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
          type: 'select',
          options: [
            { key: 1, value: 'yes' },
            { key: 2, value: 'yes' },
            { key: 3, value: 'yes' },
            { key: 'other', value: 'Other' }
          ],
          name: 'radio',
          quantity: {
            enabled: true,
            label: 'Quantity',
            value: 1
          }
        }
      ]}
    />
  )
}

export default App
