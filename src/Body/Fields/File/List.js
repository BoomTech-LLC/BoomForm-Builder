import React, { Fragment, memo } from 'react'
import Preview from './Preview'
const List = ({ value, handleRemove }) => {
  return value.map((file) => {
    const { id, type, percentage, originalName, responce } = file
    return (
      <Preview
        key={id}
        id={id}
        name={originalName}
        percentage={percentage}
        responce={responce}
        src={type && type.startsWith('image/') && URL.createObjectURL(file)}
        handleRemove={handleRemove}
        videoType={type && type.startsWith('video/') && URL.createObjectURL(file)}
        type={type}
      />
    )
  })
}

export default memo(List)
