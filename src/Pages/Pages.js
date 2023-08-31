import React, { useRef } from 'react'
import { useField } from 'boomform'
import Field from '../Body/Field'
import SubmitButton from '../Footer/SubmitButton/SubmitButton'
import { getPrintableData } from './Helpers/sectionLogic'
import { getHiddenIds } from '../Helpers/logic'

function Pages({ global, button, payment, pagination, logic, layout, fields }) {
  const formRef = useRef(null)
  const updatableFields = []
  const data = useField(updatableFields)

  if (logic.length !== 0) {
    for (let i = 0; i < logic.length; i++)
      for (let j = 0; j < logic[i].conditions.length; j++)
        logic[i].conditions[j].item
          ? updatableFields.push(
              `${logic[i].conditions[j].id}.${logic[i].conditions[j].item}`
            )
          : updatableFields.push(logic[i].conditions[j].id)
  }
  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields
  })

  const rendableData = getPrintableData(fields, logicIds, pagination)

  return (
    <form ref={formRef}>
      {Object.keys(rendableData).map((pageId, index) => {
        const page = rendableData[pageId]
        const fieldsInPage = fields.filter((field) =>
          page.printableFields.includes(field.id)
        )
        return (
          <div key={page.title + index}>
            <h1> {page.title} </h1>
            {fieldsInPage.map((field) => {
              return <Field key={field.id} payment={payment} {...field} />
            })}
          </div>
        )
      })}
      <SubmitButton button={button} fields={fields} formRef={formRef} global={global} hide={false} logic={logic} payment={payment}  />
    </form>
  )
}

export default Pages
