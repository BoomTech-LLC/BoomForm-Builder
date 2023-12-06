import React, { memo, Fragment } from 'react'
import GridLayout from 'react-grid-layout'
import Field from './Field'
import 'react-grid-layout/css/styles.css'

const generatePageItems = (fields, pageFields, payment) => {
  return fields
    .filter((field) => pageFields.includes(field.id))
    .map((field) => {
      const { preFix, postFix } = field
      return (
        <div class='boomForm_field' key={field.id}>
          {preFix && (
            <span
              dangerouslySetInnerHTML={{
                __html: preFix
              }}
            />
          )}
          <Field key={field.id} payment={payment} {...field} />
          {postFix && (
            <span
              dangerouslySetInnerHTML={{
                __html: postFix
              }}
            />
          )}
        </div>
      )
    })
}

const Fields = ({ fields, payment, printableFields, gridOptions }) => {
  const {
    layout = [],
    isBounded = false,
    isDraggable = false,
    isResizable = false,
    margin = [0, 0],
    containerPadding = [0, 0],
    rowHeight = 1,
    width = 800,
    cols = 4
  } = gridOptions
  return (
    <>
      {printableFields.map((pageFields, index) => {
        const layout_ = [] // layout for grid layout
        if (gridOptions && gridOptions.layout) {
          //this loop needed for passing only rendering fields layouts
          pageFields.forEach((id) => {
            layout_.push({ i: `${id}`, ...layout[id] })
          })
        }
        return (
          <div key={'page' + index} className='boomForm-fields'>
            {gridOptions && gridOptions.layout ? (
              <GridLayout
                className='grid-layout'
                isDroppable={false}
                cols={cols}
                margin={margin}
                containerPadding={containerPadding}
                rowHeight={rowHeight}
                width={width}
                isBounded={isBounded}
                isDraggable={isDraggable}
                isResizable={isResizable}
                layout={layout_}
              >
                {generatePageItems(fields, pageFields, payment)} 
              </GridLayout>
            ) : (
              <>{generatePageItems(fields, pageFields, payment)}</>
            )}
          </div>
        )
      })}
    </>
  )
}

export default memo(Fields)
