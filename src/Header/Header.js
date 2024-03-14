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
  const getStorageButton = () => {
    if (localStorageStatus === 'active') {
      return storeProgres.resetButton.HTML || '<span>Reset</span>';
    } else if (localStorageStatus === 'loaded') {
      return storeProgres.resetButton.HTML || '<span>Reset</span>';
    } else if (localStorageStatus === 'reseted') {
      return storeProgres.loadButton.HTML || '<span>Load</span>';
    } else {
      return null;
    }
  };

  const getInstructionButton = () => {
    if (
      localStorageStatus === 'active' &&
      storeProgres.loadButton.instruction &&
      storeProgres.resetButton.instruction
    ) {
      return (
        <span className='boomForm-field__instruction'>
          {localStorageStatus === 'reseted'
            ? storeProgres.loadButton.instruction
            : storeProgres.resetButton.instruction}
        </span>
      );
    }
  };

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
              __html: getStorageButton()
            }}
          />
          {getInstructionButton()}
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
