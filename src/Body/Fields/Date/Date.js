import React, { useEffect, useState } from 'react'
import { Input } from 'boomform'
import { iphoneCheck } from '../../../Helpers/global'

const Date = ({ validation = {}, payment, ...props }) => {
  const { min, max } = validation
  const [selectedDate, setSelectedDate] = useState(null)

  if (min || max) {
    validation = {
      ...validation,
      custom: value => {
        if (value) {
          if (min?.value > value) return min?.msg
          if (max?.value < value) return max?.msg
        }
        return false
      }
    }
  }
  let date
  // const validate = () => {
  //   if (hiddenDays.length > 0) {
  //     validation = {
  //       ...validation,
  //       custom: () => {
  //         console.log('custom worked')

  //         return customValidationMessage || 'Selected date is not selectable'
  //       }
  //     }
  //   }
  // }
  useEffect(() => {
    date = new Date(selectedDate)
  }, [selectedDate])

  const hiddenDays = Object.keys(validation).filter(
    key => key.startsWith('hide') && validation[key]?.msg
  )

  const customValidationMessage = hiddenDays
    .map(day => validation[day].msg)
    .join(', ')

  const handleChange = ({ event }) => {
    const value = event.target.value
    setSelectedDate(value)
    // validate()
    if (iphoneCheck()) {
      setTimeout(() => {
        event.target.defaultValue = ''
      }, 100)
    }
  }
  const hiddenDaysArray = []
  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate)
      const currentDay = date.getDay()

      hiddenDaysArray.forEach(({ details }) => {
        const hiddenDayValue = details.value

        if (hiddenDayValue === currentDay) {
          validation = {
            ...validation,
            custom: () => {
              return (
                customValidationMessage || 'Selected date is not selectable'
              )
            }
          }
        }
      })
    }
  }, [selectedDate, hiddenDaysArray])
  for (const [key, value] of Object.entries(validation)) {
    if (key.startsWith('hide') && typeof value === 'object') {
      hiddenDaysArray.push({ day: key.replace('hide', ''), details: value })
    }
  }

  if (hiddenDays.length > 0) {
    validation = {
      ...validation,
      custom: () => {
        return customValidationMessage || 'Selected date is not selectable'
      }
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
