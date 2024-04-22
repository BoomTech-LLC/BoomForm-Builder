import { useEffect, useMemo, useRef, useState } from 'react'

const useGrid = ({ gridOptions, printableFields }) => {
  const gridProperties = useRef({
    layout: {},
    isBounded: false,
    isDraggable: false,
    isResizable: false,
    margin: [0, 0],
    containerPadding: [0, 0],
    rowHeight: 1,
    width: 800,
    cols: 4,
    ...gridOptions
  })

  const [gridEnabled, setGridEnabled] = useState(false)

  useEffect(() => {
    if (gridOptions && gridOptions.layout) {
      setGridEnabled(true)
    }
  }, [gridOptions])

  const onHeightChange = (id, newHeight) => {
    if (!newHeight || !id) return
    const height = newHeight + 16

    if (
      gridOptions.layout &&
      gridOptions.layout[id] &&
      gridOptions.layout[id].h !== height
    ) {
      const updatedLayout = {
        ...gridProperties.current.layout,
        [id]: {
          ...gridOptions.layout[id],
          i: `${id}`,
          h: height,
          minH: height,
          maxH: height
        }
      }
      gridProperties.current = {
        ...gridProperties.current,
        layout: updatedLayout
      }
    }
  }

  const layout = useMemo(() => {
    const data = {}
    if (printableFields) {
      printableFields.forEach((pageFields, index) => {
        data[index] = pageFields.map(id => ({
          i: `${id}`,
          ...gridProperties.current.layout[id]
        }))
      })
    }
    return data
  }, [printableFields, gridProperties.current])

  return {
    gridEnabled,
    gridProperties: gridProperties.current,
    layout,
    onHeightChange
  }
}

export default useGrid
