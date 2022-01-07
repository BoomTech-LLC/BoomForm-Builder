import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        print: true,
        name: '123',
        description: '456',
        innerComponent: (state) => console.log(state)
      }}
      fields={[
        {
          id: 'color',
          type: 'text',
          label: 'Please Type Your Favorit Color',
          placeholder: 'Type ...',
          validation: { required: { msg: 'Text is required' } },
          initial: 'Red'
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
