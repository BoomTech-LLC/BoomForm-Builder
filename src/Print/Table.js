import React, { memo, useContext } from 'react'
import { Context } from 'boomform'
import { stripHtml } from './../Helpers/global'
import countries from './../Helpers/countries'

const Table = ({ fields }) => {
  const allValues = useContext(Context)

  const getValues = ({ values, type, id }) => {
    switch (type) {
      case 'select': {
        if (values[id]?.key === 'placeholder') return ''
        return values[id]?.value
      }
      case 'multipleChoice': {
        let checkbox = ''
        for (let i in values[id]) {
          if (values[id][i]) {
            const { checked, value } = values[id][i]
            if (checked) checkbox += value + ','
          }
        }
        return checkbox.slice(0, -1)
      }
      case 'phone': {
        return `${countries[values[id]?.code].dial_code} ${
          values[id]?.phone || ''
        }`
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
          <img width='100' height='30' src={values[id] && values[id].url} />
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
      case 'file': {
        const isImage = fileName => {
          return /\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff|tif|ico|heic)$/i.test(
            fileName
          )
        }
        const fileElements = []
        let index = 0
        for (let value in values[id]) {
          const file = values[id][value]?.responce?.data

          if (file) {
            if (isImage(file.name && file.name)) {
              fileElements.push(
                <div key={`img-${index++}`}>
                  <img
                    style={{
                      width: '50%',
                      height: 'auto',
                      marginRight: '5px',
                      marginBottom: '10px'
                    }}
                    src={file?.path}
                    alt='Uploaded file'
                  />
                </div>
              )
            } else {
              fileElements.push(
                <div key={`link-${index++}`}>
                  <a href={file?.path}>{file?.name || file?.path}</a>
                </div>
              )
            }
          }
        }
        return fileElements.length ? fileElements : ''
      }
      default:
        return values[id]
    }
  }

  return (
    <table>
      <tbody>
        {fields.map(field => {
          const { id, label, type } = field
          if (
            !type ||
            type === 'terms' ||
            type === 'map' ||
            type === 'custom' ||
            type === 'just' ||
            allValues.state.values[id] === undefined
          )
            return null

          return (
            <tr key={id}>
              <th style={{ textAlign: 'right' }}>{stripHtml(label)}</th>
              <td style={{ textAlign: 'left', paddingLeft: '28px' }}>
                {getValues({ values: allValues.state.values, type, id })}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default memo(Table)
