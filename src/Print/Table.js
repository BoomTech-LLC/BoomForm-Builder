import React, { memo } from 'react'
import { Viewer } from 'boomform'

const Table = ({ fields }) => {
  console.log(fields)
  const getValues = ({ values, type, id }) => {
    switch (type) {
      case 'select': {
        if (values[id]?.key === 'placeholder') return ''
        return values[id]?.value
      }
      case 'multipleChoice': {
        let checkbox = ''
        for (let i in values[id]) {
          const { checked, value } = values[id][i]
          if (checked) checkbox += value + ','
        }
        return checkbox.slice(0, -1)
      }
      case 'phone': {
        return `${values[id]?.code} ${values[id]?.phone || ''}`
      }
      case 'time': {
        return `${values[id]?.hour || ''} : ${values[id]?.minute || ''} ${
          values[id]?.format ? values[id].format?.value : ''
        }`
      }
      case 'singleChoice':
      case 'scaleRating': {
        let scaleRating = ''
        for (let i in values[id]) {
          const { checked, value } = values[id][i]
          if (checked) scaleRating = value
        }
        return scaleRating
      }
      case 'signature': {
        return values[id] ? (
          <img width='100' height='30' src={values[id]} />
        ) : (
          ''
        )
      }
      case 'name':
      case 'price': {
        let name = ''
        for (let value in values[id]) {
          name += `${values[id][value] || ''}  `
        }
        return name
      }
      case 'address': {
        let address = ''
        for (let value in values[id]) {
          address += `${values[id][value]?.value || values[id][value] || ''}  `
        }
        return address
      }
      default:
        return values[id]
    }
  }

  return (
    <Viewer>
      {({ values }) => {
        return (
          <table>
            <tbody>
              {fields.map((field) => {
                const { id, label, type } = field
                if (
                  !type ||
                  type === 'terms' ||
                  type === 'map' ||
                  type === 'custom' ||
                  type === 'file' ||
                  type === 'just' ||
                  values[id] === undefined
                )
                  return null

                return (
                  <tr key={id}>
                    <th>{label}</th>
                    <td>{getValues({ values, type, id })}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )
      }}
    </Viewer>
  )
}
export default memo(Table)
