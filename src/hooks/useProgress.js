import React, { useEffect, useRef, useState } from 'react';
import { storeProgresSubmitStore } from '../Helpers/storeProgres';

const isLocalStorageSupported = () => {
  const testKey = '__test__';

  try {
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

export const useProgress = ({ id, storeData, fields }) => {
  const progressData = useRef({});
  const submitData = useRef({});
  const [statusState, setStatusState] = useState({});
  const [buttonState, setButtonState] = useState();
  const [instructionsState, setInstructionsState] = useState();
  const isSupported = useRef(false);

  useEffect(() => {
    isSupported.current = isLocalStorageSupported();

    if (isSupported.current) {
      try {
        const storeProgress = localStorage.getItem(`form-${id}`);
        const submitProgress = localStorage.getItem(`submit-${id}`);
        const status = localStorage.getItem(`status-${id}`);

        const parsedStoreProgress = JSON.parse(storeProgress);
        const parsedSubmitProgress = JSON.parse(submitProgress);

        setStatusState(status);
        progressData.current = parsedStoreProgress;
        submitData.current = parsedSubmitProgress;

        if (
          storeData?.storeProgress?.enabled &&
          storeData?.submitProgres?.enabled
        ) {
          if (submitProgress) {
            storeProgresSubmitStore({
              fields,
              localStorageFormData: parsedSubmitProgress,
              localStorageStatus: statusState
            });

            if (statusState === 'active' || statusState === 'loaded') {
              setButtonState(
                storeData?.submitProgres?.resetButton?.HTML ||
                  '<span>Reset</span>'
              );
            } else if (statusState === 'reseted') {
              setButtonState(
                storeData?.submitProgres?.loadButton?.HTML ||
                  '<span>Load</span>'
              );
            } else {
              setButtonState(null);
            }

            if (statusState === 'reseted') {
              setInstructionsState(
                <span className='boomForm-field__instruction'>
                  {storeData?.submitProgres?.resetButton?.instruction}
                </span>
              );
            } else if (statusState === 'loaded') {
              setInstructionsState(
                <span className='boomForm-field__instruction'>
                  {storeData?.submitProgres?.loadButton?.instruction}
                </span>
              );
            }
          } else if (storeProgress) {
            storeProgresSubmitStore({
              fields,
              localStorageFormData: parsedStoreProgress,
              localStorageStatus: statusState
            });
          }
        } else if (storeData?.submitProgres?.enabled) {
          storeProgresSubmitStore({
            fields,
            localStorageFormData: parsedSubmitProgress,
            localStorageStatus: statusState
          });

          if (statusState === 'active' || statusState === 'loaded') {
            setButtonState(
              storeData?.submitProgres?.resetButton?.HTML ||
                '<span>Reset</span>'
            );
          } else if (statusState === 'reseted') {
            setButtonState(
              storeData?.submitProgres?.loadButton?.HTML || '<span>Load</span>'
            );
          } else {
            setButtonState(null);
          }

          if (statusState === 'reseted') {
            setInstructionsState(
              <span className='boomForm-field__instruction'>
                {storeData?.submitProgres?.resetButton?.instruction}
              </span>
            );
          } else if (statusState === 'loaded') {
            setInstructionsState(
              <span className='boomForm-field__instruction'>
                {storeData?.submitProgres?.loadButton?.instruction}
              </span>
            );
          }
        } else if (storeData?.storeProgress?.enabled) {
          storeProgresSubmitStore({
            fields,
            localStorageFormData: parsedStoreProgress,
            localStorageStatus: statusState
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [statusState]);

  const onProgressChange = value => {
    if (
      storeData?.storeProgress?.enabled &&
      id &&
      isSupported.current &&
      value
    ) {
      localStorage.setItem(`form-${id}`, JSON.stringify(value));
    }
  };

  const onSubmitChange = value => {
    if (
      storeData?.submitProgres?.enabled &&
      id &&
      isSupported.current &&
      value
    ) {
      localStorage.setItem(`submit-${id}`, JSON.stringify(value));
    }
  };

  const onStatusChange = status => {
    if (
      storeData?.submitProgres?.enabled &&
      id &&
      isSupported.current &&
      status
    ) {
      localStorage.setItem(`status-${id}`, status);
      setStatusState(status);
    }
  };

  return {
    progressData: progressData.current,
    submitData: submitData.current,
    status: statusState,
    localStorageButton: buttonState,
    instructionsState,
    onProgressChange,
    onSubmitChange,
    onStatusChange
  };
};
