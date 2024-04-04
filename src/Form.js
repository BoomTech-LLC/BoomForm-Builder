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
import { storeProgresSubmitStore } from './Helpers/storeProgers';
import { getShowableData } from './Helpers/pagination';

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

  const [localStorageStatus, setStatus] = useLocalStorage(
    `status-${formId}`,
    null
  );

  const [localStorageSubmitFormData, setLocalStorageSubmitFormData] =
    useLocalStorage(`submit-${formId}`, '');

  const [localStorageFormData, setLocalStorageFormData] = useLocalStorage(
    `form-${formId}`,
    ''
  );

  const onLocalStorageFormDataChange = useCallback(data => {
    setLocalStorageFormData(data);
  }, []);

  const storeProgresStoredData = useMemo(
    () =>
      formId &&
      (storeData?.submitProgres.enabled || storeData?.storeProgress.enabled)
        ? fields.map(field =>
            storeProgresSubmitStore({
              field,
              localStorageFormData:
                (storeData?.submitProgres.enabled &&
                  localStorageSubmitFormData) ||
                localStorageFormData,
              localStorageStatus
            })
          )
        : fields,
    [fields, localStorageSubmitFormData, localStorageStatus]
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
  const { pagesLength, showableCurrentPage } = getShowableData({
    logicIds,
    pagination,
    currentPage
  });

  const onLocalStorageSubmitFormDataChange = useCallback(value => {
    setLocalStorageSubmitFormData(value);
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
        submitProgres={storeData?.submitProgres}
        localStorageStatus={localStorageStatus}
        onStorageButtonClick={onStorageButtonClick}
      />
      <Body
        fields={storeProgresStoredData}
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
        onStorageButtonClick={onStorageButtonClick}
        localStorageSubmitFormData={localStorageSubmitFormData}
        onLocalStorageSubmitFormDataChange={onLocalStorageSubmitFormDataChange}
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
        onLocalStorageSubmitFormDataChange={onLocalStorageSubmitFormDataChange}
      />

      <StateHandler
        onStateChange={onStateChange}
        onLocalStorageFormDataChange={onLocalStorageFormDataChange}
        formRef={formRef}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </form>
  );
};

export default Form;
