import React, { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { Custom } from 'boomform'

const Signature = ({ id, initial, ...props }) => {
  const sigPadRef = useRef()

  const handleTrim = (handleChange) => {
    const url = sigPadRef.current.getTrimmedCanvas().toDataURL('image/png')
    handleChange({
      id,
      value: url,
      e: sigPadRef.current,
      field: { id, initial, ...props }
    })
  }

  const handleClear = (handleChange) => {
    handleChange({
      id,
      value: null,
      e: sigPadRef.current,
      field: { id, initial, ...props }
    })
    sigPadRef.current.clear()
  }

  const handleOnBlur = (handleBlur) => {
    const url = sigPadRef.current.getTrimmedCanvas().toDataURL('image/png')
    handleBlur({
      id,
      value: url,
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
              ref={sigPadRef}
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
