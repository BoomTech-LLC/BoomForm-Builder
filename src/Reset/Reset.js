import React from 'react'

const Reset = ({ text, onReset, reset }) => {
  const handleClick = e => {
    e.preventDefault()
    if(onReset) onReset(reset);
  }

  return (
    <div className={'boomForm-resetButton__content'}>
      <button
        onClick={e => {
          handleClick(e)
        }}
        dangerouslySetInnerHTML={{ __html: text.length > 10 ? text.substring(0, 15) + "..." : text }}
      />        
    </div>
  )
}

export default Reset
