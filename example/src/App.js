import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Rich Text Editor',
        innerComponent: ({ ...state }) => {
          console.log(state)
        }
      }}
      fields={[
        {
          id: 1,
          max: 8,
          min: 3,
          type: 'scaleRating',
          validation: { required: { msg: 'this field is required' } }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
