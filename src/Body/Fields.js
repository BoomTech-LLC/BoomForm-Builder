import React, { memo, Fragment } from 'react'
import GridLayout from 'react-grid-layout'
import classNames from 'classnames/bind'
import useGrid from '../hooks/useGrid'
import Field from './Field'
import SubmitButton from '../Footer/SubmitButton/SubmitButton'

import 'react-grid-layout/css/styles.css'

const generatePageItems = (
  fields,
  pageFields,
  payment,
  gridEnabled,
  onHeightChange,
  customClassName
) => {
  return fields
    .filter(field => pageFields.includes(field.id))
    .map(field => {
      const { prefix, postfix, classnameprefix, id } = field
      return (
        <div
          id={`field-${id}`}
          className={classNames('boomForm_field', {
            [classnameprefix &&
            classnameprefix.map(value => `${value}-field__content`).join(' ')]:
              classnameprefix && classnameprefix.length
          })}
          key={field.id}
        >
          {prefix && (
            <span
              dangerouslySetInnerHTML={{
                __html: prefix
              }}
            />
          )}
          <Field
            key={field.id}
            payment={payment}
            listenHeightChange={gridEnabled}
            onHeightChange={onHeightChange}
            customClassName={customClassName}
            {...field}
          />
          {postfix && (
            <span
              dangerouslySetInnerHTML={{
                __html: postfix
              }}
            />
          )}
        </div>
      )
    })
}

const Fields = ({
  fields,
  payment,
  printableFields,
  gridOptions,
  pagination,
  global,
  button,
  formRef,
  logic,
  logicIds,
  setCurrentPage,
  formId,
  isShowSubmitButton,
  onStorageButtonClick,
  onLocalStorageSubmitFormDataChange,
  customClassName
}) => {
  const { gridEnabled, gridProperties, layout, onHeightChange } = useGrid({
    gridOptions,
    printableFields
  })

  return (
    <>
      {printableFields.map((pageFields, index) => {
        let showButton = isShowSubmitButton
        if (
          isShowSubmitButton &&
          pagination &&
          pagination?.mode === 'section'
        ) {
          showButton = printableFields.length - 1 === index
        }
        const layout_ = layout[index]
        return (
          <div key={'page' + index} className='boomForm-fields'>
            {gridEnabled ? (
              <>
                <GridLayout
                  className='grid-layout'
                  {...gridProperties}
                  layout={layout_}
                >
                  {generatePageItems(
                    fields,
                    pageFields,
                    payment,
                    gridEnabled,
                    onHeightChange,
                    customClassName
                  )}
                </GridLayout>
                {showButton && (
                  <SubmitButton
                    global={global}
                    button={button}
                    fields={fields}
                    formRef={formRef}
                    payment={payment}
                    logic={logic}
                    logicIds={logicIds}
                    pagination={pagination}
                    setCurrentPage={setCurrentPage}
                    formId={formId}
                    onStorageButtonClick={onStorageButtonClick}
                    onLocalStorageSubmitFormDataChange={
                      onLocalStorageSubmitFormDataChange
                    }
                  />
                )}
              </>
            ) : (
              <>
                {generatePageItems(fields, pageFields, payment)}
                {showButton && (
                  <SubmitButton
                    global={global}
                    button={button}
                    fields={fields}
                    formRef={formRef}
                    payment={payment}
                    logic={logic}
                    logicIds={logicIds}
                    pagination={pagination}
                    setCurrentPage={setCurrentPage}
                    formId={formId}
                    onStorageButtonClick={onStorageButtonClick}
                    onLocalStorageSubmitFormDataChange={
                      onLocalStorageSubmitFormDataChange
                    }
                  />
                )}
              </>
            )}
          </div>
        )
      })}
    </>
  )
}

export default memo(Fields)
