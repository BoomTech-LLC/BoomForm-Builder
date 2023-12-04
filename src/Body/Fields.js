import React, { memo, useEffect, useRef, Fragment } from 'react'
import { useField } from 'boomform'
import Field from './Field'
import { getRendableData } from './../Helpers/global'
import { getHiddenIds } from './../Helpers/logic'
import GridLayout from "react-grid-layout";
import PageItems from './PageItems'
import "react-grid-layout/css/styles.css";

const Fields = ({
  fields,
  logic,
  pagination,
  setCurrentPage,
  updatableFields,
  payment,
  global,
  pages,
  currentPage,
  formRef,
  gridOptions
}) => {
  const prevCurrent = useRef(currentPage)
  const data = useField(updatableFields)
  const { onPageChange } = global

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

  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields
  })

  const printableFields = getRendableData(
    fields,
    logicIds,
    pagination,
    currentPage
  )

  useEffect(() => {
    const submitHandler = (e) => {
      if (printableFields.length === 1 && currentPage < pages.length - 1) {
        e.preventDefault()
        if (pages.length - 1 > currentPage) {
          setCurrentPage((prev) => prev + 1)
        }
      }
    }
    formRef?.current.addEventListener('submit', submitHandler)
    return () => {
      formRef?.current.removeEventListener('submit', submitHandler)
    }
  }, [])

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
