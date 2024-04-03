import React, { useContext } from 'react';
import { Context } from 'boomform';

const StateHandler = ({
  onStateChange,
  formRef,
  setCurrentPage,
  currentPage,
  onLocalStorageFormDataChange
}) => {
  const { state, actions } = useContext(Context);

  const localStorageData = state.values;

  const hasNonNullValues = Object.values(localStorageData).some(
    value => value !== null
  );

  if (hasNonNullValues) {
    onLocalStorageFormDataChange(localStorageData);
  }

  window._handleChange = actions.handleChange;
  onStateChange({ state, actions, formRef, setCurrentPage, currentPage });
  return null;
};

export default StateHandler;
