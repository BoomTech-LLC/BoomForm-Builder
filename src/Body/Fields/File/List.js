import React, { memo } from 'react'
import Preview from './Preview'
const List = ({ value, handleRemove }) => {
  return value.map((file) => {
    const { id, type, percentage, originalName } = file
    return (
      <Preview
        key={id}
        id={id}
        name={originalName}
        percentage={percentage}
        url={type && URL.createObjectURL(file)}
        handleRemove={handleRemove}
        type={type}
      />
    )
  })
}

export default memo(List)
