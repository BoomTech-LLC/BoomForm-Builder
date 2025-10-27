import React from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const builderProps = {
    button: { text: 'Submit Payment' },
    fields: [
      {
        type: 'inputTable',
        id: 'table1',
        label: 'Input Table',
        columns: ['Column 1', 'Column 2', 'Column 3'],
        rows: ['Row 1', 'Row 2', 'Row 3'],
        dropdownOptions: ['Option 1', 'Option 2', 'Option 3'],
        cells: {},
        showType: 'text'
      },
      {
        type: 'address',
        id: 'address1',
        label: 'Address',
        hide: ['street2'],
        classnameprefix: ['addaaaaaaa']
      }
    ]
  }

  return (
    <>
      <Builder {...builderProps} />
    </>
  )
}

export default App
