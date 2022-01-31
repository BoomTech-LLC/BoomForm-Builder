import React, { useContext } from 'react'
import { Context } from 'boomform'

const StateHandler = ({ innerComponent, setCurrentPage }) => {
  const { state, actions } = useContext(Context)
  innerComponent(state, actions, setCurrentPage)

  return null
}

export default StateHandler
