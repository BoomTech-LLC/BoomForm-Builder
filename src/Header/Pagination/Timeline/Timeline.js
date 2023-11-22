import React from 'react'
import Text from './Text'
import Progress from './Progress'

const Pagination = ({ timeline, pagesLength, currentPage }) => {
  if (timeline === undefined) return null

  return timeline === 0 ? (
    <Text
      pagesLength={pagesLength}
      currentPage={
        currentPage + 1 > pagesLength ? pagesLength : currentPage + 1
      }
    />
  ) : (
    <Progress
      pagesLength={pagesLength}
      currentPage={currentPage + 1 > pagesLength ? pagesLength : currentPage}
    />
  )
}

export default Pagination
