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
  localStorageStatus,
  onStorageButtonClick
}) => {
  const getStorageButton = () => {
    if (submitProgres.enabled) {
      if (localStorageStatus === 'active') {
        return submitProgres.resetButton.HTML || '<span>Reset</span>';
      } else if (localStorageStatus === 'loaded') {
        return submitProgres.resetButton.HTML || '<span>Reset</span>';
      } else if (localStorageStatus === 'reseted') {
        return submitProgres.loadButton.HTML || '<span>Load</span>';
      } else {
        return null;
      }
    }
  };

  const getInstructionButton = () => {
    if (
      localStorageStatus === 'active' &&
      submitProgres.loadButton.instruction &&
      submitProgres.resetButton.instruction
    ) {
      return (
        <span className='boomForm-field__instruction'>
          {localStorageStatus === 'reseted'
            ? submitProgres.loadButton.instruction
            : submitProgres.resetButton.instruction}
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
