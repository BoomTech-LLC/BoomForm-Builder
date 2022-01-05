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
      fields={[
        {
          id: 'scaleRating',
          type: 'scaleRating',
          min: 1,
          max: 5,
          initial: 2,
          validation: { required: { msg: 'please rate us' } }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
