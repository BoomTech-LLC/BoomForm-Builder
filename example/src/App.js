import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Rich Text Editor',
        innerComponent: ({ ...rest }) => {
          console.log(rest)
        }
      }}
      fields={[
        {
          id: 1,
          type: 'starRating',
          validation: {
            required: {
              msg: 'this field is required'
            }
          }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
