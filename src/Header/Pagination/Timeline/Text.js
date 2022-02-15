import React from 'react'

const Text = ({ pagesLength, currentPage }) => {
  return (
    <div className='boomForm-paginationTimeLineText'>{`Page ${
      currentPage + 1
    } of ${pagesLength}`}</div>
  )
}

export default Text
