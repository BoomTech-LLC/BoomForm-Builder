import React, { memo } from 'react'
import Preview from './Preview'
const List = ({
  value,
  handleRemove,
  loadingState,
  listType,
  completedContent = ''
}) => {
  switch (listType) {
    case 'loaded': {
      return value.map(file => {
        const { id, type, size, originalName } = file
        if (file.responce) {
          return (
            <Preview
              key={id}
              id={id}
              name={originalName}
              percentage={100}
              url={type && URL.createObjectURL(file)}
              handleRemove={handleRemove}
              type={type}
              size={size}
              completedContent={completedContent}
              listType={listType}
            />
          )
        }
      })
    }
    case 'loading': {
      return value.map(file => {
        const { id, type, size, originalName } = file
        return (
          <Preview
            key={id}
            id={id}
            name={originalName}
            percentage={loadingState[id] || 0}
            url={type && URL.createObjectURL(file)}
            handleRemove={handleRemove}
            type={type}
            size={size}
            completedContent={completedContent}
            listType={listType}
          />
        )
      })
    }
  }
}

export default memo(List)
