import React from 'react'
import Builder from 'boomform-builder'

const App = () => {

  return (
    <Builder
      global={{
        print: true,
        name: "Task",
        description: 'task',
        innerComponent: (state) => {
          console.log(state)
        }
      }}
      fields={[
        {
          id: 1,
          type: 'phone',
          defaultCountryCode: 'AM',
          validation: { required: { msg: 'Phone Is required' } }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
