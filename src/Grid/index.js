import React, { useEffect, useRef, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import StateHandler from '../StateHandler'
import GridPages from './GridPages'

const GridForm = ({ global, fields, button, payment, pagination, logic , gridOptions}) => {
  const {
    name,
    description,
    onStateChange = () => {},
    onFirstRender = () => {},
    onDie = () => {}
  } = global
  const { initial = 0 } = pagination

  const formRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(initial)

  const isPagination = Object.keys(pagination).length !== 0
  const isLogic = logic.length !== 0

  useEffect(() => {
    setCurrentPage(initial)
  }, [initial])

  useEffect(() => {
    onFirstRender({ setCurrentPage })

    return () => {
      onDie({ setCurrentPage })
    }
  }, [])

  return (
    <form ref={formRef} className='boomForm'>
      <Header
        name={name}
        description={description}
        isPagination={isPagination}
        pagination={pagination}
        currentPage={currentPage}
      />
      <GridPages
        fields={fields}
        isLogic={isLogic}
        logic={logic}
        isPagination={isPagination}
        pagination={pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        payment={payment}
        global={global}
        formRef={formRef}
        gridOptions={gridOptions}
      />
      <Footer
        formRef={formRef}
        global={global}
        button={button}
        fields={fields}
        isPagination={isPagination}
        pagination={pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        payment={payment}
        logic={logic}
      />

      <StateHandler
        onStateChange={onStateChange}
        formRef={formRef}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </form>
  )
}

export default GridForm
