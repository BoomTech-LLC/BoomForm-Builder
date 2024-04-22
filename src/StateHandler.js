import { Context } from 'boomform';
import { useContext } from 'react';
import { debounce } from './Helpers/debounce';

const StateHandler = ({
  onStateChange,
  formRef,
  logicIds,
  setCurrentPage,
  currentPage,
  onLocalStorageFormDataChange,
  printableFields,
}) => {
  const { state, actions } = useContext(Context);

  const localStorageData = state.values;

  const hasNonNullValues = Object.values(localStorageData).some(
    value => value !== null
  );

  if (hasNonNullValues) {
    debounce(
      'update_local_storage',
      () => {
        onLocalStorageFormDataChange(localStorageData);
      },
      300
    );
  }

  window._handleChange = actions.handleChange;
  onStateChange({ state, actions, formRef, setCurrentPage, currentPage , printableFields , logicIds});
  return null;
};

export default StateHandler;
