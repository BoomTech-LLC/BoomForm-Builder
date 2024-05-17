import React, { useEffect, useRef, useState } from 'react'
import { storeProgresSubmitStore } from '../Helpers/storeProgres'

const isLocalStorageSupported = () => {
  const testKey = '__test__'

  try {
    localStorage.setItem(testKey, testKey)
    localStorage.removeItem(testKey)
    return true
  } catch (e) {
    return false
  }
}

export const useProgress = ({ id, storeProgress, fields }) => {
  const progressData = useRef({})
  const submitData = useRef({})
  const [statusState, setStatusState] = useState({})
  const [buttonState, setButtonState] = useState()
  const [instructionsState, setInstructionsState] = useState()
  const isSupported = useRef(false)

  useEffect(() => {
    isSupported.current = isLocalStorageSupported()

    if (isSupported.current) {
      try {
        const storedProgress = localStorage.getItem(`form-${id}`)
        const submitProgress = localStorage.getItem(`submit-${id}`)
        const status = localStorage.getItem(`status-${id}`)

        const parsedStoreProgress = JSON.parse(storedProgress)
        const parsedSubmitProgress = JSON.parse(submitProgress)

        setStatusState(status)
        progressData.current = parsedStoreProgress
        submitData.current = parsedSubmitProgress
        if (
          storeProgress?.storeProgress?.enabled &&
          storeProgress?.submitProgress?.enabled
        ) {
          if (submitProgress) {
            storeProgresSubmitStore({
              fields,
              localStorageFormData: parsedSubmitProgress,
              localStorageStatus: statusState
            })

            if (statusState === 'active' || statusState === 'loaded') {
              setButtonState(
                storeProgress?.submitProgress?.resetButton?.HTML || (
                  <span>Reset</span>
                )
              )
            } else if (statusState === 'reseted') {
              setButtonState(
                storeProgress?.submitProgress?.loadButton?.HTML || (
                  <span>Load</span>
                )
              )
            } else {
              setButtonState(null)
            }

            if (statusState === 'reseted') {
              setInstructionsState(
                storeProgress?.submitProgress?.loadButton?.instruction
              )
            } else if (statusState === 'loaded') {
              setInstructionsState(
                storeProgress?.submitProgress?.resetButton?.instruction
              )
            }
          } else if (storeProgress) {
            storeProgresSubmitStore({
              fields,
              localStorageFormData: parsedStoreProgress,
              localStorageStatus: statusState
            })
          }
        } else if (storeProgress?.submitProgress?.enabled) {
          storeProgresSubmitStore({
            fields,
            localStorageFormData: parsedSubmitProgress,
            localStorageStatus: statusState
          })

          if (statusState === 'active' || statusState === 'loaded') {
            setButtonState(
              storeProgress?.submitProgress?.resetButton?.HTML || (
                <span>Reset</span>
              )
            )
          } else if (statusState === 'reseted') {
            setButtonState(
              storeProgress?.submitProgress?.loadButton?.HTML || (
                <span>Load</span>
              )
            )
          } else {
            setButtonState(null)
          }

          if (statusState === 'reseted') {
            setInstructionsState(
              storeProgress?.submitProgress?.loadButton?.instruction
            )
          } else if (statusState === 'loaded') {
            setInstructionsState(
              storeProgress?.submitProgress?.resetButton?.instruction
            )
          }
        } else if (storeProgress?.storeProgress?.enabled) {
          storeProgresSubmitStore({
            fields,
            localStorageFormData: parsedStoreProgress,
            localStorageStatus: statusState
          })
        }
      } catch (e) {
        console.error('Store progress error', e)
      }
    }
  }, [statusState, storeProgress])

  const onProgressChange = value => {
    if (
      storeProgress?.storeProgress?.enabled &&
      id &&
      isSupported.current &&
      value
    ) {
      localStorage.setItem(`form-${id}`, JSON.stringify(value))
    }
  }

  const onSubmitChange = value => {
    if (
      storeProgress?.submitProgress?.enabled &&
      id &&
      isSupported.current &&
      value
    ) {
      localStorage.setItem(`submit-${id}`, JSON.stringify(value))
    }
  }

  const onStatusChange = status => {
    if (
      storeProgress?.submitProgress?.enabled &&
      id &&
      isSupported.current &&
      status
    ) {
      localStorage.setItem(`status-${id}`, status)
      setStatusState(status)
    }
  }

  return {
    progressData: progressData.current,
    submitData: submitData.current,
    status: statusState,
    localStorageButton: buttonState,
    instructionsState,
    onProgressChange,
    onSubmitChange,
    onStatusChange
  }
}
