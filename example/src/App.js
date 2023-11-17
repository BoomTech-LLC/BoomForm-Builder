import React from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  // const singleField = {
  //   buttons: { type: 0, next: 'Next', prev: 'Prev' },
  //   initial: 0,
  //   pagesCounter: true,
  //   pages: [
  //     { title: '', description: '', fields: ['storeButton', 'text'] },
  //     { title: '', description: '', fields: ['storeButton', 'password'] },
  //     { title: '', description: '', fields: ['storeButton', 'date'] },
  //     { title: '', description: '', fields: ['storeButton', 'email'] }
  //   ]
  // }

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
          type: 'text',
          label: 'Single line1'
        },
        {
          id: 2,
          type: 'text',
          label: 'Single line1'
        },
        {
          id: 3,
          type: 'textarea',
          label: 'Multi Line1'
        },

        {
          id: 4,
          type: 'textarea',
          label: 'Multi Line2'
        },
        {
          id: 5,
          type: 'textarea',
          label: 'Multi Line2'
        },
        {
          id: 6,
          type: 'text',
          label: 'Single line2'
        },
        {
          id: 7,
          type: 'date',
          label: 'Single line2'
        },
        {
          id: 9,
          type: 'text',
          label: 'Single line3'
        },
        ,
        {
          id: 10,
          type: 'text',
          label: 'Single line4'
        }
      ]}
      logic={[
        {
          id: 2,
          action: 'hide_page',
          conditions: [{ id: 1, rule: 'is', value: 'Pashik' }]
        },
        {
          id: 9,
          action: 'hide',
          conditions: [{ id: 2, rule: 'is', value: 'John' }]
        },

        {
          id: 1,
          action: 'hide_page',
          conditions: [{ id: 5, rule: 'is', value: 'John' }]
        },

        {
          id: 10,
          action: 'hide',
          conditions: [{ id: 5, rule: 'is', value: 'John' }]
        }
        // {
        //   id: 1,
        //   action: 'callback',
        //   handler: () => {
        //     console.log('Write your code here')
        //   },
        //   conditions: [{ id: 6, rule: 'is', value: 'John' }]
        // }
      ]}
      // logic={[
      //   {
      //     id: 'date',
      //     action: 'show',
      //     operator: 'and',
      //     conditions: [
      //       {
      //         id: 'password',
      //         value: 'a',
      //         rule: 'is'
      //       }
      //     ]
      //   }
      // ]}
      // pagination={{
      //   buttons: { type: 0, next: "Next", prev: "Prev" },
      //   initial: 0,
      //   pages: [{
      //     title: 'Page 1',
      //     description: "",
      //     fields:['storeButton','text','signature','password']
      //   }, {
      //     title: 'Page 2',
      //     description: "",
      //     fields:['storeButton','phone','name']
      //     },
      //     {
      //       title: 'Page 3',
      //       description: "",
      //       fields:['storeButton','phone','password']
      //     }
      //   ],
      //   timeline:1,
      // }}
      // pagination={singleField}
      pagination={{
        buttons: { type: 0 },
        mode: 'section',
        pageCounter: true,
        pages: [
          {
            title: 'Page 1',
            id: 1,
            fields: [1, 2, 3, 7]
          },
          {
            id: 2,
            title: 'Page 2',
            fields: [4, 5, 6]
          },
          {
            id: 3,
            title: 'Page 3',
            fields: [9]
          },
          {
            id: 4,
            title: 'Page 4',
            fields: [10]
          }
        ]
      }}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
