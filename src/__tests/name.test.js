import {getNameFields} from '../Helpers/name';

describe('getNameFields', ()=>{
    it('should return an array of name fields with middle name', () => {
        const result = getNameFields(true);
        const expectedFields = ['first' , 'middle' ,'last'];
        expect(result).toEqual(expectedFields);
    });
    it('should return an array of name fields without middle name', () => {
        const result = getNameFields(false);
        const expectedFields = ['first', 'last'];
        expect(result).toEqual(expectedFields);
    });
    it('should return an array with the correct number of fields with middle name', () => {
        const result = getNameFields(true);
        expect(result.length).toEqual(3);
    });
    
    it('should return an array with the correct number of fields without middle name', () => {
        const result = getNameFields(false);
        expect(result.length).toEqual(2);
    });
})