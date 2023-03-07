import React, { useState, useEffect, useRef } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Body from './Body'
import StateHandler from './StateHandler'

const Form = ({ global, fields, button, payment, pagination, logic }) => {
  const {
    name,
    description,
    onStateChange = () => {},
    onFirstRender = () => {},
    onDie = () => {}
  } = global
  const { initial = 0 } = pagination

  const formRef = useRef(null)
  const allFiles = useRef([])
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
      <Body
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
        allFiles={allFiles}
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
        allFiles={allFiles}
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

export default Form
