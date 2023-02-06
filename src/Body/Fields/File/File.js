import React, { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { uploadFiles, correctFiles, ABORT_REQUEST_CONTROLLERS } from './../../../Helpers/files'
import List from './List'
import { Input } from 'boomform'

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
  fileList,
  setFileList,
  ...props
}) => {
  const fileInputRef = useRef(null)

  useEffect(() => {
    window._handleChange({ id, value: fileList[id]?.length === 0 ? null : fileList[id] })
  }, [fileList])


  const handleCallback = (fileId, status, responce, fileName) => {

    if (status === 200) {
      setFileList((prev) => {
        let fileResponce = prev[id].map((file) => {
          if (file.id === fileId) {
            file.responce = responce
          }
          return file
        })
        return {
         ...prev,
          [id]:[...fileResponce]
       }
     })
    }

    if (responce?.message === 'canceled') {
      console.log(`You have canceled ${fileName} file upload`)
    } else if (status === 0) {
      const incorrectFile = fileList[id].find((item) => item.id === fileId)
      console.log(
        `We are unable to upload your file named ${incorrectFile?.name}. Please if it’s possible try to rename it, otherwise contact us.`
      )
    }
  }

  const handleLoading = (fileId, percentage) => {
    if ((percentage === 100 || percentage === 0)) {
      
      setFileList((prev) => {
        let filePrecentage = prev[id].map((file) => {
          if (file.id === fileId) {
            file.percentage = percentage
          }
          return file
        })
        return {
          ...prev,
          [id]: [...filePrecentage],
        }
      })

    }
      
  
  }

  const acceptFiles = (files) => {

    const newFiles = correctFiles(files)
    setFileList((prev) => {
      for (let key in prev) {
        if (key == id) {
          if (prev[key]) {
            prev[key]=[...prev[key],...newFiles]
          } else {
            prev[key]=[...newFiles]
          }
       
       }
      }
      return prev
    })
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
    setFileList((prev) => {
      let filteredFiles = prev[id].filter((file) => {
        return file.id !== fileId
      })
      return {
        ...prev,
        [id]: [...filteredFiles]
      }
    })

    ABORT_REQUEST_CONTROLLERS.get(fileId)?.abort()
  }
  return (
    <>
      <div>
        <div className='boomFileUpload-file__content'>
          {(fileList[id]) && <List value={fileList[id] || []} handleRemove={handleRemove} />}
          {isMultiple || (!isMultiple && (!fileList[id] || !fileList[id].length)) ? (
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
