import React, { Fragment } from 'react'
import { Checkbox } from 'boomform'

const Terms = ({ id, text, url, openIn, ...props }) => {
  const textSplit = text.match(/(?<part1>.*){(?<linkText>.*)}(?<part2>.*)/).groups
  const targetValue = openIn === 'newTab' ? '_blank' : 'popup'
  const newTab = targetValue === "popup"
  
  return (
    <>
      <Checkbox id={id} name={id} value={id} {...props} />
      <div className='boomForm-terms__link'>
        {textSplit.part1}
        <a href={url}
          target={targetValue}
          onClick={() => newTab && window.open(url, 'Popup', 'width = 800, height = 600')}
        >{textSplit.linkText}</a>
        {textSplit.part2}
      </div>
    </>
  )
}
export default Terms
