import React, { useState, useEffect, useCallback } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { Custom } from 'boomform'

const Signature = ({ id, initial, ...props }) => {
  const [sigPadRef, setSigPadRef] = useState(null)

  useEffect(() => {
    if (initial && sigPadRef) sigPadRef.fromData(initial)
  }, [initial, sigPadRef])

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
          </div>
        )
      }}
    </Custom>
  )
}

export default Signature
