import React from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  return (
    <>
      <Builder
        global={{
          name: 'Color Collector'
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
          text: 'Submit'
        }}
      />
    </>
  )
}

export default App
