import {
  getHiddenIds,
  conditionalLogic,
  getFieldValue,
  actionHandler,
  getUpdatableFields
} from '../Helpers/logic';

describe('getUpdatableFields', () => {
  it('should return an empty array when logic is empty', () => {
    const logic = [];
    const result = getUpdatableFields({ logic });
    expect(result).toEqual([]);
  });

  it('should return an array of ids without items when logic has no "item"', () => {
    const logic = [
      { conditions: [{ id: 'field1' }, { id: 'field2' }] },
      { conditions: [{ id: 'field3' }] }
    ];
    const result = getUpdatableFields({ logic });
    expect(result).toEqual(['field1', 'field2', 'field3']);
  });

  it('should return an array of ids with items when logic has "item"', () => {
    const logic = [
      { conditions: [{ id: 'field1', item: 'subitem1' }, { id: 'field2' }] },
      { conditions: [{ id: 'field3', item: 'subitem2' }] }
    ];
    const result = getUpdatableFields({ logic });
    expect(result).toEqual(['field1.subitem1', 'field2', 'field3.subitem2']);
  });

  it('should return an array of ids with only "item" when logic has only "item"', () => {
    const logic = [
      {
        conditions: [
          { id: 'field1', item: 'subitem1' },
          { id: 'field2', item: 'subitem2' }
        ]
      },
      { conditions: [{ id: 'field3', item: 'subitem3' }] }
    ];
    const result = getUpdatableFields({ logic });
    expect(result).toEqual([
      'field1.subitem1',
      'field2.subitem2',
      'field3.subitem3'
    ]);
  });
});

describe('actionHandler', () => {
  let hiddenFields = { fields: [], pages: [] };
  const formRef = { current: {} };
  const handlers = {
    onConditionTrue: jest.fn(),
    onConditionFalse: jest.fn()
  };

  beforeEach(() => {
    hiddenFields = { fields: [], pages: [] };
    handlers.onConditionTrue.mockClear();
    handlers.onConditionFalse.mockClear();
  });

  it('should add id to hiddenFields.fields array when action is "show"', () => {
    const id = 'field1';
    const hidFields = actionHandler(
      id,
      'show',
      '',
      true,
      hiddenFields,
      null,
      null
    );
    expect(hiddenFields.fields).toEqual(hidFields.fields);
  });

  it('should add id to hiddenFields.pages array when action is "show_page"', () => {
    const id = 'page1';
    const hidFields = actionHandler(
      id,
      'show_page',
      '',
      true,
      hiddenFields,
      null,
      null
    );
    expect(hiddenFields.pages).toEqual(hidFields.pages);
  });

  it('should remove id from hiddenFields.fields array when isMatch is true and action is "show"', () => {
    const id = 'field1';
    hiddenFields.fields.push(id);
    actionHandler(id, 'show', '', true, hiddenFields, null, null);
    expect(hiddenFields.fields).toEqual([id]);
  });

  it('should add id to hiddenFields.pages array when isMatch is true and action is "hide_page"', () => {
    const id = 'page1';
    //   hiddenFields.pages.push(id);
    actionHandler(id, 'hide_page', '', true, hiddenFields, null, null);
    expect(hiddenFields.pages).toEqual([id]);
  });

  it('should remove id from hiddenFields.pages array when isMatch is true and action is "show_page"', () => {
    const id = 'page1';
    hiddenFields.pages.push(id);
    actionHandler(id, 'show_page', '', true, hiddenFields, null, null);
    expect(hiddenFields.pages).toEqual([]);
  });

  it('should call onConditionTrue with formRef.current when isMatch is true and action is "callback"', () => {
    const id = 'field1';
    actionHandler(id, 'callback', '', true, hiddenFields, handlers, formRef);
    expect(handlers.onConditionTrue).toHaveBeenCalledWith(formRef.current);
  });

  it('should add id to hiddenFields.fields array when isMatch is false, operator is "and", and action is "hide"', () => {
    const id = 'field1';
    hiddenFields.fields.push(id);
    actionHandler(id, 'hide', 'and', false, hiddenFields, null, null);
    expect(hiddenFields.fields).toEqual([]);
  });

  it('should call onConditionFalse with formRef.current when isMatch is false and action is "callback"', () => {
    const id = 'field1';
    actionHandler(id, 'callback', '', false, hiddenFields, handlers, formRef);
    expect(handlers.onConditionFalse).toHaveBeenCalledWith(formRef.current);
  });

  it('should return true when operator is "or" and action is "show"', () => {
    const id = 'field1';
    const result = actionHandler(
      id,
      'show',
      'or',
      true,
      hiddenFields,
      null,
      null
    );
    expect(result).toBe(true);
  });

  it('should return true when operator is "or" and action is not "show"', () => {
    const id = 'field1';
    const result = actionHandler(
      id,
      'hide',
      'or',
      true,
      hiddenFields,
      null,
      null
    );
    expect(result).toBe(true);
  });

  it('should return true when operator is "and" and action is "hide"', () => {
    const id = 'field1';
    const result = actionHandler(
      id,
      'hide',
      'and',
      false,
      hiddenFields,
      null,
      null
    );
    expect(result).toBe(true);
  });

  it('should return null for unknown action', () => {
    const id = 'field1';
    const result = actionHandler(
      id,
      'unknown_action',
      '',
      true,
      hiddenFields,
      null,
      null
    );
    expect(result).toBe(undefined);
  });
});

