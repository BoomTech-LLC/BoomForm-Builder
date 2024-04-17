import {
  addAdditionalParams,
  correctFiles,
  customUpload,
  uploadFiles,
  uploadHandler
} from '../Helpers/files';
jest.mock('axios');

describe('addAdditionalParams', () => {
  it('should add additional params to the file', () => {
    const file = new File(['file content'], 'example.txt', {
      type: 'text/plain'
    });
    const i = 1;

    const result = addAdditionalParams(file, i);
    expect(result instanceof File).toBe(true);

    const expectedExtension = 'txt';
    const expectedOriginalName = 'example';
    const expectedOriginalEncodedName =
      encodeURIComponent(expectedOriginalName);

    expect(result.id).toMatch(/^\d{13}-\d$/);
    expect(result.percentage).toBe(0);
    expect(result.type).toBe('text/plain');
    expect(result.originalName).toBe(
      `${expectedOriginalName}.${expectedExtension}`
    );
    expect(result.originalEncodedName).toBe(expectedOriginalEncodedName);
  });
});

describe('correctFiles', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call addAdditionalParams for each file in the array', () => {
    const files = [
      new File(['file1 content'], 'file1.txt', { type: 'text/plain' }),
      new File(['file2 content'], 'file2.txt', { type: 'text/plain' }),
      new File(['file3 content'], 'file3.txt', { type: 'text/plain' })
    ];

    addAdditionalParams.mockImplementation((file, index) => {
      const modifiedName = `${file.name.split('.')[0]}_modified.txt`;
      return new File([file], modifiedName, { type: file.type });
    });

    correctFiles(files);

    expect(addAdditionalParams).toHaveBeenCalledTimes(files.length);

    files.forEach((file, index) => {
      expect(addAdditionalParams).toHaveBeenCalledWith(file, index);
    });
  });

  it('should return and array of new files with additional params', () => {
    const files = [
      new File(['file1 content'], 'file1.txt', { type: 'text/plain' }),
      new File(['file2 content'], 'file2.txt', { type: 'text/plain' }),
      new File(['file3 content'], 'file3.txt', { type: 'text/plain' })
    ];

    const expectedResult = [
      new File(['file1 content'], 'file1_modified.txt', { type: 'text/plain' }),
      new File(['file2 content'], 'file2_modified.txt', { type: 'text/plain' }),
      new File(['file3 content'], 'file3_modified.txt', { type: 'text/plain' })
    ];

    addAdditionalParams.mockImplementation((file, index) => {
      const modifiedName = `${file.name.split('.')[0]}_modified.txt`;
      return new File([file], modifiedName, { type: file.type });
    });

    const result = correctFiles(files);
    expect(result).toEqual(expectedResult);
  });
});

