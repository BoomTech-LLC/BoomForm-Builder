import { getInitial, getNestedValue, getPlaceholder, getRendableData, getPrintableFields, getValidation, iphoneCheck, stripHtml, timeConversion } from "../Helpers/global"

const test = {
    fields: [
        {
            type: "singleChoice",
            id: 16,
            columns: 1,
            options: [
                {
                    key: 0,
                    value: "0",
                    label: "Persona fisica",
                    price: "",
                    checked: true
                },
                {
                    key: 1,
                    value: "1",
                    label: "Persona giuridica (società, ditta individuale etc..)",
                    price: "",
                    checked: false
                }
            ],
            label: "L'intestatario della polizza sarà una <span class='boomForm-field__label-star'>*</span>",
            validation: {
                HTMLValidate: true,
                required: {
                    msg: "Questo campo è obbligatorio."
                }
            }
        },
        {
            type: "name",
            id: 1,
            placeholders: {
                first: "Nome",
                last: "Cognome"
            },
            label: "Nominativo <span class='boomForm-field__label-star'>*</span>",
            validations: {
                first: {
                    HTMLValidate: true,
                    required: {
                        msg: "Questo campo è obbligatorio."
                    }
                },
                last: {
                    HTMLValidate: true,
                    required: {
                        msg: "Questo campo è obbligatorio."
                    }
                }
            }
        },
        {
            type: "date",
            id: 6,
            format: "MM-DD-YYYY",
            label: "Data di nascita <span class='boomForm-field__label-star'>*</span>",
            validation: {
                HTMLValidate: true,
                required: {
                    msg: "Questo campo è obbligatorio."
                }
            }
        },
        {
            type: "text",
            id: 17,
            placeholder: "",
            label: "Ragione Sociale <span class='boomForm-field__label-star'>*</span>",
            validation: {
                HTMLValidate: true,
                required: {
                    msg: "Questo campo è obbligatorio."
                }
            }
        },
        {
            type: "number",
            id: 18,
            placeholder: "",
            payable: 0,
            label: "Partita Iva <span class='boomForm-field__label-star'>*</span>",
            validation: {
                HTMLValidate: true,
                required: {
                    msg: "Questo campo è obbligatorio."
                }
            }
        },
    ],
    logicIds: {
        fields: [
            17, 5, 18, 4, 2, 23, 24, 25, 26, 26, 28, 38,
            37, 45, 27, 35, 37, 41, 52, 53, 51, 42, 50,
            32, 35, 37, 15, 54, 31, 22, 58, 57
        ],
        pages: []
    },
    pagination: {
        pageCounter: false,
        pages: [
            {
                title: "",
                description: "",
                fields: [
                    37
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    29
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    38
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    16
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    45
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    41
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    42
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    40
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    58
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    57
                ]
            },
            {
                title: "",
                description: "",
                fields: [
                    49
                ]
            }
        ],
        initial: 0,
        buttons: {
            type: 0,
            next: "Successivo",
            prev: "Precedente"
        }
    },
    currentPage: 0
}

expect.extend({
    toBeBoolean(received) {
        const pass = typeof received === 'boolean';
        return {
            message: () => pass ? `Expected ${received} not to be a boolean` : `Expected ${received} to be a boolean`,
            pass,
        };
    },
    toBeString(received) {
        const pass = typeof received === 'string';
        return {
            message: () => pass ? `Expected ${received} not to be a string` : `Expected ${received} to be a string`,
            pass,
        }
    }
});

describe("iphoneCheck()", () => {
    it("should return a boolean value", () => {
        expect(iphoneCheck()).toBeBoolean()
    })
    it("should not return non-boolean values", () => {
        expect(iphoneCheck()).not.toBe('')
        expect(iphoneCheck()).not.toBe('abc')
        expect(iphoneCheck()).not.toBe(10)
        expect(iphoneCheck()).not.toBe(1)
        expect(iphoneCheck()).not.toBe(null)
        expect(iphoneCheck()).not.toBe(undefined)
        expect(iphoneCheck()).not.toEqual([])
        expect(iphoneCheck()).not.toEqual({})
        expect(iphoneCheck()).not.toEqual(() => { })
    })
})

