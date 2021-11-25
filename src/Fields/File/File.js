import React from 'react'
import { Custom } from 'boomform'
import { FileUpload } from 'boom-file-upload'
import 'boom-file-upload/dist/index.css'

const File = ({
  id,
  initial,
  classnameprefix,
  isMultiple = false,
  inputContent,
  autoUpload = true,
  getErrors = (error) => {
    console.log(error)
  },
  url = 'https://httpbin.org/post',
  headers,
  dropbox,
  ...props
}) => {
  return (
    <Custom id={id} {...props}>
      {({ values, handleChange, handleBlur, value }) => {
        const handleGetFiles = (result) => {
          if (result.length)
            handleChange({
              id,
              e: null,
              value: result,
              field: { id, initial, ...props }
            })
        }
        const handleRemove = (key) => {
          const [files] = [...values[id]].filter((file) => file.id != key)
          handleChange({
            id,
            e: null,
            value: files || null,
            field: { id, initial, ...props }
          })
        }

        const handleGetResult = (result) => {
          handleChange({
            id,
            e: null,
            value: result,
            field: { id, initial, ...props }
          })
        }
        return (
          <div
            onBlur={() => {
              handleBlur({
                id,
                value,
                e: null,
                field: props
              })
            }}
          >
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
              dropbox={dropbox}
            />
          </div>
        )
      }}
    </Custom>
  )
}

export default File
