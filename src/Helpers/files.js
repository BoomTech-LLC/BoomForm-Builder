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

const uploadFile = async (
  file,
  upLoadData,
  callback,
  handleLoading,
  allFiles,
  signal
) => {
  const { headers, queries, url } = upLoadData
  let requestURL = url

  let retries = 3
  let uploadSucceeded = false

  if (queries) {
    let iteration = 0
    Object.keys(queries).forEach((query) => {
      if (iteration === 0) {
        iteration++
        requestURL += `?${query}=${queries[query]}`
      } else {
        requestURL += `&${query}=${queries[query]}`
      }
    })
  }

  while (retries > 0 && !uploadSucceeded) {
    try {
      const formatedFiles = new FormData()
      formatedFiles.append('file', file)

      const response = await axios.post(requestURL, formatedFiles, {
        headers: {
          ...headers
        },
        onUploadProgress: (event) => {
          handleLoading(file.id, Math.round((100 * event.loaded) / event.total))
        }
      })

      const { status } = response
      if (status === 200) callback(file.id, 200, response?.data, allFiles)
      else callback(file.id, status, response, file)
      uploadSucceeded = true
    } catch (error) {
      if (error.message && error.message == 'canceled') {
        callback(file.id, error.message, error, file)
        break
      }
      retries--
      if (retries == 0) callback(file.id, 0, error, file)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }
  }
}

export const correctFiles = (files) => {
  let newFiles = []
  for (let i = 0; i < files.length; i++)
    newFiles.push(addAdditionalParams(files[i], i))

  return newFiles
}

export const uploadFiles = (
  fileList,
  upLoadData,
  callback,
  handleLoading,
  newValues
) => {
  for (let i = 0; i < fileList.length; i++) {
    const controller = new AbortController()
    ABORT_REQUEST_CONTROLLERS.set(fileList[i].id, controller)
    uploadFile(
      fileList[i],
      upLoadData,
      callback,
      handleLoading,
      newValues,
      controller.signal
    )
  }
}
