import React from 'react'
import Builder from 'boomform-builder'

const innerComponent = (attrs) => {
  console.log('Inner Component', attrs)
}

const App = () => {
  return (
    <Builder
      global={{
        name: 'Form',
        description: 'Description',
        innerComponent: innerComponent
      }}
      fields={[
        {
          id: 1,
          type: 'multipleChoice',
          options: [
            { key: 1, label: 'gag', value: 'yes' },
            { key: 2, label: 'ars', value: 'yes' },
            { key: 3, label: 'ars', value: 'yes' },
            { key: 'other', placeholder: 'Other' }
          ],
          name: 'checkbox'
        },
        {
          id: 2,
          type: 'singleChoice',
          options: [
            { key: 1, label: 'gag', value: 'yes' },
            { key: 2, label: 'ars', value: 'yes' },
            { key: 3, label: 'ars', value: 'yes' },
            { key: 'other', placeholder: 'Other' }
          ],
          name: 'radio'
        }
      ]}
    />
  )
}

export default App
