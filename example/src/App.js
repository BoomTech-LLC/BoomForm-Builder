import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Pagination And Shit',
        pagination: true,
        print: true,
        innerComponent: ({ ...state }) => console.log(state),
        captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b'
      }}
      fields={[
        {
          id: 12,
          type: 'signature',
          initial: [
            [
              { x: 34, y: 142.9375, time: 1634883646937, color: '#000' },
              { x: 45, y: 135.9375, time: 1634883646959, color: '#000' },
              { x: 61, y: 122.9375, time: 1634883646975, color: '#000' },
              { x: 80, y: 109.9375, time: 1634883646992, color: '#000' },
              { x: 97, y: 98.9375, time: 1634883647008, color: '#000' },
              { x: 105, y: 93.9375, time: 1634883647024, color: '#000' },
              { x: 80, y: 109.9375, time: 1634883646992, color: '#000' }
            ]
          ],
          label: 'time',
          validation: { required: { msg: 'Required shit' } }
        },
        {
          id: 1,
          type: 'text',
          label: '1',
          validation: { required: { msg: 'Required shit' } }
        },
        { id: 2, type: 'email', label: '2' },
        { id: 3, type: 'email', label: '3' },
        { id: 4, type: 'email', label: '4' },
        {
          id: 5,
          type: 'email',
          label: '5',
          validation: { required: { msg: 'Required shit' } }
        },
        { id: 6, type: 'email', label: '6' },
        { id: 7, type: 'email', label: '7' },
        { id: 8, type: 'email', label: '8' }
      ]}
      button={{
        text: 'submit'
      }}
      pagination={{
        pages: [
          {
            title: 'Title 1',
            description: 'Description 1',
            fields: [12, 1, 2, 3]
          },
          {
            title: 'Title 2',
            description: 'Description 2',
            fields: [4, 5]
          },
          {
            title: 'Title 3',
            description: 'Description 3',
            fields: [6, 7, 8]
          }
        ],
        buttons: {
          type: 1
        }
      }}
    />
  )
}

export default App
