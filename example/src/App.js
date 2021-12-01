import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Pagination And Shit',
        // print: true,
        // logic: true,
        innerComponent: ({ ...state }) => console.log(state),
        captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b'
      }}
      fields={[
        {
          id: '1',
          type: 'text',
          validation: { HTMLValidate: true, required: { msg: 'validation' } }
        },
        {
          id: '2',
          type: 'text'
          // validation: { HTMLValidate: true, required: { msg: 'validation' } }
        },
        {
          id: '3',
          type: 'text'
          // validation: { HTMLValidate: true, required: { msg: 'validation' } }
        },
        {
          id: '4',
          type: 'text'
          // validation: { HTMLValidate: true, required: { msg: 'validation' } }
        },
        {
          id: '5',
          type: 'text'
          // validation: { HTMLValidate: true, required: { msg: 'validation' } }
        }
      ]}
      // pagination={{
      //   pages: [
      //     {
      //       title: 'Step 1',
      //       description: '',
      //       fields: ['1']
      //     },
      //     {
      //       title: 'Step 2',
      //       description: '',
      //       fields: ['2']
      //     },
      //     {
      //       title: 'Step 3',
      //       description: '',
      //       fields: ['3']
      //     },
      //     {
      //       title: 'Step 4',
      //       description: '',
      //       fields: ['4']
      //     },
      //     {
      //       title: 'Step 5',
      //       description: '',
      //       fields: ['5']
      //     }
      //   ],
      //   initial: 0,
      //   buttons: { type: 0, next: 'NEXT', prev: 'PREVIOUS' },
      //   timeline: 1
      // }}
      // logic={[
      //   {
      //     id: '2',
      //     action: 'show',
      //     operator: 'or',
      //     conditions: [{ id: '1', rule: 'is', item: null, value: '1' }]
      //   }
      // ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