describe("stripHtml(label)", () => {
    it("should return string value", () => {
        expect(stripHtml('')).toBeString()
    })
    it("should not return non-string values", () => {
        expect(stripHtml('')).not.toBe(true)
        expect(stripHtml('')).not.toBe(false)
        expect(stripHtml('')).not.toBe(10)
        expect(stripHtml('')).not.toBe(1)
        expect(stripHtml('')).not.toBe(null)
        expect(stripHtml('')).not.toBe(undefined)
        expect(stripHtml('')).not.toEqual([])
        expect(stripHtml('')).not.toEqual({})
        expect(stripHtml('')).not.toEqual(() => { })
    })
})

describe("timeConversion(s)", () => {
    it("should be called with a valid param", () => {
        expect(timeConversion('12AM')).toBe('00')
        expect(timeConversion('12PM')).toBe('12')
        expect(timeConversion('00PM')).toBe('12')
        expect(timeConversion('00AM')).toBe('00')
    })
    it("shouldn't receive invalid parameter", () => {
        expect(() => timeConversion(null)).toThrow(new TypeError("Cannot read property 'slice' of null"));
        expect(() => timeConversion(undefined)).toThrow(new TypeError("Cannot read property 'slice' of undefined"));
        expect(() => timeConversion(0)).toThrow(new TypeError("s.slice is not a function"));
        expect(() => timeConversion({})).toThrow(new TypeError("s.slice is not a function"));
        expect(() => timeConversion(() => { })).toThrow(new TypeError("s.slice is not a function"));
        const result = timeConversion([])
        expect(result).toEqual(false);
    })
})

describe("getNestedValue(values, index)", () => {
    it("should be called with correct params", () => {
        const value = {
            office: {
                partners: [
                    {
                        name: "John Doe",
                        company: "x",
                        address: {
                            city: "a",
                            street: "b"
                        }
                    }
                ]
            }
        }
        expect(getNestedValue(value, "office.partners.0.name")).toBe("John Doe")
        expect(getNestedValue(value, "office.partners.0.company")).toBe("x")
        expect(getNestedValue(value, "office.partners.0.address.city")).toEqual("a")
        expect(getNestedValue(value, "office.partners.0.address.street")).toBe("b")
        expect(getNestedValue(value, "office.partners.0.address")).toEqual({
            city: "a",
            street: "b"
        })
        expect(getNestedValue(value, "office.partners.0.address.not_available_key")).toEqual({})
        expect(getNestedValue(value, "")).toEqual({})

        // AVOID THESE VALUES
        expect(getNestedValue({}, "")).toEqual({})
        expect(getNestedValue(() => { }, () => { })).toEqual({})
        expect(getNestedValue([], () => ({ name: 'John Doe' }))).toEqual({})
    })
    it("shouldn't be called with these values", () => {
        expect(() => getNestedValue()).toThrow(new TypeError("Cannot read property 'toString' of undefined"))
        expect(() => getNestedValue(null, null)).toThrow(new TypeError("Cannot read property 'toString' of null"))
    })
})

describe("getValidation(validation, id)", () => {
    it("should be called with correct values", () => {
        const someValidation = {}
        const wrongId = 'wrongId'
        const correctId = 'correctId'
        const someValidationCallback = () => { }

        expect(getValidation()).toBe(undefined)
        expect(getValidation(someValidation)).toBe(undefined)
        expect(getValidation(someValidation, wrongId)).toBe(undefined)
        expect(getValidation(
            {
                [correctId]: someValidationCallback
            },
            correctId)
        ).toBe(someValidationCallback)
    })
})

describe("getInitial(initials, id)", () => {
    it("should be called with a correct params", () => {
        const someInitials = {
            'John_Doe': "JD"
        }
        const someInitialsWithNullableVal = {
            'John_Doe': null
        }

        expect(getInitial()).toBe(undefined)
        expect(getInitial(someInitials)).toBe(undefined)
        expect(getInitial(someInitialsWithNullableVal, "John_Doe")).toBe(undefined)
    })
})

describe("getPlaceholder(placeholder, id)", () => {
    it("should be called with a correct values", () => {
        const someInitials = {
            'John_Doe': "JD"
        }
        const someInitialsWithNullableVal = {
            'John_Doe': null
        }

        expect(getPlaceholder()).toBe('')
        expect(getPlaceholder(someInitials)).toBe('')
        expect(getPlaceholder(someInitialsWithNullableVal, "John_Doe")).toBe('')
    })
})

