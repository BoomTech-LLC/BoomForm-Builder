import React, { memo, Fragment } from 'react'
import Field from './Field'
import { getHiddenIds } from './../Helpers/logic'

const Fields = ({
  fields, payment, printableFields , gridOptions
}) => {
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
              <PageItems
                fields={fields}
                pageFields={pageFields}
                payment={payment}
              />
            </GridLayout>
          ) : (
            <PageItems
              fields={fields}
              pageFields={pageFields}
              payment={payment}
            />
          )}
        </div>
      )
      })}
    </>
  )
}

export default memo(Fields)