describe('customUpload', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should upload file successfully on first try', async () => {
    const file = new File(['file content'], 'example.txt', {
      type: 'text/plain'
    });
    const upLoadData = {
      headers: {
        'Content-Type': 'text/plain'
      },
      url: 'https://example.com/upload'
    };
    const handleLoading = jest.fn();
    const allFiles = [];
    const signal = new AbortController().signal;
    const onRequestSuccess = jest.fn();
    const onRequestFail = jest.fn();
    const retriesCount = 3;

    axios.mockResolveValueOnce({ data: 'Upload successful' });

    await customUpload({
      file,
      upLoadData,
      handleLoading,
      allFiles,
      signal,
      onRequestSuccess,
      onRequestFail,
      retriesCount
    });

    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      url: upLoadData.url,
      method: 'POST',
      data: file,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
    expect(handleLoading).toHaveBeenCalledWith(file.id, expect.any(Number));
    expect(onRequestSuccess).toHaveBeenCalledWith({
      data: 'Upload successful'
    });
    expect(onRequestFail).not.toHaveBeenCalled();
  });

  it('should retry upload and succed after one failure', async () => {
    const file = new File(['file content'], 'example.txt', {
      type: 'text/plain'
    });
    const upLoadData = {
      headers: {
        'Content-Type': 'text/plain'
      },
      url: 'https://example.com/upload'
    };
    const handleLoading = jest.fn();
    const allFiles = [];
    const signal = new AbortController().signal;
    const onRequestSuccess = jest.fn();
    const onRequestFail = jest.fn();
    const retriesCount = 3;

    axios
      .mockRejectedValueOnce(new Error('Upload failed'))
      .mockResolveValueOnce({ data: 'Upload successful' });

    await customUpload({
      file,
      upLoadData,
      handleLoading,
      allFiles,
      signal,
      onRequestSuccess,
      onRequestFail,
      retriesCount
    });

    expect(axios).toHaveBeenCalledTimes(2);
    expect(axios).toHaveBeenCalledWith({
      url: upLoadData.url,
      method: 'POST',
      data: file,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
    expect(handleLoading).toHaveBeenCalledWith(file.id, expect.any(Number));
    expect(onRequestSuccess).toHaveBeenCalledWith({
      data: 'Upload successful'
    });
    expect(onRequestFail).toHaveBeenCalledWith(new Error('Upload failed'), 2);
  });

  it('should retry upload and fail after retries exhausted', async () => {
    const file = new File(['file content'], 'example.txt', {
      type: 'text/plain'
    });
    const upLoadData = {
      headers: {
        'Content-Type': 'text/plain'
      },
      url: 'https://example.com/upload'
    };
    const handleLoading = jest.fn();
    const allFiles = [];
    const signal = new AbortController().signal;
    const onRequestSuccess = jest.fn();
    const onRequestFail = jest.fn();
    const retriesCount = 2;

    axios.mockRejectedValue(new Error('Upload failed'));

    await customUpload({
      file,
      upLoadData,
      handleLoading,
      allFiles,
      signal,
      onRequestSuccess,
      onRequestFail,
      retriesCount
    });

    expect(axios).toHaveBeenCalledTimes(retriesCount + 1);
    expect(axios).toHaveBeenCalledWith({
      url: upLoadData.url,
      method: 'POST',
      data: file,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
    expect(handleLoading).toHaveBeenCalledWith(file.id, expect.any(Number));
    expect(onRequestSuccess).not.toHaveBeenCalled();
    expect(onRequestFail).toHaveBeenCalledWith(new Error('Upload failed'), 0);
  });
});

describe('uploadFiles', () => {
  it('should call uploadHandler for each file in the fileList', () => {
    const fileList = [
      { id: 1, name: 'file1.txt' },
      { id: 2, name: 'file2.txt' },
      { id: 3, name: 'file3.txt' }
    ];

    const callback = jest.fn();
    const handleLoading = jest.fn();
    const newValues = [];
    const uploadOptions = jest.fn();

    uploadFiles(fileList, callback, handleLoading, newValues, uploadOptions);

    expect(uploadOptions).not.toHaveBeenCalled();

    fileList.forEach(file => {
      expect(uploadHandler).toHaveBeenCalledWith({
        file,
        callback,
        handleLoading,
        allFiles: newValues,
        signal: expect.any(AbortSignal),
        uploadOptions
      });
    });
  });
});

describe('uploadHandler', () => {
  it('should call customUpload with correct parameters', async () => {
    const file = { id: 1, name: 'file1.txt' };
    const callback = jest.fn();
    const handleLoading = jest.fn();
    const allFiles = [];
    const signal = new AbortController().signal;
    const uploadOptions = jest.fn().mockReturnValue([
      {
        url: 'https://example.com/upload',
        retries: 3,
        onSuccess: jest.fn(),
        onFail: jest.fn()
      }
    ]);

    await uploadHandler({
      file,
      callback,
      handleLoading,
      allFiles,
      signal,
      uploadOptions
    });

    expect(customUpload).toHaveBeenCalledTimes(1);
    expect(customUpload).toHaveBeenCalledWith({
      file,
      upLoadData: expect.objectContaining({
        url: 'https://example.com/upload',
        retries: 3,
        onSuccess: expect.any(Function),
        onFail: expect.any(Function)
      }),
      handleLoading,
      allFiles,
      signal,
      onRequestSuccess: expect.any(Function),
      onRequestFail: expect.any(Function),
      retriesCount: 3
    });
  });
});
