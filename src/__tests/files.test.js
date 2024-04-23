import { addAdditionalParams } from '../Helpers/files';

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