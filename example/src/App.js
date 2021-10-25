import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Pagination And Shit',
        pagination: false,
        print: true,
        logic: true,
        innerComponent: ({ ...state }) => console.log(state),
        captcha: '6Ldlgb8UAAAAABF24ciRo57EtSyDxt-1zri0tk7b'
      }}
      fields={[
        {
          type: 'text',
          id: 10,
          placeholder: '',
          label: 'Textbox',
          validation: {}
        },
        {
          type: 'textarea',
          id: 11,
          height: '60',
          placeholder: '',
          label: 'Comments',
          validation: {}
        },
        {
          type: 'name',
          id: 12,
          placeholders: { first: 'First', last: 'Last', middle: 'Middle' },
          label: 'Name',
          validations: {}
        },
        {
          type: 'address',
          id: 13,
          placeholders: {
            zip: 'Postal/Zip Code',
            state: 'State / Region',
            street: 'Street Adress',
            street2: 'Street Adress 2',
            city: 'City',
            region: 'State / Region',
            zipcode: 'Postal/Zip Code'
          },
          defaultCountry: 12,
          label: 'Address',
          hide: [],
          validations: {}
        },
        {
          type: 'number',
          id: 14,
          placeholder: '',
          payable: 0,
          label: 'Number',
          validation: {}
        },
        {
          type: 'email',
          id: 15,
          placeholder: '',
          label: 'Email',
          validation: { email: { msg: 'Please enter a valid Email address.' } }
        },
        {
          type: 'phone',
          id: 16,
          defaultCountryCode: 'AM',
          placeholder: '',
          label: 'Phone',
          validation: {}
        },
        {
          type: 'url',
          id: 17,
          placeholder: '',
          label: 'Website',
          validation: { url: { msg: 'Please enter a valid URL.' } }
        },
        {
          type: 'date',
          id: 18,
          format: 'MM-DD-YYYY',
          label: 'Date',
          validation: {}
        },
        {
          type: 'time',
          id: 19,
          format: 'am/pm',
          label: 'Time',
          validations: {
            hour: {
              max: {
                type: 'number',
                value: 24,
                msg: 'Please enter a value between 0 and 24.'
              }
            },
            minute: {
              max: {
                type: 'number',
                value: 59,
                msg: 'Please enter a value between 0 and 59.'
              }
            }
          }
        },
        {
          type: 'multipleChoice',
          label: 'checkbox',
          id: 20,
          columns: 1,
          options: [
            {
              key: 0,
              value: 'option1',
              label: 'option1  ',
              price: '',
              checked: false
            },
            {
              key: 1,
              value: 'option2',
              label: 'option2  ',
              price: '',
              checked: false
            },
            {
              key: 2,
              value: 'option3',
              label: 'option3  ',
              price: '',
              checked: false
            },
            {
              key: 'other',
              value: 'Other',
              label: 'Other',
              placeholder: 'Other',
              checked: false
            }
          ],
          label: 'Select Some Choices',
          validation: {}
        },
        {
          type: 'singleChoice',
          id: 21,
          columns: 1,
          options: [
            {
              key: 0,
              value: 'option1',
              label: 'option1  ',
              price: '',
              checked: false
            },
            {
              key: 1,
              value: 'option2',
              label: 'option2  ',
              price: '',
              checked: false
            },
            {
              key: 2,
              value: 'option3',
              label: 'option3  ',
              price: '',
              checked: false
            }
          ],
          label: 'Select Single Choice',
          validation: {}
        },
        {
          type: 'select',
          id: 22,
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            { key: 0, value: 'option1', label: 'option1  ', price: '' },
            { key: 1, value: 'option2', label: 'option2  ', price: '' },
            { key: 2, value: 'option3', label: 'option3  ', price: '' },
            { key: 'other', value: 'option3', label: 'option3  ', price: '' }
          ],
          payable: 1,
          label: 'Dropdown',
          validation: {}
        },
        {
          type: 'just',
          id: 23,
          label: 'Text',
          value: {
            value:
              '<h3>Section Break</h3>A description of the section goes here.'
          }
        },
        {
          type: 'price',
          id: 24,
          placeholders: { first: 'Dollars', last: 'Cents' },
          payable: 0,
          prefix: '$',
          label: 'Price',
          validations: { first: {}, last: {} }
        },
        {
          type: 'map',
          id: 25,
          apiKey: 'AIzaSyAnaT_v4wuB2p_9M2sbriWcIGD2gclaqAs',
          lat: -21.8926266,
          lng: -41.3909684,
          mapType: 0,
          markers: [
            {
              id: 1,
              value: 'Rio',
              description: 'Dream City',
              position: { lat: -22.908333, lng: -43.196388 }
            }
          ],
          zoom: 4,
          height: '200px',
          label: 'Map'
        },
        {
          type: 'starRating',
          id: 26,
          color: 'orange',
          zoom: '30px',
          shape: 'star',
          area: '5px',
          count: '5',
          label: 'Rating',
          validation: {}
        },
        {
          type: 'scaleRating',
          id: 27,
          min: 1,
          max: 5,
          postFix: 'Best',
          preFix: 'Worst',
          initial: null,
          label: 'Scale Rating',
          validation: {}
        },
        {
          type: 'file',
          id: 29,
          isMultiple: false,
          url: 'https://content.dropboxapi.com/2/files/upload',
          dropbox: {
            headers: {
              Authorization:
                'Bearer 5JAlpA6y8pkAAAAAAAAAASKLV2Ru50qVzsutFVd6BsySpra13BlNktt_XJVxwnfV',
              'Content-Type': 'application/octet-stream'
            },
            dropboxAPIArg: {
              path: '/temp',
              mode: 'add',
              autorename: true,
              mute: false
            }
          },
          label: 'Upload Your File',
          validation: {}
        },
        {
          type: 'password',
          id: 30,
          placeholder: '',
          label: 'Password',
          validation: {
            min: {
              msg: 'Please enter a value between 3 and 20.',
              value: 3,
              type: 'length'
            },
            max: {
              msg: 'Please enter a value between 3 and 20.',
              value: 20,
              type: 'length'
            }
          }
        },
        { type: 'signature', id: 31, label: 'E-Signature', validation: {} },
        {
          type: 'terms',
          id: 32,
          openIn: 'newTab',
          text: 'I agree to the <a href="https://example.com/" target="_blank">Terms of Service</a>',
          url: 'https://example.com/',
          initial: false,
          label: 'Terms and Conditions *',
          validation: { required: { msg: 'This field is required.' } }
        },
        {
          type: 'select',
          id: 33,
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            { key: 0, value: 'option1', label: 'option1  ', price: '' },
            { key: 1, value: 'option2', label: 'option2  ', price: '' },
            { key: 2, value: 'option3', label: 'option3  ', price: '' },
            { key: 'other', value: 'Other' }
          ],
          payable: 1,
          label: 'Dropdown',
          validation: {}
        }
      ]}
      logic={[
        {
          id: 11,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 16, rule: 'is', item: 'phone', value: '55' }]
        },
        {
          id: 14,
          action: 'show',
          operator: 'and',
          conditions: [
            { id: 20, rule: 'checked', item: null, value: 'option2' }
          ]
        },
        {
          id: 17,
          action: 'show',
          operator: 'and',
          conditions: [
            { id: 18, rule: 'greater', item: null, value: '2021-10-26' }
          ]
        },
        {
          id: 16,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 19, rule: 'greater', item: null, value: '00:12' }]
        },
        {
          id: 30,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 27, rule: 'greater', item: null, value: '4' }]
        },
        {
          id: 29,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 26, rule: 'greater', item: null, value: '3' }]
        },
        {
          id: 25,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 12, rule: 'is', item: 'first', value: 'arm' }]
        },
        {
          id: 31,
          action: 'show',
          operator: 'and',
          conditions: [
            { id: 24, rule: 'is', item: null, value: { 1: '10', 2: '20' } }
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
