import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: '123',
        description: '456',
        logic: true,
        print: false
      }}
      fields={[
        {
          id: 'size',
          type: 'select',
          initial: 1,
          options: [
            { key: 'placeholder', value: ' -- placeholder -- ' },
            { key: 1, value: 'S' },
            { key: 2, value: 'M' },
            { key: 3, value: 'L' },
            { key: 'other', value: 'othersakfdkasd' }
          ],
          quantity: {
            enabled: true,
            label: 'Quantity',
            value: 1
          }
        }
      ]}
      logic={[]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
