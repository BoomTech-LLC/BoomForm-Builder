import { Context } from 'boomform'
import React, { useContext, useEffect } from 'react'
import { formValueCheker } from '../../Helpers/logic'
import { formatPrice, getTotalPrice } from './../../Helpers/payment'
import Print from './../../Print/Print'
import Reset from '../../Reset/Reset'

const SubmitButton = ({
  global,
  button,
  fields,
  hide,
  formRef,
  payment,
  logic,
  logicIds,
  pagination,
  setCurrentPage,
  formId,
  onStorageButtonClick,
  onLocalStorageSubmitFormDataChange
}) => {
  const { state, actions } = useContext(Context)
  const { values } = state
  const { text, prefix, suffix } = button || { text: 'Submit' }
  const { name, description, isPrint, onSubmit, onSubmitFailed, resetButton = {}} = global
  const { content , enabled, onReset} = resetButton
  const { fee, total, setTotal, getTotalValue } = payment

  const formatedTotal = formatPrice({ payment, price: total })

  useEffect(() => {
    setTotal &&
      setTotal(getTotalPrice({ values, fields, fee, logic, getTotalValue }))
  }, [state, total])

  if (hide) return null

  const handleClick = (e) => {
    e.preventDefault()
    if (formRef.current.checkValidity()) {
      const reddirectPage = formValueCheker({ fields, logicIds, pagination })
      if (reddirectPage) {
        setCurrentPage(+reddirectPage)
        setTimeout(() => {
          formRef.current.reportValidity()
        }, 30)
        return
      }
      if (onSubmit) onSubmit({ state, actions })
      else console.log({ state, actions })
    } else {
      formRef.current.reportValidity()
      if (onSubmitFailed)
        onSubmitFailed(state, formRef.current.querySelectorAll(':invalid'))
    }
    if (global.storeProgress?.submitProgress?.enabled && formId) {
      onLocalStorageSubmitFormDataChange(state.values)
      onStorageButtonClick('active')
    }
  }

  return (
    <div className={'boomForm-button__content'}>
      {suffix}
      <button onClick={handleClick}>
        <span>
          {text}
          {payment.showTotal ? formatedTotal : null}
        </span>
      </button>
      {prefix}
      {enabled && (
        <Reset text={content} onReset={onReset} reset={actions.handleReset}/>
      )}
      {isPrint && (
        <Print fields={fields} name={name} description={description} />
      )}
    </div>
  )
}

export default SubmitButton
