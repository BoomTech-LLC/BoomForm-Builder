import React from 'react'
import classNames from 'classnames/bind'

import Name from './Fields/Name/Name'
import Address from './Fields/Address/Address'
import MultipleChoice from './Fields/MultipleChoice/MultipleChoice'
import SingleChoice from './Fields/SingleChoice/SingleChoice'
import Text from './Fields/Text/Text'
import Email from './Fields/Email/Email'
import Url from './Fields/Url/Url'
import Phone from './Fields/Phone/Phone'
import Password from './Fields/Password/Password'
import Number from './Fields/Number/Number'
import Routine from './Fields/Routine/Routine'
import Select from './Fields/Select/Select'
import Price from './Fields/Price/Price'
import Time from './Fields/Time/Time'
import StarRating from './Fields/StarRating/StarRating'
import ScaleRating from './Fields/ScaleRating/ScaleRating'
import Textarea from './Fields/Textarea/Textarea'
import Map from './Fields/Map/Map'
import File from './Fields/File/File'
import Date from './Fields/Date/Date'
import Just from './Fields/Just/Just'
import Terms from './Fields/Terms/Terms'
import Signature from './Fields/Signature/Signature'

const FieldByType = ({ type, ...props }) => {
  switch (type) {
    case 'name':
      return <Name {...props} />
    case 'address':
      return <Address {...props} />
    case 'multipleChoice':
      return <MultipleChoice {...props} />
    case 'singleChoice':
      return <SingleChoice {...props} />
    case 'text':
      return <Text {...props} />
    case 'textarea':
      return <Textarea {...props} />
    case 'email':
      return <Email {...props} />
    case 'url':
      return <Url {...props} />
    case 'phone':
      return <Phone {...props} />
    case 'password':
      return <Password {...props} />
    case 'number':
      return <Number {...props} />
    case 'custom':
      return <Routine {...props} />
    case 'select':
      return <Select {...props} />
    case 'price':
      return <Price {...props} />
    case 'time':
      return <Time {...props} />
    case 'starRating':
      return <StarRating {...props} />
    case 'scaleRating':
      return <ScaleRating {...props} />
    case 'map':
      return <Map {...props} />
    case 'file':
      return <File {...props} />
    case 'date':
      return <Date {...props} />
    case 'terms':
      return <Terms {...props} />
    case 'just':
      return <Just {...props} />
    case 'signature':
      return <Signature {...props} />
    default:
      return null
  }
}

const Field = ({ id, type, classnameprefix, label, instruction, ...props }) => {
  return (
    <div
      id={`field-${id}`}
      className={classNames('boomForm-field__content', {
        [`${classnameprefix}-field__content`]: classnameprefix
      })}
    >
      {label !== undefined && (
        <label
          className={classNames('boomForm-field__label', {
            [`${classnameprefix}__label`]: classnameprefix
          })}
          dangerouslySetInnerHTML={{
            __html: label
          }}
        ></label>
      )}
      <div
        className={classNames(`boomForm-${type}__content`, {
          [`${classnameprefix}-${type}__content`]: classnameprefix
        })}
      >
        <FieldByType
          id={id}
          type={type}
          classnameprefix={classnameprefix}
          label={label}
          instruction={instruction}
          {...props}
        />
      </div>
      {instruction !== undefined ? (
        <div
          className={classNames(`boomForm-field__instruction`, {
            [`${classnameprefix}-field__instruction`]: classnameprefix
          })}
        >
          {instruction}
        </div>
      ) : null}
    </div>
  )
}

export default Field
