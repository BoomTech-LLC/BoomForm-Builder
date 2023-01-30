import React, { Fragment, useMemo } from 'react'

const Preview = ({ id, name, percentage, url, handleRemove, type }) => {
  const onRemove = () => handleRemove(id)

  const getPreview = () => {
    if (type.startsWith('image/'))
      return <img src={url} />

    if (type.startsWith('video/'))
      return <video><source src={url} type={type} /></video>

    return <div className='boomFile_upload-no-preview'></div>
  }

  const preview = useMemo(() => getPreview(), [id])

  return (
    <div className='boomFileUpload__preview'>
      {preview}
      {percentage && <progress value={percentage} max='100'></progress>}
      <span className='boomFileUpload-file__name'>{name}</span>
      <span
        className='boomFileUpload-fileRemove__btn'
        onClick={onRemove}
      >x</span>

    </div>
  )
}

export default Preview
