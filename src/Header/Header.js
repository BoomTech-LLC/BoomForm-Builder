import React, { Fragment } from 'react';
import Pagination from './Pagination/Pagination';

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
                localStorageStatus === 'reseted' ? 'loaded' : 'reseted'
              );
            }}
            className='boomForm__reset'
            dangerouslySetInnerHTML={{
              __html:
                localStorageStatus === 'active'
                  ? storeProgres.resetButton.HTML || '<span>Reset</span>'
                  : localStorageStatus === 'loaded'
                  ? storeProgres.resetButton.HTML || '<span>Reset</span>'
                  : localStorageStatus === 'reseted'
                  ? storeProgres.loadButton.HTML || '<span>Load</span>'
                  : null
            }}
          />
          {localStorageStatus === 'active' &&
            storeProgres.loadButton.instruction &&
            storeProgres.resetButton.instruction && (
              <span className='boomForm-field__instruction'>
                {localStorageStatus === 'reseted'
                  ? storeProgres.loadButton.instruction
                  : storeProgres.resetButton.instruction}
              </span>
            )}
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
