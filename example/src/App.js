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
              type: 'text',
              id: 1,
              placeholder: 'Single Line',
              label: 'Single Line Field',
            },
            {
              type: 'text',
              id: 2,
              placeholder: 'Single Line',
              label: 'Single Line Field',
            },
            {
              type: 'textarea',
              id: 3,
              placeholder: 'Enter your long text',
              label: 'Multi line field',
            },
            {
              type: 'textarea',
              id: 4,
              placeholder: 'Your Comments',
              label: 'Left a comment',
            }
          ]}
          button={{
            text: 'submit'
          }}
          // gridOptions={
          //   {
          //    cols: 4,
          //    width: 800,
          //    rowHeight: 1,
          //    margin: [0, 0],
          //    isBounded: false,
          //    isDraggable: false,
          //    isResizable: false,
          //    containerPadding: [0, 0],
          //    layout: {
          //        1: {
          //          h: 119,
          //          maxH: 119,
          //          maxW: 4,
          //          minH: 119,
          //          minW: 1,
          //          w: 2,
          //          x: 0,
          //          y: 0
          //        },
          //        2: {
          //          h: 119,
          //          maxH: 119,
          //          maxW: 4,
          //          minH: 119,
          //          minW: 1,
          //          w: 2,
          //          x: 2,
          //          y: 0
          //        },
          //        3: {
          //          h: 110,
          //          maxH: 110,
          //          maxW: 4,
          //          minH: 110,
          //          minW: 2,
          //          w: 4,
          //          x: 0,
          //          y: 238
          //        },
          //        4: {
          //          h: 119,
          //          maxH: 119,
          //          maxW: 4,
          //          minH: 119,
          //          minW: 1,
          //          w: 3,
          //          x: 0,
          //          y: 0
          //        }
          //      }
          //   }
          // }
        />
    )
}
        
export default App