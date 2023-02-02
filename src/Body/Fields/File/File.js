import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { uploadFiles, correctFiles, ABORT_REQUEST_CONTROLLERS } from './../../../Helpers/files'
import List from './List'
import { Context, Input, useField } from 'boomform'

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
  isSubmited,
  ...props
}) => {
  const fileInputRef = useRef(null)
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    window._handleChange({ id, value: fileList.length === 0 ? null : fileList })
  }, [fileList])


  useEffect(() => {

    setFileList([])
    
  }, [isSubmited])

  const handleCallback = (fileId, status, responce, fileName) => {

    if (status === 200) {
      setFileList((prev) => prev.map((file) => {
        if (fileId === file.id) file.responce = responce
        return file
      }))
    }

    if (responce?.message === 'canceled') {
      console.log(`You have canceled ${fileName} file upload`)
    } else if (status === 0) {
      const incorrectFile = fileList.find((item) => item.id === fileId)
      console.log(
        `We are unable to upload your file named ${incorrectFile?.name}. Please if it’s possible try to rename it, otherwise contact us.`
      )
    }
  }

  const handleLoading = (fileId, percentage) => {

    setFileList((prev) => {
      return prev.map((file) => {
        if (fileId === file.id) file.percentage = percentage
        return file
      })
    })
  }

  const acceptFiles = (files) => {

    const newFiles = correctFiles(files)
    setFileList((prev) => [...prev, ...newFiles])

    uploadFiles(
      newFiles,
      dropbox,
      handleCallback,
      handleLoading,
    )
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
    setFileList((prev) => prev.filter((file) => fileId !== file.id))
    ABORT_REQUEST_CONTROLLERS.get(fileId)?.abort()
  }
  return (
    <>
      <div>
        <div className='boomFileUpload-file__content'>
          {(fileList.length !== 0) && <List value={fileList} handleRemove={handleRemove} />}
          {isMultiple || (!isMultiple && (!fileList || !fileList.length)) ? (
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

}

export default File
