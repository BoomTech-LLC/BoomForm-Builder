import React, { useState, useEffect, useRef } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Body from './Body'
import StateHandler from './StateHandler'

import { useField } from 'boomform'

import { getHiddenIds } from './Helpers/logic'
import { getRendableData } from './Helpers/global'

const Form = ({ global, fields, button, payment, pagination, logic }) => {
  const {
    name,
    description,
    onStateChange = () => {},
    onFirstRender = () => {},
    onDie = () => {}
  } = global
  const isLogic = logic.length !== 0
  const updatableFields = []

  if (isLogic)
    for (let i = 0; i < logic.length; i++)
      for (let j = 0; j < logic[i].conditions.length; j++)
        logic[i].conditions[j].item
          ? updatableFields.push(
              `${logic[i].conditions[j].id}.${logic[i].conditions[j].item}`
            )
          : updatableFields.push(logic[i].conditions[j].id)

  const { initial = 0 } = pagination

  const formRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(initial)
  const isPagination = Object.keys(pagination).length !== 0
  const data = useField(updatableFields)

  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields,
  })
  
  const printableFields = getRendableData(
    fields,
    logicIds,
    pagination,
    currentPage,
  )
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
        logicIds={logicIds}
      />
      <Body
        fields={fields}
        payment={payment}
        printableFields={printableFields}
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
        logicIds={logicIds}
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