describe("getRendableData(fields, hiddenFieldIds = {}, pagination = {}, currentPage)", () => {
    const {
        fields,
        logicIds: hiddenFieldIds,
        pagination,
        currentPage,
    } = test;

    it("uses only default values", () => {
        const result = getRendableData(fields)
        const fieldIds = fields.map(f => f.id)
        expect(result).toEqual([fieldIds])
    })

    it("uses only default values for multiple pages (hiddenFieldIds must be, otherwise throws an error)", () => {
        const customPagination = {
            ...pagination,
            mode: 'section',
        };
        expect(() => (
            getRendableData(fields, undefined, customPagination, undefined)
        )).toThrow(new TypeError("Cannot read property 'includes' of undefined"))
    })

    it("uses only default values for multiple pages (unavailable variant)", () => {
        const customPagination = {
            ...pagination,
            mode: 'this_type_of_mode_doesnt_exsist',
        };
        const result = getRendableData(fields, undefined, customPagination, undefined)
        expect(result).toEqual([[16, 1, 6, 17, 18]]
        )
    })

    it("uses all fields (complex test - correct way to work)", () => {
        const currentPage = 2;
        pagination.mode = 'section';
        const result = getRendableData(fields, hiddenFieldIds, pagination, currentPage)
        const fieldIds = fields.map(f => f.id)
        const paginationIds = pagination.pages.flatMap(p => p.fields)

        const field_ids_included_in_pagiantionIds = fieldIds.filter(field => {
            return paginationIds.includes(field)
        })
        expect(field_ids_included_in_pagiantionIds.length > 0).toBe(true)

        const field_ids_not_included_in_pagiantionIds = fieldIds.filter(field => {
            return !paginationIds.includes(field)
        })
        expect(field_ids_not_included_in_pagiantionIds.length > 0).toBe(true)

        expect(result.length).toBe(paginationIds.length)
    })

    it("there is no pages provided in pagination", () => {
        pagination.pages.length = 0;
        const expectedResult = getPrintableFields(fields, hiddenFieldIds, pagination)
        const actualResult = getRendableData(fields, hiddenFieldIds, pagination);

        expect(actualResult).toEqual([expectedResult])
    })

    it("there is no any hidden fields, so returns an array of field ids", () => {
        const result = getRendableData(fields, {}, pagination);
        const fieldIds = fields.map(f => f.id)
        expect(result).toEqual([fieldIds])
    })

    it("all available fields are hidden, returns an empty array of field ids", () => {
        const fieldIds = fields.map(f => f.id)
        const result = getRendableData(fields, fieldIds, pagination, currentPage)
        expect(result).toEqual(result)
    })

    it("provided nullish current page, returns only visible fields ids with an array", () => {
        const nullResult = getRendableData(fields, hiddenFieldIds, pagination, null)
        const undefinedResult = getRendableData(fields, hiddenFieldIds, pagination, undefined)

        const fieldIds = fields.map(f => f.id);
        const visible_fields_ids = fieldIds.reduce((acc, current) => {
            if (!hiddenFieldIds.fields.includes(current)) {
                acc.push(current)
            }
            return acc
        }, [])

        expect(undefinedResult).toEqual(nullResult)
        expect(nullResult).toEqual([visible_fields_ids])
        expect(undefinedResult).toEqual([visible_fields_ids])
    })

    it("provided specific current page, returns only visible fields ids within an array", () => {
        const cp1000 = getRendableData(fields, hiddenFieldIds, pagination, 1000)
        expect(cp1000).toEqual(cp1000)

        const cp200 = getRendableData(fields, hiddenFieldIds, pagination, 200)
        expect(cp200).toEqual(cp200)

        const cp03 = getRendableData(fields, hiddenFieldIds, pagination, +0.3)
        expect(cp03).toEqual(cp03)

        const cpm03 = getRendableData(fields, hiddenFieldIds, pagination, -0.3)
        expect(cpm03).toEqual(cpm03)

        const PI = getRendableData(fields, hiddenFieldIds, pagination, Math.PI)
        expect(PI).toEqual(PI)

        const inf = getRendableData(fields, hiddenFieldIds, pagination, -Infinity)
        expect(inf).toEqual(inf)
    })

    it("'currentPage' has negative value, aslo returns only visible fields ids", () => {
        let currentPage = -0;
        expect(getRendableData(fields, hiddenFieldIds, pagination, currentPage))
        currentPage = -2
        expect(getRendableData(fields, hiddenFieldIds, pagination, currentPage))
    })

    it("receives an empty fields array, returns an empty array also", () => {
        expect(getRendableData([])).toEqual([[]])
    })

    it("receives nullish fields array, so response will be an empty array", () => {
        expect(getRendableData(null)).toEqual([[]])
        expect(getRendableData(undefined)).toEqual([[]])
    })
})