describe('getFieldValue', () => {
  // Test case for 'select'
  it('should return correct value for type "select"', () => {
    const value = { key: 'option1', value: 'Value1' };
    const field = {
      options: [
        { key: 'option1', value: 'Value1' },
        { key: 'option2', value: 'Value2' }
      ]
    };
    const result = getFieldValue('select', value, field);
    expect(result).toBe('Value1');
  });

  // Test case for 'phone'
  it('should return formatted phone number for type "phone"', () => {
    const value = { code: '+1', phone: '1234567890' };
    const result = getFieldValue('phone', value);
    expect(result).toBe('+11234567890');
  });

  // Test case for 'time'
  it('should return formatted time for type "time"', () => {
    const value = { hour: '12', minute: '30', format: { value: 'AM' } };
    const result = getFieldValue('time', value);
    expect(result).toBe('12 : 30 AM');
  });

  // Test case for 'signature'
  it('should return signature URL for type "signature"', () => {
    const value = { url: 'https://example.com/signature.jpg' };
    const result = getFieldValue('signature', value);
    expect(result).toBe('https://example.com/signature.jpg');
  });

  // Test case for 'singleChoice'
  it('should return label for selected value for type "singleChoice"', () => {
    const value = 'option2';
    const field = {
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' }
      ]
    };
    const result = getFieldValue('singleChoice', value, field);
    expect(result).toBe('Option 2');
  });

  // Test case for 'name' and 'address'
  it('should return correct value for type "name" or "address"', () => {
    const value = { firstName: 'testName', lastName: 'testLastName' };
    const result = getFieldValue('name', value, null, null, 'firstName');
    expect(result).toBe('testName');
  });

  // Test case for 'price'
  it('should return formatted price for type "price"', () => {
    const value = { first: '10', last: '99' };
    const result = getFieldValue('price', value);
    expect(result).toBe('10.99');
  });

  // Test case for 'terms'
  it('should return "checked" for type "terms" if true, "not checked" if false', () => {
    const value = true;
    const result = getFieldValue('terms', value);
    expect(result).toBe('checked');
  });

  it('should return "not checked" for type "terms" if false', () => {
    const value = false;
    const result = getFieldValue('terms', value);
    expect(result).toBe('not checked');
  });

  // Test case for 'file'
  it('should return comma-separated file names for type "file"', () => {
    const value = [{ name: 'file1.pdf' }, { name: 'file2.jpg' }];
    const result = getFieldValue('file', value);
    expect(result).toBe('file1.pdf , file2.jpg ');
  });

  // Test case for 'multipleChoice'
  it('should return array of selected options for type "multipleChoice"', () => {
    const value = { option1: true, option2: false, option3: true };
    const field = {
      options: [
        { key: 'option1', label: 'Option 1' },
        { key: 'option2', label: 'Option 2' },
        { key: 'option3', label: 'Option 3' }
      ]
    };
    const result = getFieldValue('multipleChoice', value, field, true);
    expect(result).toEqual([
      { key: 'option1', label: 'Option 1' },
      { key: 'option3', label: 'Option 3' }
    ]);
  });

  // Test case for default case
  it('should return the original value for unknown type', () => {
    const value = 'Unknown Value';
    const result = getFieldValue('unknownType', value);
    expect(result).toBe('Unknown Value');
  });
});

