import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Rich Text Editor'
      }}
      fields={[
        {
          id: 1,
          type: 'textarea',
          richTextEditor: true,
          validation: { required: { msg: 'Something' } }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
