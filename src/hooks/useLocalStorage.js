import { useState, useEffect, useRef } from 'react';

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

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (isLocalStorageSupported()) {
        const value = localStorage.getItem(key);
        if (value) {
          return JSON.parse(value);
        } else {
          localStorage.setItem(key, JSON.stringify(defaultValue));
          return defaultValue;
        }
      } else {
        console.warn('localStorage is not supported.');
        return defaultValue;
      }
    } catch (err) {
      console.error('Error initializing localStorage:', err);
      return defaultValue;
    }
  });
  const setValue = newValue => {
    try {
      if (isLocalStorageSupported()) {
        localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);
      } else {
        console.warn(
          'localStorage is not supported. Value will not be stored.'
        );
      }
    } catch (err) {
      console.error('Error updating localStorage:', err);
    }
  };

  useEffect(() => {
    try {
      if (isLocalStorageSupported()) {
        const value = localStorage.getItem(key);
        if (value && value !== JSON.stringify(storedValue)) {
          setStoredValue(JSON.parse(value));
        }
      } else {
        console.warn(
          'localStorage is not supported. Value will not be updated.'
        );
      }
    } catch (err) {
      console.error('Error reading localStorage:', err);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

export default useLocalStorage;
