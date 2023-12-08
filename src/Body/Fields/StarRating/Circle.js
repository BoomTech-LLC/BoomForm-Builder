import React from 'react'

const Circle = ({
  color,
  zoom,
  click,
  value,
  index,
  hoverItem,
  itemValue,
  ...props
}) => {
  const isHoverItem = hoverItem !== null && hoverItem >= itemValue - 0.5
  const isActive = value >= itemValue || (isHoverItem && hoverItem >= itemValue)
  const isHalfActive =
    (!isHoverItem && value === itemValue - 0.5) || hoverItem === itemValue - 0.5

  return (
    <svg
      {...props}
      className='boomForm-svg boomForm-svg-circle'
      onClick={click}
      width={zoom}
      height={zoom}
      fill={value > index ? color : 'none'}
      stroke={color}
      viewBox={`0 -2 20 25`}
      xmlns='http://www.w3.org/2000/svg'
    >
      {isHalfActive ? (
        <path
          d='M11 19.75C13.3206 19.75 15.5462 18.8281 17.1872 17.1872C18.8281 15.5462 19.75 13.3206 19.75 11C19.75 8.67936 18.8281 6.45376 17.1872 4.81282C15.5462 3.17187 13.3206 2.25 11 2.25V19.75ZM11 21C8.34784 21 5.8043 19.9464 3.92893 18.0711C2.05357 16.1957 1 13.6522 1 11C1 8.34784 2.05357 5.8043 3.92893 3.92893C5.8043 2.05357 8.34784 1 11 1C13.6522 1 16.1957 2.05357 18.0711 3.92893C19.9464 5.8043 21 8.34784 21 11C21 13.6522 19.9464 16.1957 18.0711 18.0711C16.1957 19.9464 13.6522 21 11 21V21Z'
          fill={`${isActive || isHalfActive ? color : 'none'}`}
          stroke={color}
          strokeWidth={1 + 'px'}
          vectorEffect='non-scaling-stroke'
          strokeLinecap='round'
        />
      ) : (
        isActive && (
          <path
            d='M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z'
            fill={`${isActive || isHalfActive ? color : 'none'}`}
            stroke={color}
            strokeWidth={1 + 'px'}
            vectorEffect='non-scaling-stroke'
            strokeLinecap='round'
          />
        )
      )}

      <path
        d='M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z'
        stroke={color}
        strokeWidth={1 + 'px'}
        vectorEffect='non-scaling-stroke'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default Circle
