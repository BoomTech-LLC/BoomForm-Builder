import React from 'react'
import { Custom } from 'boomform'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { modules, formats } from './../../../Helpers/textarea'

const RichTextEditor = (props) => {
  const { id, placeholder } = props
  return (
    <Custom id={id} {...props}>
      {({ handleChange, handleBlur, value }) => {
        return (
          <div
            onBlur={() => {
              handleBlur({
                id,
                value,
                e: null,
                field: props
              })
            }}
          >
            <ReactQuill
              placeholder={placeholder}
              theme='snow'
              onChange={(content) => {
                if (content === '<p><br></p>') content = ''
                handleChange({
                  id,
                  value: content,
                  e: content,
                  field: props
                })
              }}
              value={value}
              modules={modules}
              formats={formats}
            />
          </div>
        )
      }}
    </Custom>
  )
}

export default RichTextEditor
