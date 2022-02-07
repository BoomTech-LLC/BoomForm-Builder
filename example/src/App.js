import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription'
      }}
      fields={[
        {
          type: 'multipleChoice',
          id: 38,
          columns: 1,
          options: [
            {
              key: 0,
              value: 'option1',
              label: 'option1  ',
              price: '',
              checked: false
            },
            {
              key: 1,
              value: 'option2',
              label: 'option2  ',
              price: '',
              checked: false
            },
            {
              key: 2,
              value: 'option3',
              label: 'option3  ',
              price: '',
              checked: false
            },
            {
              key: 'other',
              value: 'other',
              label: 'Other',
              placeholder: 'Other',
              checked: false
            }
          ],
          label: 'Select Some Choices',
          validation: { HTMLValidate: true }
        },
        {
          type: 'singleChoice',
          id: 39,
          columns: 1,
          options: [
            { key: 0, value: '0', label: 'option1', price: '', checked: false },
            { key: 1, value: '1', label: 'option2', price: '', checked: false },
            { key: 2, value: '2', label: 'option3', price: '', checked: false },
            {
              key: 'other',
              value: 'other',
              label: 'Other',
              placeholder: 'Other',
              checked: false
            }
          ],
          label: 'Select Single Choice',
          validation: { HTMLValidate: true }
        },
        {
          type: 'select',
          id: 40,
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            { key: 0, value: 'option1', label: 'option1  ', price: '' },
            { key: 1, value: 'option2', label: 'option2  ', price: '' },
            { key: 2, value: 'option3', label: 'option3  ', price: '' },
            { key: 'other', value: 'Other' }
          ],
          payable: 1,
          label: 'Dropdown',
          validation: { HTMLValidate: true }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
