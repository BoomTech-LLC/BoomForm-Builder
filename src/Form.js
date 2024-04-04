import { useField } from 'boomform';
import React, { useEffect, useRef, useState } from 'react';
import Body from './Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { getRendableData } from './Helpers/global';
import { getHiddenIds, getUpdatableFields } from './Helpers/logic';
import { getShowableData } from './Helpers/pagination';
import StateHandler from './StateHandler';
import { useProgress } from './hooks/useProgress';

const Form = ({
  global,
  fields,
  button,
  payment,
  pagination,
  logic,
  formId,
  gridOptions
}) => {
  const {
    name,
    description,
    onStateChange = () => {},
    onFirstRender = () => {},
    onDie = () => {},
    storeData = {},
    isSubmitButtonInLastPage
  } = global;

  const {
    status,
    localStorageButton,
    instructionsState,
    onStatusChange,
    onProgressChange,
    onSubmitChange
  } = useProgress({ id: formId, fields, storeData });

  const updatableFields = getUpdatableFields({ logic });
  const { initial = 0 } = pagination;
  const formRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(initial);
  const isPagination = Object.keys(pagination).length !== 0;
  const data = useField(updatableFields);
  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields: fields,
    formRef
  });

  const printableFields = getRendableData(
    fields,
    logicIds,
    pagination,
    currentPage
  );

  const { pagesLength, showableCurrentPage } = getShowableData({
    logicIds,
    pagination,
    currentPage
  });

  useEffect(() => {
    setCurrentPage(initial);
  }, [initial]);

  useEffect(() => {
    onFirstRender({ setCurrentPage });

    return () => {
      onDie({ setCurrentPage });
    };
  }, []);

  return (
    <form ref={formRef} className='boomForm'>
      <Header
        name={name}
        localStorageButton={localStorageButton}
        instructionsState={instructionsState}
        description={description}
        isPagination={isPagination}
        pagination={pagination}
        currentPage={currentPage}
        logicIds={logicIds}
        submitProgres={storeData?.submitProgres}
        localStorageStatus={status}
        onStorageButtonClick={onStatusChange}
      />
      <Body
        fields={fields}
        payment={payment}
        printableFields={printableFields}
        gridOptions={gridOptions}
        pagination={pagination}
        global={global}
        button={button}
        formRef={formRef}
        logic={logic}
        logicIds={logicIds}
        isShowSubmitButton={
          isSubmitButtonInLastPage && pagesLength === showableCurrentPage
        }
        setCurrentPage={setCurrentPage}
        formId={formId}
        onStorageButtonClick={onStatusChange}
        onLocalStorageSubmitFormDataChange={onSubmitChange}
      />
      <Footer
        formRef={formRef}
        global={global}
        button={button}
        formId={formId}
        fields={fields}
        isPagination={isPagination}
        pagination={pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        payment={payment}
        logic={logic}
        logicIds={logicIds}
        onStorageButtonClick={onStatusChange}
        onLocalStorageSubmitFormDataChange={onSubmitChange}
      />

      <StateHandler
        onStateChange={onStateChange}
        onLocalStorageFormDataChange={onProgressChange}
        formRef={formRef}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </form>
  );
};

export default Form;
