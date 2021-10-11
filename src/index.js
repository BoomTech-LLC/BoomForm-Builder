import React, { useState, useEffect } from 'react'
import { BoomForm } from 'boomform'
import Header from './Header'
import Footer from './Footer'
import Fields from './Fields'
import StateHandler from './StateHandler'

//Pagination
import PaginationFooter from './Pagination/Footer/Footer'
import PaginationHeader from './Pagination/Header/Pagination'
import PerPageHeader from './Pagination/Header/PerPageHeader'

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
    logic: isLogicOn = false,
    innerComponent = () => {},
    captcha
  } = global

  const isPagination = Object.keys(pagination).length !== 0

  const { pages, initial = 0, buttons, timeline } = pagination
  const [currentPage, setCurrentPage] = useState(initial)

  return (
    <BoomForm>
      <form className='boomForm' noValidate>
        <Header name={name} description={description} />
        {isPagination && (
          <PaginationHeader
            timeline={timeline}
            pagesLength={pages.length}
            currentPage={currentPage}
          />
        )}
        {isPagination && <PerPageHeader page={pages[currentPage]} />}
        <Fields
          fields={fields}
          pagination={isPagination ? pages[currentPage].fields : []}
          logic={isLogicOn ? logic : []}
        />
        {isPagination ? (
          <PaginationFooter
            onSubmit={onSubmit}
            button={button}
            paginationButtons={buttons}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            captcha={captcha}
          />
        ) : (
          <Footer captcha={captcha} onSubmit={onSubmit} button={button} />
        )}
        <StateHandler innerComponent={innerComponent} />
      </form>
    </BoomForm>
  )
}

export default Builder
