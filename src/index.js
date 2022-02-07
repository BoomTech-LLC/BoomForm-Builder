import React, { useState, useEffect, useRef } from 'react'
import { BoomForm } from 'boomform'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
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
  logic = []
}) => {
  const {
    name,
    description,
    onSubmit,
    onSubmitFailed,
    onStateChange = () => {},
    onFirstRender = () => {},
    onDie = () => {},
    print: isPrint = false,
    captcha
  } = global

  const formRef = useRef(null)

  const isPagination = Object.keys(pagination).length !== 0
  const isLogic = logic.length !== 0

  const { pages, initial = 0, buttons, timeline, pageCounter } = pagination
  const [currentPage, setCurrentPage] = useState(initial)

  /*
    Setting Inital Page For Pagination
    ----- We need this when the pagination is turnned on 
  */
  useEffect(() => {
    setCurrentPage(initial)
  }, [initial])

  /*
    Handling Form Lifecycle Callback Events
  */
  useEffect(() => {
    onFirstRender({ setCurrentPage })

    return () => {
      onDie({ setCurrentPage })
    }
  }, [])

  return (
    <BoomForm
      global={global}
      fields={fields}
      button={button}
      pagination={pagination}
      logic={logic}
    >
      {() => (
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

          <Body
            isLogic={isLogic}
            logic={logic}
            // Need Refactor
            fields={fields}
            isPagination={isPagination}
            pages={pages}
            currentPage={currentPage}
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
          <StateHandler
            onStateChange={onStateChange}
            formRef={formRef}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </form>
      )}
    </BoomForm>
  )
}

export default Builder
