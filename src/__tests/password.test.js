import { stockedValidation } from '../Helpers/password';

// 1. PROVIDED SHOULD HAVE AT LEAST REGEX KEY WITH OBJECT VALUE
// 2. IF THERE IS NO REGEX IN VALIDATION OBJECT, SO THERE SHOULD EXISTS
//    ANOTHER VALIDATION PROPERTY

describe('stockedValidation(validation) { lowercase, uppercase, symbol, number }', () => {
  it("it's shouldn't be provided another keys inside of validation object", () => {
    const validation = {
      regEx: {
        value: `\d{1,3}`,
        msg: 'Digits 1-3'
      },
      uppercase: {
        value: 3,
        msg: 'You have to write minimum 3 uppercase letters'
      },
      anotherKey: 'with another value'
    };

    const expectedResult = {
      regEx: [
        {
          value: `\d{1,3}`,
          msg: 'Digits 1-3'
        },
        {
          value: `^$|(?=(.*[A-Z]){3,})`,
          msg: 'You have to write minimum 3 uppercase letters'
        }
      ]
    };

    const actualResult = stockedValidation(validation);
    expect(actualResult).not.toEqual(expectedResult);
  });

  it('returned value should be an object', () => {
    const validation = {
      regEx: {
        value: `\d{1,3}`,
        msg: 'Digits 1-3'
      },
      uppercase: {
        value: 3,
        msg: 'You have to write minimum 3 uppercase letters'
      }
    };

    const expectedResult = {
      regEx: [
        {
          value: `\d{1,3}`,
          msg: 'Digits 1-3'
        },
        {
          value: `^$|(?=(.*[A-Z]){3,})`,
          msg: 'You have to write minimum 3 uppercase letters'
        }
      ]
    };

    const actualResult = stockedValidation(validation);
    const isReturnedValueAnObject =
      typeof actualResult === 'object' &&
      !Array.isArray(actualResult) &&
      actualResult !== null;

    expect(isReturnedValueAnObject).toBe(true);

    expect(actualResult).toEqual(expectedResult);
  });

  it('returned value should be an object', () => {
    const validation = {
      regEx: {
        value: `\d{1,3}`,
        msg: 'Digits 1-3'
      },
      uppercase: {
        value: 3,
        msg: 'You have to write minimum 3 uppercase letters'
      }
    };

    const expectedResult = {
      regEx: [
        {
          value: `\d{1,3}`,
          msg: 'Digits 1-3'
        },
        {
          value: `^$|(?=(.*[A-Z]){3,})`,
          msg: 'You have to write minimum 3 uppercase letters'
        }
      ]
    };

    const actualResult = stockedValidation(validation);

    expect(actualResult.regEx).toBeTruthy();

    expect(actualResult).toEqual(expectedResult);
  });

  it('returned value regEx key should be an array', () => {
    const validation = {
      regEx: {
        value: `\d{1,3}`,
        msg: 'Digits 1-3'
      },
      uppercase: {
        value: 3,
        msg: 'You have to write minimum 3 uppercase letters'
      }
    };

    const expectedResult = {
      regEx: [
        {
          value: `\d{1,3}`,
          msg: 'Digits 1-3'
        },
        {
          value: `^$|(?=(.*[A-Z]){3,})`,
          msg: 'You have to write minimum 3 uppercase letters'
        }
      ]
    };

    const actualResult = stockedValidation(validation);

    expect(Array.isArray(actualResult.regEx)).toBeTruthy();

    expect(actualResult).toEqual(expectedResult);
  });

  it('returned value array key should include at least one element', () => {
    const validation = {
      regEx: {
        value: `\d{1,3}`,
        msg: 'Digits 1-3'
      },
      uppercase: {
        value: 3,
        msg: 'You have to write minimum 3 uppercase letters'
      }
    };

    const expectedResult = {
      regEx: [
        {
          value: `\d{1,3}`,
          msg: 'Digits 1-3'
        },
        {
          value: `^$|(?=(.*[A-Z]){3,})`,
          msg: 'You have to write minimum 3 uppercase letters'
        }
      ]
    };

    const actualResult = stockedValidation(validation);

    expect(actualResult.regEx.length > 0).toBeTruthy();

    expect(actualResult).toEqual(expectedResult);
  });
});
