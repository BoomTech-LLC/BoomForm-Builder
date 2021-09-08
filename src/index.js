import React, { useState, useEffect } from 'react'
import { BoomForm } from 'boomform'
import Header from './Header'
import StandardFooter from './Footer'
import PaginationFooter from './Pagination/Footer/Footer'
import Fields from './Fields'
import StateHandler from './StateHandler'

const Builder = ({
  global = {},
  fields = [],
  button = {},
  pagination = {},
  logic
}) => {
  const {
    name,
    description,
    onSubmit,
    pagination: isPaginationOn = false,
    logic: isLogicOn = false,
    innerComponent = () => {}
  } = global

  const {
    pages,
    current = 0,
    nextText = 'Next',
    prevText = 'Previous',
    navigation = 'buttons'
  } = pagination

  const [paginationIds, setPaginationIds] = useState(
    isPaginationOn ? pages[current] : []
  )
  const [currentPage, setCurrentPage] = useState(
    isPaginationOn ? current : null
  )
  const [logicIds, setLogicIds] = useState([])

  useEffect(() => {
    if (isPaginationOn) setPaginationIds(pages[currentPage])
  }, [currentPage])

  return (
    <BoomForm>
      <form className='boomForm' noValidate>
        <Header
          name={name}
          description={description}
          pagesLength={pages?.length}
          currentPage={currentPage}
          isPaginationOn={isPaginationOn}
        />
        <Fields
          fields={fields}
          paginationIds={paginationIds}
          logicIds={logicIds}
        />
        {isPaginationOn ? (
          <PaginationFooter
            currentPage={currentPage}
            button={button}
            navigation={navigation}
            nextText={nextText}
            prevText={prevText}
            pagesLength={pages.length}
            isLogicOn={isLogicOn}
            logic={logic}
            onSubmit={onSubmit}
            setCurrentPage={setCurrentPage}
            setLogicIds={setLogicIds}
            pages={pages}
          />
        ) : (
          <StandardFooter
            onSubmit={onSubmit}
            button={button}
            isLogicOn={isLogicOn}
            logic={logic}
            setLogicIds={setLogicIds}
          />
        )}
        <StateHandler innerComponent={innerComponent} />
      </form>
    </BoomForm>
  )
}

export default Builder
