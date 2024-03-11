import React, { Fragment } from 'react'
import Pagination from './Pagination/Pagination'

const Header = ({
  name,
  description,
  isPagination,
  pagination,
  storeProgres = {},
  currentPage,
  logicIds,
  localStorageStatus,
  onStorageButtonClick
}) => {
  return (
    <>
      <div className='boomForm__header'>
        <div className='boomForm__nameAndReset'>
          <h2 className='boomForm__name'>{name}</h2>
          <div
            onClick={() => {
              onStorageButtonClick(
                localStorageStatus === 'reset' ? 'upload' : 'reset'
              )
            }}
            className='boomForm__reset'
            dangerouslySetInnerHTML={{
              __html:
                localStorageStatus === 'active'
                  ? storeProgres.resetButton || '<span>Reset</span>'
                  : localStorageStatus === 'upload'
                  ? storeProgres.resetButton || '<span>Reset</span>'
                  : localStorageStatus === 'reset'
                  ? storeProgres.uploadButton || '<span>Upload</span>'
                  : null
            }}
          />
        </div>
        <h4 className='boomForm__description'>{description}</h4>
      </div>
      <Pagination
        isPagination={isPagination}
        pagination={pagination}
        currentPage={currentPage}
        logicIds={logicIds}
      />
    </>
  )
}

export default Header
