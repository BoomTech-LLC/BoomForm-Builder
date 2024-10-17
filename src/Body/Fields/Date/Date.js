import React from 'react'
import { Input } from 'boomform'
import { iphoneCheck } from '../../../Helpers/global'
import moment from 'moment'

const Date = ({ validation = {}, payment, ...props }) => {
  const { min, max, hideDays, disableDates, hiddenCustomDays, isCustom } =
    validation

  if (min || max || (hideDays && disableDates)) {
    validation = {
      ...validation,
      custom: (value) => {
        if (value) {
          // const dayName = getDayName(value)
          const dayName = moment(value).format('dddd')
          const customDay = moment(value).format('MMM D, YYYY')
          if (min?.value > value) return min?.msg
          if (max?.value < value) return max?.msg
          // if (hideDays?.monday && value == '2024-10-21')
          //   return 'pick nomrallll date'
          if (hideDays[dayName] && !isCustom) {
            return `${dayName}s are disabled. Please pick another date. `
          }
          if (hiddenCustomDays.includes(value) && isCustom) {
            return `${customDay} is disabled. Please pick another date.`
          }
        }
        return false
      }
    }
  }

  const handleChange = ({ event }) => {
    if (iphoneCheck()) {
      setTimeout(() => {
        event.target.defaultValue = ''
      }, 100)
    }
  }

  return (
    <Input
      {...props}
      type='date'
      validation={validation}
      min={min?.value}
      max={max?.value}
      onChange={handleChange}
    />
  )
}

export default Date
