import React, { Fragment, memo } from 'react'
import Preview from './Preview'
const List = ({ value, handleRemove, loadings }) => {
  return value.map((file) => {
    const { id, type, originalName, responce } = file
    return (
      <Preview
        key={id}
        id={id}
        name={originalName}
        percentage={loadings[id]}
        responce={responce}
        src={type && type.startsWith('image/') && URL.createObjectURL(file)}
        handleRemove={handleRemove}
      />
    )
  })
}

export default memo(List)
