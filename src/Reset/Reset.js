import React from 'react'

const Reset = ({ text, reset }) => {
  const handleClick = e => {
    e.preventDefault()
    reset()
  }

  return (
    <div className={'boomFomr-reset-button'}>
      <button
        onClick={e => {
          handleClick(e)
        }}
      >
        {text}
      </button>
    </div>
  )
}

export default Reset
