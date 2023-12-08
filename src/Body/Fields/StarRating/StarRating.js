import React, { Fragment, useRef, useState } from 'react'
import Star from './Star'
import Circle from './Circle'
import { Custom, Input } from 'boomform'

const StarRating = (props) => {
  const {
    id,
    count = 5,
    shape,
    color = '#FFAB07',
    zoom = 40,
    validation
  } = props

  const [hoverItem, setHoverItem] = useState(null)

  const validationField = useRef()

  const getRatingValueWithElement = (e, itemValue) => {
    const target = e.target
    const rect = target.getBoundingClientRect()
    const x = Math.floor(e.clientX - rect.left)
    const targetHalf = Math.floor(target.clientWidth / 2)
    let minus = 0

    if (x === 0) minus = 1
    else if (x < targetHalf) minus = 0.5

    return itemValue - minus
  }

  return (
    <Custom id={id} {...props}>
      {({ handleChange, handleBlur, value }) => {
        return (
          <>
            <div
              onBlur={() => {
                if (validation.HTMLValidate === true) {
                  const validationInput = validationField.current.firstChild
                  validationInput.focus()
                  validationInput.blur()
                }
                handleBlur({
                  id,
                  value,
                  e: null,
                  field: props
                })
              }}
            >
              {Array.from({ length: count }, (item, index) => {
                const handleClick = (e) => {
                  const newValue = getRatingValueWithElement(e, index)

                  handleChange({
                    id,
                    value: newValue,
                    e,
                    field: { id, type: 'starRating' }
                  })
                }

                return shape === 'circle' ? (
                  <Circle
                    key={index}
                    {...props}
                    click={handleClick}
                    value={value}
                    index={index}
                    color={color}
                    zoom={zoom}
                    itemValue={index}
                    hoverItem={hoverItem}
                  />
                ) : (
                  <Star
                    key={index}
                    {...props}
                    click={handleClick}
                    value={value}
                    index={index}
                    color={color}
                    zoom={zoom}
                    itemValue={index}
                    hoverItem={hoverItem}
                  />
                )
              })}
            </div>
            {validation.HTMLValidate === true && (
              <div
                ref={validationField}
                style={{ overflow: 'hidden', height: '0px' }}
              >
                <Input maxLength='0' {...props} type='text' />
              </div>
            )}
          </>
        )
      }}
    </Custom>
  )
}

export default StarRating
