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
  logic,
  isSingleField = false
}) => {
  const {
    name,
    description,
    onSubmit,
    logic: isLogicOn = false,
    innerComponent = () => {},
    print: isPrint = false,
    captcha
  } = global

  const isPagination = Object.keys(pagination).length !== 0

  const { pages, initial = 0, buttons, timeline } = pagination
  const [currentPage, setCurrentPage] = useState(initial)

  useEffect(() => {
    setCurrentPage(initial || 0)
  }, [initial])

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
        {isSingleField && <div className='boomForm-paginationCount'>
          {currentPage + 1}/{pages.length || 1}
        </div>
        }
        {isPagination ? (
          <PaginationFooter
            onSubmit={onSubmit}
            button={button}
            paginationButtons={buttons}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            captcha={captcha}
            fields={fields}
            name={name}
            description={description}
            isPrint={isPrint}
            isSingleField={isSingleField}
          />
        ) : (
          <Footer
            captcha={captcha}
            button={button}
            fields={fields}
            name={name}
            description={description}
            isPrint={isPrint}
            onSubmit={onSubmit}
          />
        )}
        <StateHandler innerComponent={innerComponent} />
      </form>
    </BoomForm>
  )
}

export default Builder
