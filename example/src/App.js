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
        // {
        //   type: 'url',
        //   id: 1,
        //   placeholder: 'Single Line',
        //   label: 'Single Line'
        // },
        // {
        //   type: 'text',
        //   id: 2,
        //   placeholder: 'Single Line',
        //   label: 'Single Line'
        // },
        // {
        //   type: 'textarea',
        //   id: 3,
        //   placeholder: 'Enter your long text',
        //   label: 'Multi Line'
        // },
        {
          type: 'starRating',
          id: 4,
          placeholder: 'Your Comments',
          count: 25,
          initial: 5.5,
          // shape: 'circle',
          label: 'Multi Line',
          validation: {}
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
