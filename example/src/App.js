import React from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription',
        isPrint: true
      }}
      fields={[
        {
          id: 1,
          type: 'map',
          markers: [
            {
              id: 1,
              description: 'Dream City',
              position: { lat: -22.908333, lng: -43.196388 }
            }
          ],
          lat: -21.8926266,
          lng: -41.3909684,
          zoom: 4
        }
      ]}

      button={{
        text: 'submit'
      }}
      // gridOptions={{
      //   cols: 4,
      //   width: 800,
      //   rowHeight: 1,
      //   margin: [0, 0],
      //   isBounded: false,
      //   isDraggable: false,
      //   isResizable: false,
      //   containerPadding: [0, 0],
      //   layout: {
      //     1: {
      //       h: 119,
      //       maxH: 119,
      //       maxW: 4,
      //       minH: 119,
      //       minW: 1,
      //       w: 2,
      //       x: 0,
      //       y: 0
      //     },
      //     2: {
      //       h: 119,
      //       maxH: 119,
      //       maxW: 4,
      //       minH: 119,
      //       minW: 1,
      //       w: 2,
      //       x: 2,
      //       y: 0
      //     },
      //     3: {
      //       h: 269,
      //       maxH: 269,
      //       maxW: 4,
      //       minH: 269,
      //       minW: 2,
      //       w: 2,
      //       x: 1,
      //       y: 119
      //     },
      //     4: {
      //       h: 119,
      //       maxH: 119,
      //       maxW: 4,
      //       minH: 119,
      //       minW: 1,
      //       w: 4,
      //       x: 0,
      //       y: 507
      //     }
      //   }
      // }}
      // pagination={{
      //   buttons: { type: 0, next: 'Next', prev: 'Prev' },
      //   initial: 0,
      //   mode: 'section',
      //   pages: [
      //     {
      //       title: 'Page 1',
      //       description: '',
      //       fields: [1, 2]
      //     },
      //     {
      //       title: 'Page 2',
      //       description: '',
      //       fields: [3, 4]
      //     }
      //   ]
      // }}
    />
  )
}

export default App
