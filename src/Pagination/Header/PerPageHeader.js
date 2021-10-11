import React from 'react'

const PerPageHeader = ({ page }) => {
  const { title, description } = page

  return (
    <div className={'perpage-header'}>
      {title && <div className={'perpage-title'}>{title}</div>}
      {description && (
        <div className={'perpage-description'}>{description}</div>
      )}
    </div>
  )
}

export default PerPageHeader
