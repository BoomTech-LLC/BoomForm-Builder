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
          type: 'starRating',
          initial: 3
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
