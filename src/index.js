import React, { useState, useEffect, useRef } from 'react'
import { BoomForm } from 'boomform'
import Header from './Header'
import Footer from './Footer'
import Fields from './Fields'
import StateHandler from './StateHandler'

//Pagination
import PaginationFooter from './Pagination/Footer/Footer'
import PaginationHeader from './Pagination/Header/Pagination'
import PerPageHeader from './Pagination/Header/PerPageHeader'
import Counter from './Pagination/Counter'

const Builder = ({
  global = {},
  fields = [],
  button = {},
  pagination = {},
  logic,
}) => {
  const {
    name,
    description,
    onSubmit,
    logic: isLogicOn = false,
    innerComponent = () => { },
    print: isPrint = false,
    captcha
  } = global

  const isPagination = Object.keys(pagination).length !== 0

  const { pages, initial = 0, buttons, timeline, pageCounter } = pagination
  const [currentPage, setCurrentPage] = useState(initial)
  const formRef = useRef()

  useEffect(() => {
    setCurrentPage(initial || 0)
  }, [initial])

  return (
    <BoomForm>
      <form className='boomForm' noValidate ref={formRef}>
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
          formRef={formRef}
          pagination={isPagination ? pages[currentPage].fields : []}
          logic={isLogicOn ? logic : []}
        />
        {isPagination ? (
          <React.Fragment>
            {pageCounter && <Counter currentPage={currentPage} pagesLangth={pages.length} />}
            <PaginationFooter
              onSubmit={onSubmit}
              formRef={formRef}
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
            />
          </React.Fragment>
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
