import { useField } from 'boomform';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import Body from './Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { getRendableData } from './Helpers/global';
import { getHiddenIds, getUpdatableFields } from './Helpers/logic';
import StateHandler from './StateHandler';
import useLocalStorage from './hooks/useLocalStorage';
import { storeProgresStore } from './Helpers/storeProgers';

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
    storeProgres = {}
  } = global;

  const [localStorageStatus, setStatus] = useLocalStorage(
    `status-${formId}`,
    null
  );
  const [localStorageFormData, setLocalStorageFormData] = useLocalStorage(
    `form-${formId}`,
    ''
  );

  const storeProgresStoredData = useMemo(
    () =>
      formId && storeProgres.enabled
        ? fields.map(field =>
            storeProgresStore(field, localStorageFormData, localStorageStatus)
          )
        : fields,
    [fields, localStorageFormData, localStorageStatus]
  );

  const updatableFields = getUpdatableFields({ logic });
  const { initial = 0 } = pagination;
  const formRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(initial);
  const isPagination = Object.keys(pagination).length !== 0;
  const data = useField(updatableFields);

  const logicIds = getHiddenIds({
    logic,
    values: data?.neededValues ? data?.neededValues : {},
    fields: storeProgresStoredData,
    formRef
  });

  const printableFields = getRendableData(
    storeProgresStoredData,
    logicIds,
    pagination,
    currentPage
  );

  const onLocalStorageFormDataChange = useCallback(value => {
    setLocalStorageFormData(value);
  }, []);

  const onStorageButtonClick = useCallback(value => {
    setStatus(value);
  }, []);

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
        description={description}
        isPagination={isPagination}
        pagination={pagination}
        currentPage={currentPage}
        logicIds={logicIds}
        storeProgres={storeProgres}
        localStorageStatus={localStorageStatus}
        onStorageButtonClick={onStorageButtonClick}
      />
      <Body
        fields={storeProgresStoredData}
        payment={payment}
        printableFields={printableFields}
        gridOptions={gridOptions}
      />
      <Footer
        formRef={formRef}
        global={global}
        button={button}
        formId={formId}
        fields={storeProgresStoredData}
        isPagination={isPagination}
        pagination={pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        payment={payment}
        logic={logic}
        logicIds={logicIds}
        onStorageButtonClick={onStorageButtonClick}
        onLocalStorageFormDataChange={onLocalStorageFormDataChange}
      />

      <StateHandler
        onStateChange={onStateChange}
        formRef={formRef}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </form>
  );
};

export default Form;
