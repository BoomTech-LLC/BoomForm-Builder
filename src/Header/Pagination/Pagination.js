import React, { Fragment } from 'react'
import Timeline from './Timeline/Timeline'
import PerPageHeader from './PerPageHeader'

const Pagination = ({ isPagination, pagination, currentPage , logicIds }) => {
  if (!isPagination) return null
  const { timeline, pages, mode } = pagination

  //Need to have separated prop for timeline 
  // This needs for BoomForm Platform app
  
  if (mode === 'section') return null
  return (
    <>
      <Timeline
        timeline={timeline}
        pagesLength={pages.filter((_,index)=> !logicIds.pages.includes(index)).length}
        currentPage={currentPage}
      />
      <PerPageHeader page={pages[currentPage]} />
    </>
  )
}

export default Pagination
