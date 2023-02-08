import React, { memo } from 'react'
import Preview from './Preview'
const List = ({ value, handleRemove, loadingState }) => {
  return value.map((file) => {
    const { id, type, size, originalName } = file
    console.log(file)
    return (
      <Preview
        key={id}
        id={id}
        name={originalName}
        percentage={loadingState[id]}
        url={type && URL.createObjectURL(file)}
        handleRemove={handleRemove}
        type={type}
        size={size}
      />
    )
  })
}

export default memo(List)
