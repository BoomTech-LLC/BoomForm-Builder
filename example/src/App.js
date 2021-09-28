import React from 'react'
import Builder from 'boomform-builder'

const SmallTitle = () => {
  return <h2>Small Title</h2>
}

const App = () => {
  return (
    <Builder
      global={{
        name: 'Simple Text'
      }}
      fields={[
        {
          id: 1,
          type: 'just',
          Component: SmallTitle
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
