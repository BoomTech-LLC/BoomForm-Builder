import React, { useState } from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        print: true,
        name: '',
        description: '',
        innerComponent: (state) => {}
      }}
      fields={[
        {
          id: 1,
          type: 'text',
          label: 'Please Type Your Favorit Color',
          placeholder: 'Type ...',
          validation: {
            required: { msg: 'Text is required' },
            HTMLValidate: true
          }
        },
        {
          id: 2,
          type: 'text',
          label: 'Please Type Your Favorit Color',
          placeholder: 'Type ...',
          validation: {
            required: { msg: 'Text is required' },
            HTMLValidate: true
          }
        },
        {
          id: 3,
          type: 'text',
          label: 'Please Type Your Favorit Color',
          placeholder: 'Type ...',
          validation: {
            required: { msg: 'Text is required' },
            HTMLValidate: true
          }
        },
        {
          id: 4,
          type: 'text',
          label: 'Please Type Your Favorit Color',
          placeholder: 'Type ...',
          validation: {
            required: { msg: 'Text is required' },
            HTMLValidate: true
          }
        }
      ]}
      pagination={{
        pages: [
          {
            title: 'Page 1',
            description: '',
            fields: [1]
          },
          { title: 'Page 2', description: '', fields: [2] },
          {
            title: 'Page 3',
            description: '',
            fields: [3]
          },
          {
            title: 'Page 4',
            description: '',
            fields: [4]
          }
        ],
        initial: 0,
        buttons: { type: 1, next: 'Next', prev: 'Prev' },
        timeline: 1
      }}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
