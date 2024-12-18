import React, { Fragment, useRef, useState } from "react"
import {
  uploadFiles,
  correctFiles,
  ABORT_REQUEST_CONTROLLERS,
} from "./../../../Helpers/files"
import List from "./List"
import { Custom, Input } from "boomform"

const File = ({
  id,
  icon,
  initial,
  classnameprefix,
  isMultiple = false,
  completedContent,
  inputContent,
  autoUpload = true,
  getErrors = (error) => {
    // console.log(error)
  },
  validation,
  uploadOptions,
  payment,
  ...props
}) => {
  
  const { sizeType, min, max, fileTypeFormat, types, formats } = validation

  const convertSize = (size, sizeType) => {
    switch (sizeType) {
      case "byte":
        return size
      case "kilobyte":
        return size / 1024
      case "megabyte":
        return size / (1024 * 1024)
      default:
        return size
    }
  }

  const fileInputRef = useRef(null)
  const loading = useRef("")
  const allFiles = useRef([])
  const [fileList, setFileList] = useState([])
  const [loadingState, setLoadingState] = useState({})
  let { accept } = props

  const checkFileValidity = (files) => {
    const setValidityMessage = (message) => {
      fileInputRef.current.setCustomValidity(message);
      fileInputRef.current.reportValidity();
    };
  
    const checkSizeValidity = (file) => {
      const size = convertSize(file?.size, sizeType);
      if (min && size < min?.value) {
        setValidityMessage(min?.msg);
        return false;
      }
      if (max && size > max?.value) {
        setValidityMessage(max?.msg);
        return false;
      }
      return true;
    };
  
    const checkFileTypeValidity = (file) => {
      const fileName = file.name?.toLowerCase();
      const fileExtension = fileName.split(".").pop();
      
      if (fileTypeFormat === "type" && !types?.value?.includes(fileExtension)) {
        setValidityMessage(types?.msg);
        return false;
      }
  
      const fileFormat = file.type.split("/").shift();
      if (fileTypeFormat === "format" && !formats?.value?.includes(fileFormat)) {
        setValidityMessage(formats?.msg);
        return false;
      }
  
      return true;
    };
  
    for (let file of files) {
      if (!checkSizeValidity(file)) {
        return true;
      }
  
      if (accept && accept.trim()) {
        const fileName = file.name?.toLowerCase();
        if (fileName && !accept.includes(fileName.split(".").pop())) {
          setValidityMessage(`Please choose only ${accept} files`);
          return true;
        }
      } else if (!checkFileTypeValidity(file)) {
        return true; 
      }
    }
  
    setValidityMessage("");
    return false;
  };
  

  const fileSubmitValidation = {
    HTMLValidate: true,
    custom: (value) => {
      if (value === "Loading") {
        return "Upload in progress, please wait"
      } else {
        return
      }
    },
  }

  return (
    <div>
      <Custom id={id} validation={validation} {...props}>
        {({ handleChange, value }) => {
          if (String(allFiles.current) !== String(value)) {
            if (value === null) {
              allFiles.current = []
            } else {
              allFiles.current = value
            }
          }
          const handleCallback = (fileId, status, responce, newValues) => {
            if (status === 200) {
              loading.current = "Done"
              setFileList((prev) => {
                return prev.filter((file) => {
                  return file.id !== fileId && !file.responce
                })
              })
              handleChange({ id: `${id}error`, value: "Done" })
              let newFiles = newValues.map((file) => {
                if (file.id === fileId) {
                  file.responce = responce
                }
                return file
              })
              handleChange({ id: id, value: newFiles })
            }
            if (status === "canceled") {
              loading.current = "Canceled"
              handleChange({ id: `${id}error`, value: "Canceled" })
              console.log(`You have canceled ${newValues?.name} file upload`)
            } else if (status === 0) {
              const incorrectFile = fileList.find((item) => item.id === fileId)
              console.log(
                `We are unable to upload your file named ${incorrectFile?.name}. Please if it’s possible try to rename it, otherwise contact us.`,
              )
            }
          }

          const handleLoading = (fileId, percentage) => {
            if (loading.current !== "Loading") {
              loading.current = "Loading"
              handleChange({ id: `${id}error`, value: "Loading" })
            }

            setLoadingState((prev) => ({ ...prev, [fileId]: percentage }))
          }

          const acceptFiles = (files) => {
            const newFiles = correctFiles(files)
            allFiles.current.push(...newFiles)
            loading.current = "Start"
            setFileList((prev) => [...prev, ...newFiles])
            handleChange({ id: `${id}error`, value: "Loading" })
            uploadFiles(
              newFiles,
              handleCallback,
              handleLoading,
              allFiles.current,
              uploadOptions,
            )
          }

          const handleRemove = (fileId) => {
            setFileList((prev) => {
              return prev.filter((file) => {
                return file.id !== fileId
              })
            })
            allFiles.current =
              allFiles.current &&
              allFiles.current.filter((file) => file.id !== fileId)
            const _value = value?.filter((file) => file.id !== fileId)
            if (_value && _value.length)
              handleChange({ id, value: [..._value] })
            else handleChange({ id, value: null })
            ABORT_REQUEST_CONTROLLERS.get(fileId)?.abort()
          }

          const handleFileDrop = (e) => {
            e.preventDefault()
            const files = e.dataTransfer.files
            if (checkFileValidity(files)) return
            acceptFiles(files)
          }

          const handleFileUpload = (e) => {
            const files = e.target.files
            if (checkFileValidity(files)) return
            acceptFiles(files)
          }
          return (
            <>
              <div>
                <div className="boomFileUpload-file__content">
                  {value && (
                    <div className="fileDone__content">
                      <List
                        value={value}
                        handleRemove={handleRemove}
                        loadingState={loadingState}
                        listType="loaded"
                        completedContent={completedContent}
                      />
                    </div>
                  )}

                  {!!fileList.length && (
                    <div className="fileLoading__content">
                      <List
                        value={fileList}
                        handleRemove={handleRemove}
                        loadingState={loadingState}
                        listType="loading"
                        completedContent={completedContent}
                      />
                    </div>
                  )}

                  {isMultiple || (!isMultiple && (!value || !value.length)) ? (
                    <div
                      className="boomFileUpload-drop__content"
                      onDragOver={(e) => e.preventDefault()}
                      onDragEnter={(e) => e.preventDefault()}
                      onDragLeave={(e) => e.preventDefault()}
                      onDrop={handleFileDrop}
                      onClick={() => fileInputRef.current.click()}
                    >
                      {icon?.enabled ? (
                        <div
                          className="boomFileUpload-cloud__icon"
                          dangerouslySetInnerHTML={{ __html: icon?.html }}
                        />
                      ) : null}
                      <div className="boomFileUpload-input__content">
                        {inputContent ||
                          `Drag File${
                            isMultiple ? `s` : ``
                          } or Click to Browse`}
                      </div>
                      <input
                        ref={fileInputRef}
                        {...props}
                        multiple={isMultiple}
                        type="file"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        onChange={handleFileUpload}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              {validation?.HTMLValidate === true && (
                <div style={{ overflow: "hidden", height: 0 }}>
                  <Input
                    id={id}
                    validation={validation}
                    maxLength="0"
                    {...props}
                    type="text"
                  />
                </div>
              )}
              <div></div>
            </>
          )
        }}
      </Custom>
      <div style={{ overflow: "hidden", height: 0 }}>
        <Input id={`${id}error`} validation={fileSubmitValidation} />
      </div>
    </div>
  )
}

export default File
