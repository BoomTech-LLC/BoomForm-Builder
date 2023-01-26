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
      fields={[{"type":"textarea","id":3,"height":"60px","placeholder":"Your Comments","label":"Your Comments","validation":{"HTMLValidate":true,"min":{"msg":"Please enter a value between {0} and {1}.","value":null,"type":"length"},"max":{"msg":"Please enter a value between {0} and {1}.","value":null,"type":"length"}}},{"type":"file","id":6,"isMultiple":true,"inputContent":"","dropbox":{"url":"https://content.dropboxapi.com/2/files/upload","headers":{"Authorization":"Bearer 5JAlpA6y8pkAAAAAAAAAASKLV2Ru50qVzsutFVd6BsySpra13BlNktt_XJVxwnfV","Content-Type":"application/octet-stream"},"dropboxAPIArg":{"path":"/temp","mode":"add","autorename":true,"mute":false}},"label":"Upload Your File 1111","validation":{"HTMLValidate":true}},{"type":"file","id":10,"isMultiple":true,"inputContent":"","dropbox":{"url":"https://content.dropboxapi.com/2/files/upload","headers":{"Authorization":"Bearer 5JAlpA6y8pkAAAAAAAAAASKLV2Ru50qVzsutFVd6BsySpra13BlNktt_XJVxwnfV","Content-Type":"application/octet-stream"},"dropboxAPIArg":{"path":"/temp","mode":"add","autorename":true,"mute":false}},"label":"Upload Your File 2222","validation":{"HTMLValidate":true}}]}
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
