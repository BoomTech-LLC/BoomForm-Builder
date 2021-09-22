import React from 'react'
import { Custom } from 'boomform'
import { FileUpload } from 'boom-file-upload'
import 'boom-file-upload/dist/index.css'

const File = ({
  id,
  initial,
  classnameprefix,
  isMultiple = false,
  inputContent = 'Click Or Drag and Drop For Upload Files',
  autoUpload = true,
  getErrors = (error) => {
    console.log(error)
  },
  url = 'https://httpbin.org/post',
  headers = { 'Content-type': 'application/json' },
  ...props
}) => {
  return (
    <Custom id={id}>
      {({ values, handleChange, handleBlur }) => {
        const handleGetFiles = (result) => {
          if (result.length)
            handleChange({
              id,
              e: null,
              value: result,
              field: { id, initial }
            })
        }
        const handleRemove = (key) => {
          const [files] = [...values[id]].filter((file) => file.id != key)
          handleChange({
            id,
            e: null,
            value: files || null,
            field: { id, initial }
          })
        }

        const handleGetResult = (result) => {
          handleBlur({
            id,
            e: null,
            value: result,
            field: { id, initial }
          })
        }
        return (
          <FileUpload
            {...props}
            id={id}
            classprefix={classnameprefix}
            isMultiple={isMultiple}
            initialValue={initial}
            inputContent={inputContent}
            autoUpload={autoUpload}
            getResult={handleGetResult}
            onRemove={handleRemove}
            getFiles={handleGetFiles}
            getErrors={getErrors}
            url={url}
            headers={headers}
          />
        )
      }}
    </Custom>
  )
}

export default File