describe('getHiddenIds', () => {
  it('should return hiddenFields with fields and pages as empty arrays when logic is empty', () => {
    const result = getHiddenIds({
      logic: [],
      values: {},
      fields: [],
      formRef: {}
    });
    expect(result).toEqual({ fields: [], pages: [] });
  });

  it('should return hiddenFields with fields and pages based on logic conditions', () => {
    const logic = [
      {
        action: 'show',
        conditions: [
          { id: 'field1', value: 'value1', rule: 'is' },
          { id: 'field2', value: 'value2', rule: 'is' }
        ],
        operator: 'and',
        id: 'action1',
        handlers: {}
      },
      {
        action: 'hide_page',
        conditions: [{ id: 'field3', value: 'value3', rule: 'is' }],
        operator: 'and',
        id: 'action2',
        handlers: {}
      }
    ];

    const values = {
      field1: 'value1',
      field2: 'value2',
      field3: 'value3'
    };

    const fields = [
      { id: 'field1', type: 'text' },
      { id: 'field2', type: 'text' },
      { id: 'field3', type: 'text' }
    ];

    const formRef = {};

    const result = getHiddenIds({ logic, values, fields, formRef });

    expect(result).toEqual({
      fields: [],
      pages: ['action2']
    });
  });

  it('should handle nested values in conditions', () => {
    const logic = [
      {
        action: 'show',
        conditions: [
          { id: 'nested.field1', value: 'value1', rule: 'is' },
          { id: 'nested.field2', value: 'value2', rule: 'is' }
        ],
        operator: 'and',
        id: 'action1',
        handlers: {}
      }
    ];

    const values = {
      nested: {
        field1: 'value1',
        field2: 'value2'
      }
    };

    const fields = [
      { id: 'nested.field1', type: 'text' },
      { id: 'nested.field2', type: 'text' }
    ];

    const formRef = {};

    const result = getHiddenIds({ logic, values, fields, formRef });

    expect(result).toEqual({
      fields: [],
      pages: []
    });
  });

  it('should return empty arrays when conditions do not match', () => {
    const logic = [
      {
        action: 'hide_page',
        conditions: [
          { id: 'field1', value: 'value1', rule: 'is' },
          { id: 'field2', value: 'value2', rule: 'is' }
        ],
        operator: 'and',
        id: 'action1',
        handlers: {}
      }
    ];

    const values = {
      field1: 'value3',
      field2: 'value4'
    };

    const fields = [
      { id: 'field1', type: 'text' },
      { id: 'field2', type: 'text' }
    ];

    const formRef = {};

    const result = getHiddenIds({ logic, values, fields, formRef });

    expect(result).toEqual({
      fields: [],
      pages: []
    });
  });
});

