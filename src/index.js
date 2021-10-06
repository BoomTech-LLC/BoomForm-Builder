import React, { useState, useEffect } from 'react'
import { BoomForm } from 'boomform'
import Header from './Header'
import StandardFooter from './Footer'
import PaginationFooter from './Pagination/Footer/Footer'
import Fields from './Fields'
import StateHandler from './StateHandler'
import Captcha from './Fields/Captcha/Captcha'

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
    innerComponent = () => {},
    captcha
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
          logic={isLogicOn ? logic : []}
        />
        {captcha !== undefined && <Captcha siteKey={captcha} />}
        {isPaginationOn ? (
          <PaginationFooter
            currentPage={currentPage}
            button={button}
            navigation={navigation}
            nextText={nextText}
            prevText={prevText}
            pagesLength={pages.length}
            isLogicOn={isLogicOn}
            onSubmit={onSubmit}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        ) : (
          <StandardFooter
            onSubmit={onSubmit}
            button={button}
            isLogicOn={isLogicOn}
          />
        )}
        <StateHandler innerComponent={innerComponent} />
      </form>
    </BoomForm>
  )
}

export default Builder
