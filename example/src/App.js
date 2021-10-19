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
        captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b',
        logic: true
      }}
      fields={[
        { id: 1, type: 'text', label: '1' },
        { id: 2, type: 'email', label: '2' },
        { id: 3, type: 'email', label: '3' },
        { id: 4, type: 'email', label: '4' },
        { id: 5, type: 'email', label: '5' },
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
            fields: [1, 2, 3]
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
          type: 0
        }
      }}
      logic={[
        {
          action: 'show',
          conditions: [
            { id: 1, rule: 'is', item: 'first', value: 'aaa' },
            { id: 2, rule: 'starts', item: null, value: 'aaa' },
            { id: 3, rule: 'starts', item: null, value: 'aaa' }
          ],
          id: 6,
          operator: 'and'
        }
      ]}
    />
  )
}

export default App
