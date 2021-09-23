import React from 'react'
import Builder from 'boomform-builder'

const innerComponent = (attrs) => {
  console.log('Inner Component', attrs)
}

const App = () => {
  return (
    <Builder
      global={{
        name: 'Form',
        description: 'Description',
        innerComponent: innerComponent
      }}
      fields={[
        {
          id: 1,
          type: 'date',
          validation: {
            required: {
              msg: 'field is required'
            },
            min: {
              value: '2021-09-24',
              msg: 'Please enter date after 2021-09-24'
            },
            max: {
              value: '2021-10-26',
              msg: 'Please enter date before 2021-10-26'
            }
          }
        }
      ]}
    />
  )
}

export default App
