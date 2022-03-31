import React, { useState } from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const [total, setTotal] = useState(0)

  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription',
        isPrint: true
      }}
      payment={{
        setTotal,
        total
      }}
      fields={[
        {
          type: 'select',
          id: 6,
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            {
              key: 0,
              value: 'Diamond Donor($100,000 or more)',
              label: 'Diamond Donor($100,000 or more)',
              price: null
            },
            {
              key: 1,
              value: 'Platinum Donor($50,000 – $99,999)',
              label: 'Platinum Donor($50,000 – $99,999)',
              price: null
            },
            {
              key: 2,
              value: 'Gold Donor($25,000 - $49,999)',
              label: 'Gold Donor($25,000 - $49,999)',
              price: ''
            },
            {
              key: 3,
              value: 'Silver Donor($10,000 - $24,999)',
              label: 'Silver Donor($10,000 - $24,999)'
            },
            {
              key: 4,
              value: 'Grand Patron($5,000 - $9,999)',
              label: 'Grand Patron($5,000 - $9,999)'
            },
            {
              key: 5,
              value: 'Patron($2,500 – $4,999)',
              label: 'Patron($2,500 – $4,999)'
            },
            {
              key: 6,
              value: 'Benefactor($1,000 - $2,499)',
              label: 'Benefactor($1,000 - $2,499)'
            }
          ],
          payable: 1,
          label:
            "Donor Category <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'price',
          id: 52,
          placeholders: { first: 'Dollars', last: '' },
          payable: 'collect',
          prefix: '$',
          label: "Amount <span class='boomForm-field__label-star'>*</span>",
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'price',
          id: 51,
          placeholders: { first: 'Dollars', last: '' },
          payable: 'collect',
          prefix: '$',
          label: "Amount <span class='boomForm-field__label-star'>*</span>",
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' },
              min: {
                msg: 'Please enter a value between 50000 and 99999.',
                value: 50000,
                type: 'number'
              },
              max: {
                msg: 'Please enter a value between 50000 and 99999.',
                value: 99999,
                type: 'number'
              }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'price',
          id: 50,
          placeholders: { first: 'Dollars', last: '' },
          payable: 'collect',
          prefix: '$',
          label: "Amount <span class='boomForm-field__label-star'>*</span>",
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' },
              min: {
                msg: 'Please enter a value between 25000 and 49999.',
                value: 25000,
                type: 'number'
              },
              max: {
                msg: 'Please enter a value between 25000 and 49999.',
                value: 49999,
                type: 'number'
              }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'price',
          id: 49,
          placeholders: { first: 'Dollars', last: '' },
          payable: 'collect',
          prefix: '$',
          label: "Amount <span class='boomForm-field__label-star'>*</span>",
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' },
              min: {
                msg: 'Please enter a value between 10000 and 24999.',
                value: 10000,
                type: 'number'
              },
              max: {
                msg: 'Please enter a value between 10000 and 24999.',
                value: 24999,
                type: 'number'
              }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'price',
          id: 48,
          placeholders: { first: 'Dollars', last: '' },
          payable: 'collect',
          prefix: '$',
          label: "Amount <span class='boomForm-field__label-star'>*</span>",
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' },
              min: {
                msg: 'Please enter a value between 5000 and 9999.',
                value: 5000,
                type: 'number'
              },
              max: {
                msg: 'Please enter a value between 5000 and 9999.',
                value: 9999,
                type: 'number'
              }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'price',
          id: 47,
          placeholders: { first: 'Dollars', last: '' },
          payable: 'collect',
          prefix: '$',
          label: "Amount <span class='boomForm-field__label-star'>*</span>",
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' },
              min: {
                msg: 'Please enter a value between 2500 and 4999.',
                value: 2500,
                type: 'number'
              },
              max: {
                msg: 'Please enter a value between 2500 and 4999.',
                value: 4999,
                type: 'number'
              }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'price',
          id: 8,
          placeholders: { first: 'Dollars', last: '' },
          payable: 'collect',
          prefix: '$',
          label: "Amount <span class='boomForm-field__label-star'>*</span>",
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' },
              min: {
                msg: 'Please enter a value between 1000 and 2499.',
                value: 1000,
                type: 'number'
              },
              max: {
                msg: 'Please enter a value between 1000 and 2499.',
                value: 2499,
                type: 'number'
              }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'name',
          id: 1,
          placeholders: { first: 'First Name', last: 'Last Name' },
          label: "Name <span class='boomForm-field__label-star'>*</span>",
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'just',
          id: 21,
          value: {
            value:
              '<h3>Family Members Details</h3>Please fill the family members details.'
          }
        },
        {
          type: 'text',
          id: 22,
          placeholder: '',
          label: 'Family Member Name',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'number',
          id: 23,
          placeholder: '',
          payable: 0,
          label: 'Age',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 42,
          placeholder: '',
          label: 'Gender',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 19,
          placeholder: '',
          label: 'Relationship with Donor',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 26,
          placeholder: '',
          label: 'Family Member Name',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'number',
          id: 27,
          placeholder: '',
          payable: 0,
          label: 'Age',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 43,
          placeholder: '',
          label: 'Gender',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 33,
          placeholder: '',
          label: 'Relationship with Donor',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 30,
          placeholder: '',
          label: 'Family Member Name',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'number',
          id: 31,
          placeholder: '',
          payable: 0,
          label: 'Age',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 45,
          placeholder: '',
          label: 'Gender',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 44,
          placeholder: '',
          label: 'Relationship with Donor',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 34,
          placeholder: '',
          label: 'Family Member Name',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'number',
          id: 35,
          placeholder: '',
          payable: 0,
          label: 'Age',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 46,
          placeholder: '',
          label: 'Gender',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 37,
          placeholder: '',
          label: 'Relationship with Donor',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 16,
          placeholder: '',
          label: 'Family Member Name',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'number',
          id: 17,
          placeholder: '',
          payable: 0,
          label: 'Age',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 41,
          placeholder: '',
          label: 'Gender',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 29,
          placeholder: '',
          label: 'Relationship with Donor',
          classnameprefix: 'one-fourth',
          validation: { HTMLValidate: true }
        },
        {
          type: 'address',
          id: 5,
          placeholders: {
            street: 'Address Line 1',
            street2: 'Address Line 2(Opt)',
            state: 'State / Region',
            city: 'City',
            zip: 'Postal / Zip Code'
          },
          defaultCountry: 229,
          label: "Address <span class='boomForm-field__label-star'>*</span>",
          hide: [],
          validations: {
            city: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            },
            country: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            },
            state: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            },
            street: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            },
            zip: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          }
        },
        {
          type: 'number',
          id: 13,
          placeholder: '',
          payable: 0,
          label:
            "Phone Number <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' },
            min: {
              msg: 'Please enter a value between 10 and 10.',
              value: 10,
              type: 'length'
            },
            max: {
              msg: 'Please enter a value between 10 and 10.',
              value: 10,
              type: 'length'
            }
          }
        },
        {
          type: 'email',
          id: 2,
          placeholder: 'Email',
          label: "Email <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            email: { msg: 'Please enter a valid Email address.' },
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'textarea',
          id: 3,
          height: '60px',
          placeholder: 'Your Comments',
          label:
            "Your Comments <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' },
            min: {
              msg: 'Please enter a value between {0} and {1}.',
              value: null,
              type: 'length'
            },
            max: {
              msg: 'Please enter a value between {0} and {1}.',
              value: null,
              type: 'length'
            }
          }
        },
        {
          type: 'singleChoice',
          id: 39,
          columns: '0',
          options: [
            {
              key: 0,
              value: '0',
              label: 'Online Payment',
              price: '',
              checked: false
            }
          ],
          label:
            "Payment Method <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        }
      ]}
      logic={[
        {
          id: 52,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 6,
              rule: 'is',
              item: null,
              value: 'Diamond Donor($100,000 or more)'
            }
          ]
        },
        {
          id: 51,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 6,
              rule: 'is',
              item: null,
              value: 'Platinum Donor($50,000 – $99,999)'
            }
          ]
        },
        {
          id: 50,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 6,
              rule: 'is',
              item: null,
              value: 'Gold Donor($25,000 - $49,999)'
            }
          ]
        },
        {
          id: 49,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 6,
              rule: 'is',
              item: null,
              value: 'Silver Donor($10,000 - $24,999)'
            }
          ]
        },
        {
          id: 48,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 6,
              rule: 'is',
              item: null,
              value: 'Grand Patron($5,000 - $9,999)'
            }
          ]
        },
        {
          id: 47,
          action: 'show',
          operator: 'and',
          conditions: [
            { id: 6, rule: 'is', item: null, value: 'Patron($2,500 – $4,999)' }
          ]
        },
        {
          id: 8,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 6,
              rule: 'is',
              item: null,
              value: 'Benefactor($1,000 - $2,499)'
            }
          ]
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
