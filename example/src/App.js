import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Pagination And Shit',
        pagination: true,
        innerComponent: ({ ...state }) => console.log(state),
        captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b'
      }}
      fields={[
        {
          id: 'terms',
          type: 'terms',
          text: 'Terms and Conditions {Read Here} more',
          url: 'https://form-builder.boomform.com/fields#terms',
          // openIn: 'newTab'
        }
        // { id: 1, type: 'email' },
        // { id: 2, type: 'email' },
        // { id: 3, type: 'email' },
        // { id: 4, type: 'email' },
        // { id: 5, type: 'email' },
        // { id: 6, type: 'email' },
        // { id: 7, type: 'email' },
        // { id: 8, type: 'email' }
      ]}
      button={{
        text: 'submit'
      }}
      // pagination={{
      //   pages: [
      //     {
      //       title: 'Title 1',
      //       description: 'Description 1',
      //       fields: [1, 2, 3]
      //     },
      //     {
      //       title: 'Title 2',
      //       description: 'Description 2',
      //       fields: [4, 5]
      //     },
      //     {
      //       title: 'Title 3',
      //       description: 'Description 3',
      //       fields: [6, 7, 8]
      //     }
      //   ],
      //   buttons: {
      //     type: 0
      //   },
      //   timeline: 1
      // }}
    />
  )
}

export default App
