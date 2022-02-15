import React, { Fragment } from 'react'
import Timeline from './Timeline/Timeline'
import PerPageHeader from './PerPageHeader'

const Pagination = ({ isPagination, pagination, currentPage }) => {
  if (!isPagination) return null

  const { timeline, pages } = pagination

  return (
    <>
      <Timeline
        timeline={timeline}
        pagesLength={pages.length}
        currentPage={currentPage}
      />
      <PerPageHeader page={pages[currentPage]} />
    </>
  )
}

export default Pagination
