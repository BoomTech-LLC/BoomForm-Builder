import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription'
      }}
      fields={[
        {
          type: 'file',
          id: 6,
          isMultiple: true,
          inputContent: '',
          dropbox: {
            url: 'https://content.dropboxapi.com/2/files/upload',
            headers: {
              Authorization:
                'Bearer 5JAlpA6y8pkAAAAAAAAAASKLV2Ru50qVzsutFVd6BsySpra13BlNktt_XJVxwnfV',
              'Content-Type': 'application/octet-stream'
            },
            dropboxAPIArg: {
              path: '/temp',
              mode: 'add',
              autorename: true,
              mute: false
            }
          },
          label: 'Upload Your File',
          validation: { HTMLValidate: true }
        },
        {
          type: 'phone',
          id: 7,
          defaultCountryCode: 'AM',
          placeholder: '',
          label: 'Phone',
          validation: { HTMLValidate: true }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
