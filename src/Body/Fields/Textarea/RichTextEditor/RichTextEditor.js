import React, { useRef } from 'react'
import { Custom, Input } from 'boomform'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { formats, modules } from './../../../../Helpers/textarea'

const RichTextEditor = (props) => {
  const { id, placeholder, validation, editorFormats, editorModules } = props

  const validationField = useRef()

  return (
    <Custom id={id} {...props}>
      {({ handleChange, handleBlur, value }) => {
        return (
          <React.Fragment>
            <div
              onBlur={(e) => {
                if (validation.HTMLValidate === true) {
                  const validationInput = validationField.current.firstChild
                  validationInput.focus()
                  validationInput.blur()
                }

                handleBlur({ id })
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
                modules={editorModules || modules}
                formats={editorFormats || formats}
              />
            </div>
            {validation.HTMLValidate === true && (
              <div
                ref={validationField}
                style={{
                  overflow: 'hidden',
                  height: '0',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Input maxLength='0' {...props} type='text' />
              </div>
            )}
          </React.Fragment>
        )
      }}
    </Custom>
  )
}

export default RichTextEditor
