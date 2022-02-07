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
          type: 'text',
          id: 12,
          placeholder: '',
          label: 'Textbox',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 13,
          placeholder: '',
          label: 'Somple Textbox',
          validation: { HTMLValidate: true }
        },
        {
          type: 'multipleChoice',
          id: 7,
          columns: 1,
          options: [
            { key: 0, value: 'Yes', label: 'Yes  ', price: '', checked: false },
            { key: 1, value: 'No', label: 'No  ', price: '', checked: false }
          ],
          label: 'Select Some Choices',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 6,
          placeholder: '',
          label: 'SSC Yes',
          validation: { HTMLValidate: true }
        },
        {
          type: 'singleChoice',
          id: 8,
          columns: 1,
          options: [
            { key: 0, value: '0', label: 'Yes', price: null, checked: false },
            { key: 1, value: '1', label: 'No', price: null, checked: false }
          ],
          label: 'Select Single Choice',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 11,
          placeholder: '',
          label: 'Radio SSC No',
          validation: { HTMLValidate: true }
        },
        {
          type: 'name',
          id: 9,
          placeholders: { first: 'First', last: 'Last', middle: 'Middle' },
          label: 'Name',
          validations: {}
        },
        {
          type: 'text',
          id: 10,
          placeholder: '',
          label: 'Name First = Vazgen',
          validation: { HTMLValidate: true }
        }
      ]}
      logic={[
        {
          id: 13,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 12, rule: 'is', item: null, value: 'Somple' }]
        },
        {
          id: 6,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 7, rule: 'checked', item: null, value: 'No' }]
        },
        {
          id: 11,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 8, rule: 'is', item: null, value: 'Yes' }]
        },
        {
          id: 10,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 9, rule: 'is', item: 'first', value: 'Vazgen' }]
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
