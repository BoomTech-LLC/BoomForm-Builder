import React, { useState, useEffect, useCallback, Fragment, useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { Custom, Input } from 'boomform'

const Signature = props => {
  const {
    id,
    initial,
    validation,
    clearBtnContent = 'Clear',
    classnameprefix
  } = props
  const [sigPadRef, setSigPadRef] = useState(null)
  const canvasContainerRef = useRef(null)
  const [canvasWidth, setCanvasWidth] = useState(0)

  const getParentWidth = () => {
    if (canvasContainerRef.current) {
      const parentWidth = canvasContainerRef.current.offsetWidth
      setCanvasWidth(parentWidth)
    }
  }

  useEffect(() => {
    getParentWidth()
    window.addEventListener('resize', getParentWidth)
    return () => {
      window.removeEventListener('resize', getParentWidth)
    }
  }, [classnameprefix])

  useEffect(() => {
    if (initial && sigPadRef) sigPadRef.fromData(initial.data)
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
      {({ handleChange, handleBlur, value }) => {
        if (value === null && !sigPadRef?.isEmpty()) {
          sigPadRef?.clear()
        }
        return (
          <div ref={canvasContainerRef} onClick={() => handleOnBlur(handleBlur)}>
            <SignatureCanvas
              ref={onRefSet}
              penColor='#000'
              canvasProps={{
                width: canvasWidth,
                height: '200px',
                className: 'signatureCanvas'
              }}
              onEnd={() => handleTrim(handleChange)}
              clearOnResize={false}
            />
            <div
              className={'boomForm-signatureButton'}
              onClick={() => handleClear(handleChange)}
              dangerouslySetInnerHTML={{
                __html: clearBtnContent
              }}
            ></div>
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
