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
  logic
}) => {
  const {
    name,
    description,
    onSubmit,
    onSubmitFailed,
    logic: isLogicOn = false,
    innerComponent = () => {},
    print: isPrint = false,
    captcha
  } = global

  const formRef = useRef(null)
  const isPagination = Object.keys(pagination).length !== 0

  const { pages, initial = 0, buttons, timeline, pageCounter } = pagination
  const [currentPage, setCurrentPage] = useState(initial)

  useEffect(() => {
    setCurrentPage(initial)
  }, [initial])

  return (
    <BoomForm>
      <form ref={formRef} className='boomForm'>
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
          setCurrentPage={setCurrentPage}
        />
        {isPagination ? (
          <React.Fragment>
            {pageCounter && (
              <Counter currentPage={currentPage} pagesLangth={pages.length} />
            )}
            <PaginationFooter
              formRef={formRef}
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
              onSubmitFailed={onSubmitFailed}
            />
          </React.Fragment>
        ) : (
          <Footer
            formRef={formRef}
            captcha={captcha}
            button={button}
            fields={fields}
            name={name}
            description={description}
            isPrint={isPrint}
            onSubmit={onSubmit}
            onSubmitFailed={onSubmitFailed}
          />
        )}
        <StateHandler innerComponent={innerComponent} />
      </form>
    </BoomForm>
  )
}

export default Builder
