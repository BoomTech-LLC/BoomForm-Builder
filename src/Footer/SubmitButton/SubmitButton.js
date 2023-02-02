import React, { useContext, useState, useEffect } from 'react'
import { Context } from 'boomform'
import Print from './../../Print/Print'
import { getTotalPrice, formatPrice } from './../../Helpers/payment'

const SubmitButton = ({
  global,
  button,
  fields,
  hide,
  formRef,
  payment,
  logic,
  setIsSubmited,
}) => {
  const { state, actions } = useContext(Context)
  const { values } = state

  const { text, prefix, suffix } = button || { text: 'Submit' }
  const { name, description, isPrint, onSubmit, onSubmitFailed } = global
  const { fee, total, setTotal } = payment

  const formatedTotal = formatPrice({ payment, price: total })

  useEffect(() => {
    setTotal && setTotal(getTotalPrice({ values, fields, fee, logic }))
  }, [state,total])

  if (hide) return null

  const canSubmit = () => {
    
    for (let i = 0; i < fields.length; i++){
      if (fields[i].type === 'file') {
        const filesArray = values[fields[i].id];  
        if (filesArray) {
          for (let j = 0; j < filesArray.length; j++){
            let { percentage } = filesArray[j];
            if (percentage < 100 && !filesArray[j]['responce']) {  
              return false
            } 
          }
        }
    
      }
    }
    return true
  }

  const handleClick = (e) => {
    if (canSubmit()) {
      if (formRef.current.checkValidity()) {
        e.preventDefault()
        if (onSubmit) {
          onSubmit({ state, actions })
          setIsSubmited(prev => !prev)
        }
        else console.log({ state, actions })
      } else {
        formRef.current.reportValidity()
        if (onSubmitFailed)
          onSubmitFailed(state, formRef.current.querySelectorAll(':invalid'))
      }
    }
  }

  return (
    <div className={'boomForm-button__content'}>
      {suffix}
      <button disabled={!canSubmit()} onClick={handleClick}>
        <span>
          {text}
          {formatedTotal}
        </span>
      </button>
      {prefix}
      {isPrint && (
        <Print fields={fields} name={name} description={description} />
      )}
    </div>
  )
}

export default SubmitButton
