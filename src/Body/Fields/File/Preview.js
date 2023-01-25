import React, { Fragment, useMemo } from 'react'

const Preview = ({ id, name, percentage, src, handleRemove, responce ,videoType,type}) => {
  const onRemove = () => handleRemove(id)

  const getimage = () => {
    if (src) {
      return src && <img src={src} />
    }
    if (videoType) {
      let videoTage = document.createElement('video');
      if (typeof videoTage.canPlayType == 'function') {
        return (
          <div>
            <video className='boomFile_upload-vide-tag'>
              <source src={videoType} type={type} />
           </video>
         </div>
         
        )
      } else {
       return <div className='boomFile_upload-video-image'></div>
      }
     
      
    }
   
  }

  const img = useMemo(() => getimage(), [id])

  return (
    <div className='boomFileUpload__preview'>
      {img}
      {percentage &&(
          <>
        <progress value={percentage} max='100'></progress>  
          <span className='boomFileUpload-file__name'>{name}</span>
          <span
            className='boomFileUpload-fileRemove__btn'
            onClick={onRemove}
            style={{ backgroundColor: 'red', cursor:'pointer'}}
          >X</span>
        </>
      )}
    </div>
  )
}

export default Preview