describe('conditionalLogic', () => {
  // Test case for 'is'
  it('should return true if fieldValue is equal to value', () => {
    const result = conditionalLogic({ fieldValue: 5, value: 5, rule: 'is' });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue is not equal to value', () => {
    const result = conditionalLogic({ fieldValue: 5, value: 10, rule: 'is' });
    expect(result).toBe(false);
  });

  // Test case for 'isNot'
  it('should return true if fieldValue is not equal to value', () => {
    const result = conditionalLogic({
      fieldValue: 5,
      value: 10,
      rule: 'isNot'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue is equal to value', () => {
    const result = conditionalLogic({ fieldValue: 5, value: 5, rule: 'isNot' });
    expect(result).toBe(false);
  });

  // Test case for 'starts'
  it('should return true if fieldValue starts with value', () => {
    const result = conditionalLogic({
      fieldValue: 'hello',
      value: 'he',
      rule: 'starts'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue does not start with value', () => {
    const result = conditionalLogic({
      fieldValue: 'hello',
      value: 'lo',
      rule: 'starts'
    });
    expect(result).toBe(false);
  });

  // Test case for 'contains'
  it('should return true if fieldValue contains value', () => {
    const result = conditionalLogic({
      fieldValue: 'hello',
      value: 'ell',
      rule: 'contains'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue does not contain value', () => {
    const result = conditionalLogic({
      fieldValue: 'hello',
      value: 'abc',
      rule: 'contains'
    });
    expect(result).toBe(false);
  });

  // Test case for 'ends'
  it('should return true if fieldValue ends with value', () => {
    const result = conditionalLogic({
      fieldValue: 'hello',
      value: 'lo',
      rule: 'ends'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue does not end with value', () => {
    const result = conditionalLogic({
      fieldValue: 'hello',
      value: 'he',
      rule: 'ends'
    });
    expect(result).toBe(false);
  });

  // Test case for 'greater'
  it('should return true if fieldValue is greater than value', () => {
    const result = conditionalLogic({
      fieldValue: 10,
      value: 5,
      rule: 'greater'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue is not greater than value', () => {
    const result = conditionalLogic({
      fieldValue: 5,
      value: 10,
      rule: 'greater'
    });
    expect(result).toBe(false);
  });

  // Test case for 'less'
  it('should return true if fieldValue is less than value', () => {
    const result = conditionalLogic({ fieldValue: 5, value: 10, rule: 'less' });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue is not less than value', () => {
    const result = conditionalLogic({ fieldValue: 10, value: 5, rule: 'less' });
    expect(result).toBe(false);
  });

  // Test case for 'checked'
  it('should return true if fieldValue is checked with value', () => {
    const fieldValue = [
      { key: 'option1', value: 'Value1' },
      { key: 'other', value: 'Value2' }
    ];
    const result = conditionalLogic({
      fieldValue,
      value: 'Value2',
      rule: 'checked',
      field: { options: [] }
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue is not checked with value', () => {
    const fieldValue = [
      { key: 'option1', value: 'Value1' },
      { key: 'other', value: 'Value2' }
    ];
    const result = conditionalLogic({
      fieldValue,
      value: 'Value3',
      rule: 'checked',
      field: { options: [] }
    });
    expect(result).toBe(false);
  });

  // Test case for 'doNotChecked'
  it('should return true if fieldValue is not checked with value', () => {
    const fieldValue = { option2: false, option3: false };
    const result = conditionalLogic({
      fieldValue,
      value: 'Value1',
      rule: 'doNotChecked',
      field: { options: [{ key: 'option2', value: 'Value1' }] }
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue is checked with value', () => {
    const fieldValue = { option2: true, option3: false };
    const result = conditionalLogic({
      fieldValue,
      value: 'Value1',
      rule: 'doNotChecked',
      field: { options: [{ key: 'option2', value: 'Value1' }] }
    });
    expect(result).toBe(false);
  });

  // Test case for 'checkedMore'
  it('should return true if fieldValue has more checked items than value', () => {
    const fieldValue = { option1: true, option2: true, option3: false };
    const result = conditionalLogic({
      fieldValue,
      value: '1',
      rule: 'checkedMore'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue does not have more checked items than value', () => {
    const fieldValue = { option1: true, option2: true, option3: false };
    const result = conditionalLogic({
      fieldValue,
      value: '3',
      rule: 'checkedMore'
    });
    expect(result).toBe(false);
  });

  // Test case for 'checkedLess'
  it('should return true if fieldValue has less checked items than value', () => {
    const fieldValue = { option1: true, option2: true, option3: false };
    const result = conditionalLogic({
      fieldValue,
      value: '3',
      rule: 'checkedLess'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue does not have less checked items than value', () => {
    const fieldValue = { option1: true, option2: true, option3: false };
    const result = conditionalLogic({
      fieldValue,
      value: '2',
      rule: 'checkedLess'
    });
    expect(result).toBe(false);
  });

  // Test case for 'checkedEqual'
  it('should return true if fieldValue has equal number of checked items as value', () => {
    const fieldValue = { option1: true, option2: true, option3: false };
    const result = conditionalLogic({
      fieldValue,
      value: '2',
      rule: 'checkedEqual'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue does not have equal number of checked items as value', () => {
    const fieldValue = { option1: true, option2: true, option3: false };
    const result = conditionalLogic({
      fieldValue,
      value: '3',
      rule: 'checkedEqual'
    });
    expect(result).toBe(false);
  });

  // Test case for 'doesNotContain'
  it('should return true if fieldValue does not contain value', () => {
    const result = conditionalLogic({
      fieldValue: 'hello',
      value: 'abc',
      rule: 'doesNotContain'
    });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue contains value', () => {
    const result = conditionalLogic({
      fieldValue: 'hello',
      value: 'ell',
      rule: 'doesNotContain'
    });
    expect(result).toBe(false);
  });

  // Test case for 'isEmpty'
  it('should return true if fieldValue is empty', () => {
    const result = conditionalLogic({ fieldValue: '', rule: 'isEmpty' });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue is not empty', () => {
    const result = conditionalLogic({ fieldValue: 'hello', rule: 'isEmpty' });
    expect(result).toBe(false);
  });

  // Test case for 'isFilled'
  it('should return true if fieldValue is filled', () => {
    const result = conditionalLogic({ fieldValue: 'hello', rule: 'isFilled' });
    expect(result).toBe(true);
  });

  it('should return false if fieldValue is not filled', () => {
    const result = conditionalLogic({ fieldValue: '', rule: 'isFilled' });
    expect(result).toBe(false);
  });
});
