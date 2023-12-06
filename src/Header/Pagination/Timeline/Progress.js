import React from 'react'
import classNames from 'classnames'

const Progress = ({ pagesLength, currentPage }) => {

  return (
    <div className='boomForm-paginationProgressBar'>
      {Array.from(Array(pagesLength).keys()).map((item) => {
        return (
          <div
            key={item}
            className={classNames('boomForm-paginationProgressBar-item', {
              'boomForm-paginationProgressBar-item--active': item <= currentPage
            })}
          ></div>
        )
      })}
    </div>
  )
}

export default Progress
