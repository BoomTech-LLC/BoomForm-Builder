import React, { memo } from 'react'
import Preview from './Preview'
const List = ({ value, handleRemove }) => {
  return value.map((file) => {
    const { id, type, percentage, size, originalName } = file
    console.log(file);
    return (
      <Preview
        key={id}
        id={id}
        name={originalName}
        percentage={percentage}
        url={type && URL.createObjectURL(file)}
        handleRemove={handleRemove}
        type={type}
        size={size}
      />
    )
  })
}

export default memo(List)
