import React from 'react'
import { Checkbox, Radio, Input, Select as BFSelect } from 'boomform'

const InputTable = ({
  id,
  columns = [],
  rows = [],
  cells = {},
  showType,
  dropdownOptions = [],
  cell = {},
  input = {},
  icon = {},
  classnameprefix,
  validation = {},
  ...props
}) => {
  const placeholder = input?.data?.placeholder || ''
  const inputStyles = input?.styles || {}
  const cellStyles = cell?.styles || {}
  const iconStyles = icon?.styles || {}

  const renderCell = ({ ri, ci }) => {
    const rowIndex = ri + 1
    const colIndex = ci + 1
    const cellValue = cells?.[rowIndex]?.[colIndex]

    if (showType === 'checkbox') {
      return (
        <Checkbox
          {...props}
          id={`${id}.row_${rowIndex}.${colIndex}`}
          value={'1'}
          initial={!!cellValue}
          validation={{}}
          styles={iconStyles}
        />
      )
    }

    if (showType === 'radio') {
      return (
        <Radio
          {...props}
          id={`${id}.row_${rowIndex}.${colIndex}`}
          name={`${id}.row_${rowIndex}`}
          value={'1'}
          initial={!!cellValue}
          validation={{}}
          styles={iconStyles}
        />
      )
    }

    if (showType === 'dropdown') {
      return (
        <BFSelect
          {...props}
          id={`${id}.row_${rowIndex}.${colIndex}`}
          options={[
            { key: 'placeholder', value: '', label: placeholder || '' },
            ...dropdownOptions.map(v => ({ key: v, value: v }))
          ]}
          initial={typeof cellValue === 'string' && cellValue ? cellValue : ''}
          validation={{}}
          styles={inputStyles}
        />
      )
    }

    return (
      <Input
        {...props}
        id={`${id}.row_${rowIndex}.${colIndex}`}
        initial={typeof cellValue === 'string' ? cellValue : ''}
        placeholder={placeholder}
        validation={{}}
        type='text'
        styles={cellStyles}
      />
    )
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td></td>
            {columns.map((col, ci) => (
              <th key={ci}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rowLabel, ri) => (
            <tr key={ri}>
              <th scope='row'>{rowLabel}</th>
              {columns.map((_, ci) => (
                <td key={ci}>{renderCell({ ri, ci })}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InputTable
