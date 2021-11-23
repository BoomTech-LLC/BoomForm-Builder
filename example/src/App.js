import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Something',
        innerComponent: ({ ...state }) => console.log(state)
      }}
      fields={[
        {
          id: 1,
          type: 'multipleChoice',
          validation: {
            HTMLValidate: true,
            required: { msg: 'Barev' }
          },
          options: [
            { key: 1, label: 'Cycling', value: 'cycling' },
            { key: 2, label: 'Runing', value: 'runing' },
            { key: 3, label: 'Reading', value: 'reading' },
            { key: 4, label: 'Photographing', value: 'photographing' },
            {
              key: 'other',
              placeholder: 'Other'
            }
          ]
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
