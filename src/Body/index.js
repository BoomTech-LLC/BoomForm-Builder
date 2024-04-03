import React from 'react';
import Fields from './Fields';

const Body = ({
  payment,
  fields,
  printableFields,
  gridOptions,
  pagination,
  global,
  button,
  formRef,
  logic,
  logicIds,
  setCurrentPage,
  formId,
  isShowSubmitButton,
  onStorageButtonClick,
  localStorageSubmitFormData,
  onLocalStorageSubmitFormDataChange
}) => {
  return (
    <Fields
      fields={fields}
      pagination={pagination}
      payment={payment}
      printableFields={printableFields}
      gridOptions={gridOptions}
      global={global}
      button={button}
      formRef={formRef}
      isShowSubmitButton={isShowSubmitButton}
      logic={logic}
      logicIds={logicIds}
      setCurrentPage={setCurrentPage}
      formId={formId}
      onStorageButtonClick={onStorageButtonClick}
      localStorageSubmitFormData={localStorageSubmitFormData}
      onLocalStorageSubmitFormDataChange={onLocalStorageSubmitFormDataChange}
    />
  );
};

export default Body;
