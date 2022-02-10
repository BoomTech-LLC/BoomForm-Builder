import React, { Fragment, useEffect, useRef, useState } from 'react'
import { uploadFiles, correctFiles } from './../../../Helpers/files'
import List from './List'
import { Custom, Input } from 'boomform'

const File = ({
  id,
  initial,
  classnameprefix,
  isMultiple = false,
  inputContent,
  autoUpload = true,
  getErrors = (error) => {
    // console.log(error)
  },
  dropbox,
  validation,
  ...props
}) => {
  const fileInputRef = useRef(null)

  return (
    <Custom id={id} validation={validation} {...props}>
      {({ handleChange, value }) => {
        const handleCallback = (fileId, status, responce, newValues) => {
          if (status === 200) {
            newValues.map((newValue) => {
              if (newValue.id === fileId) newValue.responce = responce
            })
            handleChange({
              id,
              value: newValues
            })
          } else {
            const incorrectFile = newValues.find((item) => item.id === fileId)
            const _newValues = newValues.filter((item) => item.id !== fileId)
            handleChange({
              id,
              value: _newValues
            })
            alert(
              `We are unable to upload your file named ${incorrectFile.name}. Please if it’s possible try to rename it, otherwise contact us.`
            )
          }
        }

        const handleLoading = (fileId, percentage, newValues) => {
          newValues.map((newValue) => {
            if (newValue.id === fileId) newValue.percentage = percentage
          })
          handleChange({
            id,
            value: newValues
          })
        }

        const acceptFiles = (files) => {
          const newFiles = correctFiles(files)
          const newValues = value ? [...value, ...newFiles] : newFiles
          uploadFiles(
            newFiles,
            dropbox,
            handleCallback,
            handleLoading,
            newValues
          )
          handleChange({
            id: id,
            value: newValues
          })
        }

        const handleFileUpload = (e) => {
          const files = e.target.files
          acceptFiles(files)
        }

        const handleFileDrop = (e) => {
          e.preventDefault()
          const files = e.dataTransfer.files
          acceptFiles(files)
        }

        const handleRemove = (fileId) => {
          const _value = value.filter((file) => file.id !== fileId)
          handleChange({ id, value: [..._value] })
        }

        return (
          <>
            <div>
              <div className='boomFileUpload-file__content'>
                {value && <List value={value} handleRemove={handleRemove} />}
                {isMultiple || (!isMultiple && (!value || !value.length)) ? (
                  <div
                    className='boomFileUpload-drop__content'
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => e.preventDefault()}
                    onDragLeave={(e) => e.preventDefault()}
                    onDrop={handleFileDrop}
                    onClick={() => fileInputRef.current.click()}
                  >
                    <div className='boomFileUpload-input__content'>
                      {inputContent ||
                        `Drag File${isMultiple ? `s` : ``} or Click to Browse`}
                    </div>
                    <input
                      ref={fileInputRef}
                      multiple={isMultiple}
                      type='file'
                      onChange={handleFileUpload}
                    />
                  </div>
                ) : null}
              </div>
            </div>
            {validation?.HTMLValidate === true && (
              <div style={{ overflow: 'hidden', height: 0 }}>
                <Input
                  id={id}
                  validation={validation}
                  maxLength='0'
                  {...props}
                  type='text'
                />
              </div>
            )}
          </>
        )
      }}
    </Custom>
  )
}

export default File

{
  /* <FileUpload
                {...props}
                id={id}
                classprefix={classnameprefix}
                isMultiple={isMultiple}
                initialValue={initial}
                inputContent={inputContent}
                autoUpload={autoUpload}
                // getResult={handleGetResult}
                // onRemove={handleRemove}
                // getFiles={handleGetFiles}
                // getErrors={getErrors}
                url={url}
                headers={headers}
                dropbox={dropbox}
              /> */
}
