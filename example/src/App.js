import React from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  return (
    <>
      <Builder
        global={{
          name: 'Name Collector'
        }}
        logic={[
          {
            id: 'text',
            action: 'show',
            operator: 'and',
            conditions: [
              {
                id: 'name',
                item: 'first',
                rule: 'is',
                value: 'aaa'
              },
              {
                id: 'name',
                item: 'last',
                rule: 'is',
                value: 'bbb'
              },
              {
                id: 'color',
                rule: 'is',
                value: 'red'
              }
            ]
          },
          {
            id: 'text',
            action: 'show',
            conditions: [
              {
                id: 'color',
                rule: 'is',
                value: 'ccc'
              }
            ]
          }
        ]}
        fields={[
          {
            id: 'name',
            type: 'name',
            label: 'Please Type Your Name',
            middleName: true,
            placeholders: {
              first: 'John',
              last: 'Doe'
            }
          },
          {
            id: 'text',
            type: 'text',
            label: 'Please Type TEXT'
          },
          {
            id: 'color',
            type: 'text',
            label: 'Please Type Your Favorit Color'
          }
        ]}
        button={{
          text: 'Submit'
        }}
      />
    </>
  )
}

export default App
