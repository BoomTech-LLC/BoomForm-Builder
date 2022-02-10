import React, { Fragment, useMemo } from 'react'

const Preview = ({ id, name, percentage, src, handleRemove, responce }) => {
  const onRemove = () => handleRemove(id)

  const getimage = () => {
    return src && <img src={src} />
  }

  const img = useMemo(() => getimage(), [id])

  return (
    <div className='boomFileUpload__preview'>
      {img}
      {percentage && !responce ? (
        <progress value={percentage} max='100'></progress>
      ) : (
        <>
          <span className='boomFileUpload-file__name'>{name}</span>
          <span
            className='boomFileUpload-fileRemove__btn'
            onClick={onRemove}
          ></span>
        </>
      )}
    </div>
  )
}

export default Preview
