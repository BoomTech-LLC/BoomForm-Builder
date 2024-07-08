import React from 'react'

const Reset = ({ text, reset }) => {
  const handleClick = e => {
    e.preventDefault()
    reset()
  }

  return (
    <div className={'boomForm-resetButton__content'}>
      <button
        onClick={e => {
          handleClick(e)
        }}
      >
        {text.length > 10 ? 
          text.substring(0,10) + "..."  
        : text}
      </button>
    </div>
  )
}

export default Reset
