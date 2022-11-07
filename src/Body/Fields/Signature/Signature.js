import React, { useState, useEffect, useCallback, useContext, Fragment } from 'react'
import { Context } from 'boomform'
import SignatureCanvas from 'react-signature-canvas'
import { Custom, Input } from 'boomform'

const Signature = (props) => {
  const { id, initial, validation } = props

  const [sigPadRef, setSigPadRef] = useState(null)
  const { state } = useContext(Context);

  useEffect(() => {
    if (initial && sigPadRef) sigPadRef.fromData(initial.data)
    if (state.values[id] === null) {
      sigPadRef?.clear()
    }
  }, [initial, sigPadRef,state.values[id]])

  const onRefSet = useCallback((ref) => {
    setSigPadRef(ref)
  })

  const handleTrim = (handleChange) => {
    const url = sigPadRef.getTrimmedCanvas().toDataURL('image/png')
    const data = sigPadRef.toData()
    handleChange({
      id,
      value: { url, data },
      e: sigPadRef,
      field: { id, initial, ...props }
    })
  }

  const handleClear = (handleChange) => {
    handleChange({
      id,
      value: null,
      e: sigPadRef,
      field: { id, initial, ...props }
    })
    sigPadRef.clear()
  }

  const handleOnBlur = (handleBlur) => {
    const url = sigPadRef.getTrimmedCanvas().toDataURL('image/png')
    const data = sigPadRef.toData()
    handleBlur({
      id,
      value: { url, data },
      e: null,
      field: props
    })
  }

  return (
    <Custom id={id} {...props}>
      {({ handleChange, handleBlur }) => {
        return (
          <div onClick={() => handleOnBlur(handleBlur)}>
            <SignatureCanvas
              ref={onRefSet}
              penColor='#000'
              canvasProps={{
                height: '200px',
                className: 'signatureCanvas'
              }}
              onEnd={() => handleTrim(handleChange)}
              clearOnResize={false}
            />
            <div
              className={'boomForm-signatureButton'}
              onClick={() => handleClear(handleChange)}
            >
              Clear
            </div>
            {validation.HTMLValidate === true && (
              <div style={{ overflow: 'hidden', height: 0 }}>
                <Input maxLength='0' {...props} type='text' />
              </div>
            )}
          </div>
        )
      }}
    </Custom>
  )
}

export default Signature
