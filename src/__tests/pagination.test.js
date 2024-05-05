import { getNextPageIndex, getPrevPageIndex } from '../Helpers/pagination';

const test = {
  fields: [
    {
      type: 'singleChoice',
      id: 16,
      columns: 1,
      options: [
        {
          key: 0,
          value: '0',
          label: 'Persona fisica',
          price: '',
          checked: true
        },
        {
          key: 1,
          value: '1',
          label: 'Persona giuridica (società, ditta individuale etc..)',
          price: '',
          checked: false
        }
      ],
      label:
        "L'intestatario della polizza sarà una <span class='boomForm-field__label-star'>*</span>",
      validation: {
        HTMLValidate: true,
        required: {
          msg: 'Questo campo è obbligatorio.'
        }
      }
    },
    {
      type: 'name',
      id: 1,
      placeholders: {
        first: 'Nome',
        last: 'Cognome'
      },
      label: "Nominativo <span class='boomForm-field__label-star'>*</span>",
      validations: {
        first: {
          HTMLValidate: true,
          required: {
            msg: 'Questo campo è obbligatorio.'
          }
        },
        last: {
          HTMLValidate: true,
          required: {
            msg: 'Questo campo è obbligatorio.'
          }
        }
      }
    },
    {
      type: 'date',
      id: 6,
      format: 'MM-DD-YYYY',
      label:
        "Data di nascita <span class='boomForm-field__label-star'>*</span>",
      validation: {
        HTMLValidate: true,
        required: {
          msg: 'Questo campo è obbligatorio.'
        }
      }
    },
    {
      type: 'text',
      id: 17,
      placeholder: '',
      label:
        "Ragione Sociale <span class='boomForm-field__label-star'>*</span>",
      validation: {
        HTMLValidate: true,
        required: {
          msg: 'Questo campo è obbligatorio.'
        }
      }
    },
    {
      type: 'number',
      id: 18,
      placeholder: '',
      payable: 0,
      label: "Partita Iva <span class='boomForm-field__label-star'>*</span>",
      validation: {
        HTMLValidate: true,
        required: {
          msg: 'Questo campo è obbligatorio.'
        }
      }
    }
  ],
  logicIds: {
    fields: [
      17, 5, 18, 4, 2, 23, 24, 25, 26, 26, 28, 38, 37, 45, 27, 35, 37, 41, 52,
      53, 51, 42, 50, 32, 35, 37, 15, 54, 31, 22, 58, 57
    ],
    pages: [10, 23, 26, 11]
  },
  pagination: {
    pageCounter: false,
    pages: [
      {
        title: '',
        description: '',
        fields: [37]
      },
      {
        title: '',
        description: '',
        fields: [29]
      },
      {
        title: '',
        description: '',
        fields: [38]
      },
      {
        title: '',
        description: '',
        fields: [16]
      },
      {
        title: '',
        description: '',
        fields: [45]
      },
      {
        title: '',
        description: '',
        fields: [41]
      },
      {
        title: '',
        description: '',
        fields: [42]
      },
      {
        title: '',
        description: '',
        fields: [40]
      },
      {
        title: '',
        description: '',
        fields: [58]
      },
      {
        title: '',
        description: '',
        fields: [61]
      },
      {
        title: '',
        description: '',
        fields: [49]
      }
    ],
    initial: 0,
    buttons: {
      type: 0,
      next: 'Successivo',
      prev: 'Precedente'
    }
  },
  currentPage: 0
};

describe('getPrevPageIndex({ pagination, logicIds, currentPage })', () => {
  it('pagination not provided, returns undefined as a default value of prevoius page', () => {
    const { pagination, logicIds, currentPage } = { ...test };
    const actualResult = getPrevPageIndex({
      pagination: null,
      logicIds,
      currentPage: 1
    });
    const expectedResult = undefined;
    expect(actualResult).toBe(expectedResult);
  });

  it("current page is '0', so as result it returns undefined as a default value of previous page", () => {
    const { pagination, logicIds, currentPage } = { ...test };
    const actualResult = getPrevPageIndex({
      pagination,
      logicIds,
      currentPage: 0
    });
    const expectedResult = undefined;
    expect(actualResult).toBe(expectedResult);
  });

  it('for valid case returns some page id that is visible and that has at least one visible field', () => {
    const { pagination, logicIds, currentPage } = { ...test };
    const actualResult = getPrevPageIndex({
      pagination,
      logicIds,
      currentPage: 12
    });
    const expectedResult = '9'; // correct only for test data provided before
    expect(actualResult).toBe(expectedResult);
  });

  it("pagination should provide pages array, otherwise it gonna return 'undefined' as a default value", () => {
    const { pagination, logicIds, currentPage } = { ...test };
    const pagination_without_pages = {
      ...pagination,
      pages: null
    };
    const actualResult = getPrevPageIndex({
      pagination: pagination_without_pages,
      logicIds,
      currentPage
    });
    expect(actualResult).toBe(undefined);
  });

  it("if previous page would be hidden, it should return 'undefined' by default", () => {
    const { pagination } = { ...test };
    const logicIds = {
      fields: [...test.logicIds.fields],
      pages: [0, 1, 2, 3, 4, 5]
    };
    const currentPage = 6;
    const actualResult = getPrevPageIndex({
      pagination,
      logicIds,
      currentPage
    });
    const expectedResult = undefined;
    expect(actualResult).toBe(expectedResult);
  });
});

describe('getNextPageIndex({ pagination, logicIds, currentPage })', () => {
  it('pagination not provided, returns undefined as a default value of next page', () => {
    const { pagination, logicIds, currentPage } = { ...test };
    const actualResult = getNextPageIndex({
      pagination: null,
      logicIds,
      currentPage: 1
    });
    const expectedResult = undefined;
    expect(actualResult).toBe(expectedResult);
  });

  it('current page is the last one, so as a result it returns undefined as a default value of next page', () => {
    const { pagination, logicIds, currentPage } = { ...test };
    const lastPage = pagination.pages[pagination.pages.length - 1];

    const actualResult = getNextPageIndex({
      pagination,
      logicIds,
      currentPage: lastPage
    });
    const expectedResult = undefined;
    expect(actualResult).toBe(expectedResult);
  });

  it('for valid case returns some page id that is visible and that has at least one visible field', () => {
    const { pagination, logicIds, currentPage } = { ...test };

    const actualResult = getNextPageIndex({
      pagination,
      logicIds,
      currentPage: 8
    });
    const expectedResult = '9'; // correct only for test data provided before
    expect(actualResult).toBe(expectedResult);
  });

  it("if next page would be hidden, it should return 'undefined' by default", () => {
    const { pagination } = { ...test };
    const logicIds = {
      fields: [...test.logicIds.fields],
      pages: [0, 1, 2, 3, 4, 5]
    };
    const currentPage = 5;

    const actualResult = getNextPageIndex({
      pagination,
      logicIds,
      currentPage
    });
    const expectedResult = undefined;
    expect(expectedResult).toBe(expectedResult);
  });
});
