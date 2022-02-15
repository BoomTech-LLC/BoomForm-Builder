import React, { useContext } from 'react'
import { Context } from 'boomform'
import { getTotalPrice } from './Helpers/payment'

const StateHandler = ({
  onStateChange,
  formRef,
  setCurrentPage,
  currentPage,
  payment,
  fields
}) => {
  const { state, actions } = useContext(Context)
  const { values } = state
  const { fee, type } = payment

  onStateChange({ state, actions, formRef, setCurrentPage, currentPage })
  console.log(getTotalPrice({ values, fields, fee, type }))
  return null
}

export default StateHandler
