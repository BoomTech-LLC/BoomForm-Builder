import React, { useEffect, useRef, useState } from 'react'
import { Builder } from 'boomform-builder'
import defaultOptions from './options'
import Editor from '@monaco-editor/react'
import './index.css'

function Content({ example }) {
  const { name, option } = example
  const outputRef = useRef(null)
  const [options, setOptions] = useState(defaultOptions[option])

  function handleSave() {
    try {
      const parsData = JSON.parse(outputRef.current)
      setOptions(parsData)
    } catch (e) {
      alert(`There is an error in JSON :) `)
    }
  }

  useEffect(() => {
    setOptions(defaultOptions[option])
    // eslint-disable-next-line
  }, [example.name])

  return (
    <div className='content'>
      <h1>{name}</h1>
      <div className='editorAndPreview'>
        <div className='editor'>
          <div>
            <button onClick={handleSave}> Save </button>
          </div>
          <Editor
            height={'800px'}
            width={'500px'}
            defaultLanguage='json'
            value={JSON.stringify(options, null, 3)}
            onChange={(value) => {
              outputRef.current = value
            }}
            theme='vs-dark'
          />
          ;
        </div>
        <div className='preview'>
          <Builder
            global={{
              name: name
            }}
            button={{
              text: 'Submit'
            }}
            {...options}
          />
        </div>
      </div>
    </div>
  )
}
export default Content
