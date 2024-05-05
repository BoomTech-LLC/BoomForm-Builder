import { storeProgresSubmitStore } from '../Helpers/storeProgres';

describe('storeProgresSubmitStore', () => {
  let fields;
  let localStorageFormData;
  let localStorageStatus;
  let _handleChangeMock;

  beforeEach(() => {
    _handleChangeMock = jest.fn();

    fields = [
      {
        id: 'nameField',
        type: 'name'
      },
      {
        id: 'addressField',
        type: 'address'
      },
      {
        id: 'timeField',
        type: 'time'
      }
    ];

    localStorageFormData = {
      nameField: {
        first: 'testName',
        middle: 'testMiddleName',
        last: 'testLastName'
      },
      addressField: {
        city: 'testCity',
        country: 'testCountry',
        street: 'testStreet',
        street2: 'testStreet2',
        zip: 'testZip'
      },
      timeField: {
        format: '12-hour',
        hour: '10',
        minute: '30'
      }
    };

    localStorageStatus = 'some_status';

    window._handleChange = _handleChangeMock;
  });

  afterEach(() => {
    window._handleChange.mockClear();
  });

  it('should call _handleChange for each field with stored data', () => {
    storeProgresSubmitStore({
      fields,
      localStorageFormData,
      localStorageStatus
    });

    expect(_handleChangeMock).toHaveBeenCalledTimes(11);

    // Check specific calls with expected arguments
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'nameField.first',
      value: 'testName'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'nameField.middle',
      value: 'testMiddleName'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'nameField.last',
      value: 'testLastName'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.city',
      value: 'testCity'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.country',
      value: 'testCountry'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.street',
      value: 'testStreet'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.street2',
      value: 'testStreet2'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.zip',
      value: 'testZip'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'timeField.format',
      value: '12-hour'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'timeField.hour',
      value: '10'
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'timeField.minute',
      value: '30'
    });
  });

  it('should call _handleChange with empty values when localStorageStatus is "reseted"', () => {
    localStorageStatus = 'reseted';

    storeProgresSubmitStore({
      fields,
      localStorageFormData,
      localStorageStatus
    });

    expect(_handleChangeMock).toHaveBeenCalledTimes(11);

    // Check specific calls with expected arguments
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'nameField.first',
      value: ''
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'nameField.middle',
      value: ''
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'nameField.last',
      value: ''
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.city',
      value: ''
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.country',
      value: {
        code: 'US',
        dial_code: '+1',
        flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
        key: 229,
        name: 'United States',
        value: 'United States'
      }
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.street',
      value: ''
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.street2',
      value: ''
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'addressField.zip',
      value: ''
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'timeField.format',
      value: null
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'timeField.hour',
      value: null
    });
    expect(_handleChangeMock).toHaveBeenCalledWith({
      id: 'timeField.minute',
      value: null
    });
  });
});
