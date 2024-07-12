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
        dangerouslySetInnerHTML={text}
      />        
    </div>
  )
}

export default Reset
