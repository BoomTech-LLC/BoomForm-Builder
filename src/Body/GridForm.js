import React from 'react'
import GridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import Field from './Field'

const GridForm = ({
  fields,
  setCurrentPage,
  payment,
  pages,
  currentPage,
  gridOptions,
  printableFields,
  prevCurrent,
  onPageChange
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
        const layout_ = []
        pageFields.forEach((id) => {
          layout_.push({ i: `${id}`, ...layout[id] })
        })
        if (pageFields.length === 0 && pages.length - 1 > currentPage) {
          if (prevCurrent.current < currentPage) {
            setCurrentPage((prev) => prev + 1)
            prevCurrent.current = currentPage
          } else {
            setCurrentPage((prev) => prev - 1)
            prevCurrent.current = prevCurrent.current - 1
          }

          if (onPageChange) onPageChange()
        }

        return (
          <div key={'page' + index} className='boomForm-fields'>
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
              {fields.map((field) => {
                if (!pageFields.includes(field.id)) return null
                return (
                  <div key={field.id}>
                    <Field key={field.id} payment={payment} {...field} />
                  </div>
                )
              })}
            </GridLayout>
          </div>
        )
      })}
    </>
  )
}

export default GridForm
