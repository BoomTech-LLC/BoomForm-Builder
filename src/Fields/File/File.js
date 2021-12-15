import React, { Fragment } from 'react'
import { Custom, Input } from 'boomform'
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
  validation,
  ...props
}) => {
  return (
    <Custom id={id} validation={validation} {...props}>
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
          handleBlur({
            id,
            e: null,
            value: result,
            field: { id, initial, ...props }
          })
        }

        return (
          <>
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
            {validation?.HTMLValidate === true && <div style={{ overflow: 'hidden', height: 0 }} >
              <Input id={id} validation={validation} maxLength="0" {...props} type='text'/>
            </div>}
          </>
        )
      }}
    </Custom>
  )
}

export default File
