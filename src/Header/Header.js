import React, { Fragment } from 'react';
import Pagination from './Pagination/Pagination';

const Header = ({
  name,
  description,
  isPagination,
  pagination,
  submitProgres = {},
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
            onClick={() => {
              onStorageButtonClick(
                localStorageStatus === 'reseted' ? 'loaded' : 'reseted'
              );
            }}
            className='boomForm__reset'
            dangerouslySetInnerHTML={{
              __html: localStorageButton
            }}
          />
          {instructionsState}
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
