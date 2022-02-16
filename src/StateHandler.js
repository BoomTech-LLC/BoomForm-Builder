import React, { useContext } from 'react'
import { Context } from 'boomform'

const StateHandler = ({
  onStateChange,
  formRef,
  setCurrentPage,
  currentPage
}) => {
  const { state, actions } = useContext(Context)

  onStateChange({ state, actions, formRef, setCurrentPage, currentPage })
  return null
}

export default StateHandler
