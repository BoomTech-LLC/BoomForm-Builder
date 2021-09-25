import React, { Fragment } from 'react'
import Star from './Star'
import Circle from './Circle'
import { Custom } from 'boomform'

const StarRating = ({
  id,
  count = 5,
  shape,
  color = '#FFAB07',
  zoom = 40,
  ...props
}) => {
  return (
    <Custom id={id} {...props}>
      {({ handleChange, handleBlur, value }) => {
        return (
          <div
            onBlur={() => {
              handleBlur({
                id,
                value,
                e: null,
                field: props
              })
            }}
          >
            {Array.from({ length: count }, (item, index) => {
              return shape === 'circle' ? (
                <Circle
                  key={index}
                  {...props}
                  click={(e) =>
                    handleChange({
                      id,
                      value: index + 1,
                      e,
                      field: { id, type: 'starRating' }
                    })
                  }
                  value={value}
                  index={index}
                  color={color}
                  zoom={zoom}
                />
              ) : (
                <Star
                  key={index}
                  {...props}
                  click={(e) =>
                    handleChange({
                      id,
                      value: index + 1,
                      e,
                      field: { id, type: 'starRating' }
                    })
                  }
                  value={value}
                  index={index}
                  color={color}
                  zoom={zoom}
                />
              )
            })}
          </div>
        )
      }}
    </Custom>
  )
}

export default StarRating
