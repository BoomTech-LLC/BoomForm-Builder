import axios from 'axios'
import React, { Fragment, useEffect, useRef, useState } from 'react'

const CancelToken = axios.CancelToken
const source = [];
let del = [];

const addAdditionalParams = (file, i) => {
  const extension = file.name.split('.').pop()
  const originalName = file.name.split('.').slice(0, -1).join('.')
  const random = Math.random().toString(36).substr(2, 4)
  const originalEncodedName = encodeURIComponent(originalName)
  const newName = `${originalEncodedName}_${random}.${extension}`
  const newFile = new File([file], newName, { type: file.type })
  newFile.id = `${new Date().getTime()}-${i}`
  newFile.percentage = 0
  newFile.originalName = `${originalName}.${extension}`
  newFile.originalEncodedName = originalEncodedName
  return newFile
}

const uploadFile = (file, dropbox, callback, handleLoading, newValues) => {
  const { headers: dropBoxHeaders, dropboxAPIArg, url } = dropbox
  const { path } = dropboxAPIArg
  const headers = {
    ...dropBoxHeaders,
    'Dropbox-API-Arg': JSON.stringify({
      ...dropboxAPIArg,
      path: `${path}/${file.name}`
    })
  }
  source[file.id] = CancelToken.source()
  axios
    .post(url, file, {
      cancelToken: source[file.id].token,
      onUploadProgress: (event) => {
        console.log(newValues,"35435")
       console.log(del, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"); 
         newValues = newValues.filter((file) => !del.includes(file.id))
         console.log(newValues, "bbbbbbbbbbbbbbbbbbbbbbbbbbb");
        
        
        handleLoading(
          file.id,
          Math.round((100 * event.loaded) / event.total),
          newValues
        )
      },
      headers: headers
    })
    .then((response) => {
      const { status } = response
      if (status === 200) callback(file.id, 200, response?.data, newValues)
      else callback(file.id, status, response, newValues)
    })
    .catch((error) => callback(file.id, 0, error, newValues))
}

export const cancelUpload = (fileId) => {
  del = [...del, fileId];
  source[fileId] && source[fileId].cancel()
}
export const correctFiles = (files) => {
  let newFiles = []
  for (let i = 0; i < files.length; i++)
    newFiles.push(addAdditionalParams(files[i], i))

  return newFiles
}

export const uploadFiles = (
  files,
  dropbox,
  callback,
  handleLoading,
  newValues
) => {
  for (let i = 0; i < files.length; i++)
    uploadFile(files[i], dropbox, callback, handleLoading, newValues)
}
