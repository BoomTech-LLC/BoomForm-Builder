import React, { useState } from 'react'
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
      fields={
        [
          {
            "type": "textarea",
            "id": 3,
            "height": "60px",
            "placeholder": "Your Comments",
            "label": "Your Comments",
            "validation": {
              "HTMLValidate": true,
              "min": {
                "msg": "Please enter a value between {0} and {1}.",
                "value": null,
                "type": "length"
              },
              "max": {
                "msg": "Please enter a value between {0} and {1}.",
                "value": null,
                "type": "length"
              }
            }
          },
          {
            "type": "file",
            "id": 10,
            "isMultiple": true,
            "inputContent": "",
            "dropbox": {
              "url": "https://content.dropboxapi.com/2/files/upload",
              "headers": {
                "Authorization": "Bearer sl.BZSE1wTMffOJ8figsFKxeOs14HlKEerSaLCuk5OpM9Ff902jtnbIKT3B4p7wN6NpR26F34NvuI7d47dORlr6hbEL7AuG80VwPbs259Swv5oX5ImNwNVhcMKNKbypnYZVqAM3Zi8",
                "Content-Type": "application/octet-stream"
              },
              "dropboxAPIArg": {
                "path": "/xyz",
                "mode": "add",
                "autorename": true,
                "mute": false,
                "property_groups": [
                  {
                      "template_id": "ptid:rl6MB-XmPBkAAAAAACBnbA",
                      "fields": [
                          {
                              "name": "temp",
                              "value": "temp"
                          }
                      ]
                  }
                ]
              }
            },
            "label": "Upload Your File 2222",
            "validation": {
              "HTMLValidate": true
            }
          },
          {
            "type": "textarea",
            "id": 55,
            "height": "600px",
            "placeholder": "Your Comments",
            "label": "Your Comments",
            "validation": {
              "HTMLValidate": true,
              "min": {
                "msg": "Please enter a value between {0} and {1}.",
                "value": null,
                "type": "length"
              },
              "max": {
                "msg": "Please enter a value between {0} and {1}.",
                "value": null,
                "type": "length"
              }
            }
          },
        ]
      }
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
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
