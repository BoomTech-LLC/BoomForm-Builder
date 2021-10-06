import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Terms And Conditions',
        logic: true,
        innerComponent: ({ ...state }) => console.log(state),
        captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b'
      }}
      fields={[
        {
          id: 1,
          type: 'singleChoice',
          options: [
            { key: 1, label: 'option 1', value: 'option 1' },
            { key: 2, label: 'option 2', value: 'no' },
            { key: 3, label: 'option 3', value: 'option 3' }
          ],
          validation: { required: { msg: 'Vazgen' } },
          quantity: { value: 1, enabled: true }
        },
        {
          id: 2,
          type: 'text',
          validation: { required: { msg: 'gago' } }
        },
        {
          id: 3,
          label: 'file',
          type: 'file',
          validation: { required: { msg: 'file upload' } }
        }
      ]}
      button={{
        text: 'submit'
      }}
      logic={[
        {
          id: 2,
          action: 'show',
          operator: 'or',
          conditions: [
            {
              id: 1,
              value: 'no',
              rule: 'checked',
              item: ''
            }
          ]
        }
      ]}
    />
  )
}

export default App
