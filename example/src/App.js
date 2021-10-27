import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Pagination And Shit',
        pagination: true,
        print: true,
        logic: false,
        innerComponent: ({ ...state }) => console.log(state),
        captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b'
      }}
      fields={[
        {
          type: 'text',
          id: 4,
          label: 'text',
          validation: {
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'phone',
          id: 1,
          label: 'phone',
          validation: {
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'name',
          id: 'a.b.sss.c',
          placeholders: {
            first: 'Family name',
            last: 'First (Given) name',
            middle: 'Middle'
          },
          label: 'Full Name (as in Passport) *',
          width: '400px',
          validations: {
            first: { required: { msg: 'This field is required.' } },
            last: { required: { msg: 'This field is required.' } }
          }
        },
        {
          type: 'name',
          id: 3,
          placeholders: {
            first: 'Family name',
            last: 'First (Given) name',
            middle: 'Middle'
          },
          label: 'Full Name (as in Passport) *',
          width: '400px',
          validations: {
            first: { required: { msg: 'This field is required.' } },
            last: { required: { msg: 'This field is required.' } }
          }
        }
      ]}
      pagination={{
        pages: [
          {
            title: 'Step 1',
            description: '',
            fields: [1, 'a.b.sss.c', 4]
          },
          {
            title: 'Step 2',
            description: '',
            fields: [3]
          }
        ],
        initial: 0,
        buttons: { type: 0, next: 'NEXT', prev: 'PREVIOUS' },
        timeline: 1
      }}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
