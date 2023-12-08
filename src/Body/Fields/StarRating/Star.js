import React from 'react'

const Star = ({
  color,
  zoom,
  click,
  value,
  index,
  itemValue,
  onChangeHover,
  hoverItem,
  ...props
}) => {
  const isHoverItem = hoverItem !== null && hoverItem >= itemValue - 0.5
  const isActive = value >= itemValue || (isHoverItem && hoverItem >= itemValue)
  const isHalfActive =
    (!isHoverItem && value === itemValue - 0.5) || hoverItem === itemValue - 0.5
  // console.log('isActive,isHalfActive', isActive, isHalfActive)
  return (
    <svg
      {...props}
      className='boomForm-svg boomForm-svg-star'
      onClick={click}
      fill={isActive ? color : 'none'}
      width={zoom}
      height={zoom}
      viewBox='0 0 20 20'
      stroke={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      {isHalfActive ? (
        <path
          d='M9.9 2.5V15L4.5 18.10L5.5 12L1.8 7.8L6.5 7L9.7 2Z'
          fill={`${isActive || isHalfActive ? color : 'none'}`}
        />
      ) : (
        isActive && (
          <path d='M10.0013 1.66663L12.5763 6.88329L18.3346 7.72496L14.168 11.7833L15.1513 17.5166L10.0013 14.8083L4.8513 17.5166L5.83464 11.7833L1.66797 7.72496L7.4263 6.88329L10.0013 1.66663Z' />
        )
      )}

      <path d='M10.0013 1.66663L12.5763 6.88329L18.3346 7.72496L14.168 11.7833L15.1513 17.5166L10.0013 14.8083L4.8513 17.5166L5.83464 11.7833L1.66797 7.72496L7.4263 6.88329L10.0013 1.66663Z' />
    </svg>
  )
}

export default Star
