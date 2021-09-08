import React, { useContext } from 'react'
import { Context } from 'boomform'

const StateHandler = ({ innerComponent }) => {
  const { state, actions } = useContext(Context)
  innerComponent(state, actions)

  return null
}

export default StateHandler
