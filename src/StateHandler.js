import React, { useContext } from 'react'
import { Context } from 'boomform'

const StateHandler = ({ innerComponent, onFirstPageOpen = null }) => {
  const { state, actions } = useContext(Context)

  innerComponent(state, actions, onFirstPageOpen)

  return null
}

export default StateHandler
