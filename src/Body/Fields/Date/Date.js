import React from 'react'
import dayjs from 'dayjs'
import { Input } from 'boomform'
import { iphoneCheck } from '../../../Helpers/global'

const Date = ({ validation = {}, payment, ...props }) => {
  const { min, max, disableDates } = validation
  if (min || max || disableDates) {
    const { hideDays, hiddenCustomDays = [], isCustom } = validation
    validation = {
      ...validation,
      custom: value => {
        if (value) {
          const dayName = dayjs(value).format('dddd')
          const customDay = dayjs(value).format('MMM D, YYYY')
          if (min?.value > value) return min?.msg
          if (max?.value < value) return max?.msg
          if (disableDates && !isCustom && hideDays[dayName]) {
            return `${dayName}s are disabled. Please pick another date. `
          }
          if (disableDates && isCustom && hiddenCustomDays.includes(value)) {
            return `${customDay} is disabled. Please pick another date.`
          }
        }
        return false
      }
    }
    delete validation.hideDays
    delete validation.disableDates
    delete validation.hiddenCustomDays
    delete validation.isCustom
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
