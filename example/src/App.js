import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Some Form',
        onSubmit: (attr) => {
          console.log(attr)
        }
      }}
      fields={[
        {
          id: 1,
          type: 'terms',
          text: 'I agree to the {Terms of Service}',
          url: 'https://example.com/'
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
