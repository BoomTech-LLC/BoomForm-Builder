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
          type: 'singleChoice',
          options: [
            { key: 1, label: 'option 1', value: 'option 1' },
            { key: 2, label: 'option 2', value: 'option 2' },
            { key: 3, label: 'option 3', value: 'option 3' }
          ],
          validation: { required: { msg: 'Vazgen' } },
          quantity: { value: 1, enabled: true }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
