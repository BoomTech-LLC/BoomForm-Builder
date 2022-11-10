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
  logic
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
    const fileIds = []
    fields.map((field) => {
      if (field.type === 'file') {
        fileIds.push(field.id)
      }
    })

    for (let i in fileIds) {
      if (values[fileIds] && !values[fileIds][i]['responce']) {
        return false
      }
    }

    return true
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (canSubmit()) {
      if (formRef.current.checkValidity()) {
        if (onSubmit) onSubmit({ state, actions })
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
