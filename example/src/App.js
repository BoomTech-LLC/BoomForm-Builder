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
            {
              key: 'other',
              placeholder: 'Other',
              checked: true,
              isNumber: true
            }
          ],
          name: 'checkbox',
          quantity: {
            enabled: true,
            label: 'Label',
            value: 1
          }
        },
        {
          id: 2,
          type: 'singleChoice',
          options: [
            { key: 1, value: 'yes', label: 'BArev' },
            { key: 2, value: 'yes' },
            { key: 3, value: 'yes' },
            {
              key: 'other',
              value: 'Other',
              placeholder: 'Other',
              isNumber: true
            }
          ],
          name: 'radio',
          quantity: {
            enabled: true,
            label: 'Label',
            value: 1
          }
        },
        {
          id: 3,
          type: 'select',
          options: [
            { key: 1, value: '1' },
            { key: 2, value: '2' },
            { key: 3, value: '3' },
            { key: 'other', value: 'Vazgen' }
          ],
          quantity: {
            enabled: true,
            label: 'Label',
            value: 1
          }
        }
      ]}
    />
  )
}

export default App
