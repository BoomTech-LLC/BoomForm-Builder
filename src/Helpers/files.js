import axios from 'axios'
export const ABORT_REQUEST_CONTROLLERS = new Map()

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

const uploadFile = (file, dropbox, callback, handleLoading,signal,) => {
  const { headers: dropBoxHeaders, dropboxAPIArg, url } = dropbox
  const { path } = dropboxAPIArg
  const headers = {
    ...dropBoxHeaders,
    'Dropbox-API-Arg': JSON.stringify({
      ...dropboxAPIArg,
      path: `${path}/${file.name}`
    })
  }
  
  axios
    .post(url, file, {
      signal,
      onUploadProgress: (event) => {
        handleLoading(
          file.id,
          Math.round((100 * event.loaded) / event.total),
        )
      },
      headers: headers
    })
    .then((response) => {
      const { status } = response
      if (status === 200) callback(file.id, 200, response?.data)
      else callback(file.id, status, response)
    })
    .catch((error) => callback(file.id, 0, error,file?.originalName))
}

export const correctFiles = (files) => {
  let newFiles = []
  for (let i = 0; i < files.length; i++)
    newFiles.push(addAdditionalParams(files[i], i))

  return newFiles
}

export const uploadFiles = (
  fileList,
  dropbox,
  callback,
  handleLoading,
) => {
 
  for (let i = 0; i < fileList.length; i++){
    const controller = new AbortController()
    ABORT_REQUEST_CONTROLLERS.set(fileList[i].id, controller)
    uploadFile(fileList[i], dropbox, callback, handleLoading,controller.signal)
  }
   
}
