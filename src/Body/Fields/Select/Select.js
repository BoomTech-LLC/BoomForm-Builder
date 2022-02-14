import React, { Fragment } from 'react'
import Quantity from './../Quantity/Quantity'
import { Select as PrimarySelect } from 'boomform'
import Other from './Other'

const DropDown = ({ id, label, classnameprefix, quantity, ...props }) => (
  <>
    <PrimarySelect id={id} {...props} />
    <Other id={id} />
    <Quantity {...quantity} id={id} classnameprefix={classnameprefix} />
  </>
)

export default DropDown
