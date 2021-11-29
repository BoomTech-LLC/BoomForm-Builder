import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Pagination And Shit',
        // print: true,
        // logic: true,
        innerComponent: ({ ...state }) => console.log(state)
        // captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b'
      }}
      fields={[
        {
          id: '1',
          type: 'text',
          validation: {
            HTMLValidate: true,
            required: { msg: 'this field is required' }
          }
        },
        {
          id: '2',
          type: 'text',
          validation: {
            HTMLValidate: true,
            required: { msg: 'this field is required' }
          }
        }
      ]}
      pagination={{
        pages: [
          {
            title: 'Step 1',
            description: '',
            fields: ['1']
          },
          {
            title: 'Step 2',
            description: '',
            fields: ['2']
          }
        ],
        initial: 0,
        buttons: { type: 0, next: 'NEXT', prev: 'PREVIOUS' },
        timeline: 1
      }}
      // logic={[{"id":14,"action":"show","operator":"or","conditions":[{"id":19,"rule":"is","item":null,"value":"123"},{"id":20,"rule":"isNot","item":null,"value":"321"}]}]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
