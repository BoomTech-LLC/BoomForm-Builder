import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Pagination And Shit',
        // pagination: true,
        // print: true,
        logic: true,
        innerComponent: ({ ...state }) => console.log(state),
        // captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b'
      }}
      fields={[
        {
          id: 'text',
          type: 'text',
          validation: { HTMLValidate: true, required: { msg: 'this field is required' } }
        },
        {
          id: 'textarea',
          type: 'textarea',
          richTextEditor: true,
          validation: { HTMLValidate: true, required: { msg: 'this field is required' } }
        },
        {
          id: 'starRating',
          type: 'starRating',
          validation: {
            HTMLValidate: true,
            required: {
              msg: 'Star rating is required'
            }
          }
        },
        {
          id: 'signature',
           type: 'signature',
          validation: { HTMLValidate: true, required: { msg: 'This Field Is Required' } }
        }
        // {
        //   id: 1,
        //   type: 'multipleChoice',
        //   options: [
        //     { key: 1, label: 'Cycling', value: 'cycling',
        //     validation: {
        //       HTMLValidate: true,
        //       required: { msg: 'This field is required.' }
        //     },
        //   },
        //     { key: 2, label: 'Runing', value: 'runing'},
        //   ],
         
          // quantity: {
          //   enabled: true,
          //   label: 'Quantity',
          //   value: 1
          // }
        // }
        // {
        //   type: 'phone',
        //   id: 'z',
        //   label: 'phone',
        //   validation: {
        //     required: { msg: 'This field is required.' }
        //   }
        // },
        // {
        //   type: 'name',
        //   id: 'a.b.sss.c',
        //   placeholders: {
        //     first: 'Family name',
        //     last: 'First (Given) name',
        //     middle: 'Middle'
        //   },
        //   label: 'Full Name (as in Passport) *',
        //   width: '400px',
        //   validations: {
        //     first: { required: { msg: 'This field is required.' } },
        //     last: { required: { msg: 'This field is required.' } }
        //   }
        // },
        // {
        //   type: 'name',
        //   id: 3,
        //   placeholders: {
        //     first: 'Family name',
        //     last: 'First (Given) name',
        //     middle: 'Middle'
        //   },
        //   label: 'Full Name (as in Passport) *',
        //   width: '400px',
        //   validations: {
        //     first: { required: { msg: 'This field is required.' } },
        //     last: { required: { msg: 'This field is required.' } }
        //   }
        // }
      ]}
      // pagination={{
      //   pages: [
      //     {
      //       title: 'Step 1',
      //       description: '',
      //       fields: ['z', 'a.b.sss.c', 'a.b.c']
      //     },
      //     {
      //       title: 'Step 2',
      //       description: '',
      //       fields: [3]
      //     }
      //   ],
      //   initial: 0,
      //   buttons: { type: 1, next: 'NEXT', prev: 'PREVIOUS' },
      //   timeline: 1
      // }}
      logic={[{"id":14,"action":"show","operator":"or","conditions":[{"id":19,"rule":"is","item":null,"value":"123"},{"id":20,"rule":"isNot","item":null,"value":"321"}]}]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
