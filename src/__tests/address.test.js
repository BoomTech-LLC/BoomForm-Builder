import {getAddressFields} from '../Helpers/address'

describe('getAddressFields' , ()=>{
    if('should return an array of address fields', () => {
        const expectedFields = ['street', 'street2','city','state','zip','country'];
        const result = getAddressFields();
        expect(result).toEqual(expectedFields);
    });
    it('should return an array with the correct number of fields', () => {
        const result = getAddressFields();
        expect(result.length).toEqual(6);
    });
    it('should return an array with strings as elements', () => {
        const result = getAddressFields();
        result.forEach(field => {
          expect(typeof field).toEqual('string');
        });
      });
})