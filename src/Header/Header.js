import React, { Fragment } from 'react';
import Pagination from './Pagination/Pagination';

const Header = ({
  name,
  description,
  isPagination,
  pagination,
  currentPage,
  logicIds,
  instructionsState,
  localStorageButton,
  localStorageStatus,
  onStorageButtonClick
}) => {
  return (
    <>
      <div className='boomForm__header'>
        <div className='boomForm__nameAndReset'>
          <h2 className='boomForm__name'>{name}</h2>
          <div
            className='boomForm_storeButtons'
            onClick={() => {
              onStorageButtonClick(
                localStorageStatus === 'reseted' ? 'loaded' : 'reseted'
              );
            }}
          >
            {localStorageButton}
            {instructionsState}
          </div>
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
  );
};

export default Header;
