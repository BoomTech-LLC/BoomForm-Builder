import React, { useState } from 'react'
import { Builder } from 'boomform-builder'

const App = () => {
  const singleField = {
    buttons: { type: 0, next: 'Next', prev: 'Prev' },
    initial: 0,
    pagesCounter: true,
    pages: [
      { title: '', description: '', fields: ['storeButton', 'text'] },
      { title: '', description: '', fields: ['storeButton', 'password'] },
      { title: '', description: '', fields: ['storeButton', 'date'] },
      { title: '', description: '', fields: ['storeButton', 'email'] }
    ]
  }

  return (
    <Builder
      global={{
        name: 'Name',
        description: 'Decription',
        isPrint: true
      }}
      fields={[
        {
          type: 'text',
          id: 'text',
          placeholder: '',
          label: "Textbox <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        // {
        //   type: 'singleChoice',
        //   id: 7,
        //   columns: 1,
        //   options: [
        //     { key: 0, value: '0', label: 'option1', price: '', checked: false },
        //     { key: 1, value: '1', label: 'option2', price: '', checked: false }
        //   ],
        //   label:
        //     "Select Single Choice <span class='boomForm-field__label-star'>*</span>",
        //   validation: {
        //     HTMLValidate: true,
        //     required: { msg: 'This field is required.' }
        //   }
        // },
        // {
        //   type: 'select',
        //   id: 'select1',
        //   columns: 1,
        //   payable:'Collect',
        //   options: [
        //     { key: 'placeholder', value: 'placeholder', label: 'placeholder', price: '' },
        //     { key: 0, value: '0', label: 'option1', price: 15 },
        //     { key: 1, value: '1', label: 'option2', price: 27 },
        //     { key: 2, value: '2', label: 'option3', price: 16 }
        //   ],
        //   label:
        //     "Select Single Choice <span class='boomForm-field__label-star'>*</span>",
        //   validation: {
        //     HTMLValidate: true,
        //     required: { msg: 'This field is required.' }
        //   }
        // },
        // {
        //   id: 'address',
        //   type: 'address',
        //   label: 'Please Type Your Address',
        //   defaultCountry: 229,
        //   hide: ['state'],
        //   placeholders: {
        //     street: 'Street',
        //     street2: 'Street 2',
        //     city: 'City',
        //     zip: '0000'
        //   },
        //   validations: {
        //     street: { required: { msg: 'Street is required' } },
        //     city: { required: { msg: 'City is required' } }
        //   }
        // },
        {
          id: 'date',
          type: 'date',
          label: '<span>date</span>',
          validation: {
            required: {
              msg: 'date is required'
            },
            min: {
              value: '2021-09-24',
              msg: 'Please enter date after 2021-09-24'
            },
            max: {
              value: '2021-10-26',
              msg: 'Please enter date before 2021-10-26'
            }
          }
        },
        {
          id: 'email',
          type: 'email',
          label: 'Please Type Your Email',
          placeholder: 'Type ...',
          validation: {
            required: { msg: 'Email is required' },
            email: { msg: 'Wrong Email Format' }
          }
        },
        // {
        //   id: 'map',
        //   type: 'map',
        //   markers: [
        //     {
        //       id: 1,
        //       description: 'Dream City',
        //       position: { lat: -22.908333, lng: -43.196388 }
        //     }
        //   ],
        //   lat: -21.8926266,
        //   lng: -41.3909684,
        //   zoom: 4
        // },
        // {
        //   id: 'multipleChoice',
        //   type: 'multipleChoice',
        //   options: [
        //     { key: 1, label: 'Cycling', value: 'cycling' },
        //     { key: 2, label: 'Runing', value: 'runing', checked: true },
        //     { key: 3, label: 'Reading', value: 'reading' },
        //     { key: 4, label: 'Photographing', value: 'photographing' },
        //     {
        //       key: 'other',
        //       placeholder: 'Other'
        //     }
        //   ],
        //   quantity: {
        //     enabled: true,
        //     label: 'Quantity',
        //     value: 1
        //   }
        // },
        // {
        //   id: 'name',
        //   type: 'name',
        //   label: 'Please Type Your Name',
        //   middleName: true,
        //   placeholders: {
        //     first: 'John',
        //     last: 'Doe'
        //   },
        //   validations: {
        //     first: { required: { msg: 'First name is required' } },
        //     last: { required: { msg: 'Last name is required' } }
        //   }
        // },
        // {
        //   id: 'age',
        //   type: 'number',
        //   label: 'Please Type Your Age',
        //   placeholder: 'Type ...',
        //   validation: {
        //     required: { msg: 'Age is required' }
        //   }
        // },
        {
          id: 'password',
          type: 'password',
          label: 'Please Type Your Password',
          placeholder: 'Type ...',
          validation: {
            required: { msg: 'Password is required' },
            min: {
              value: 5,
              type: 'length',
              msg: 'Password Shoul Be More then 5 characters'
            }
          }
        }
        // {
        //   id: 'phone',
        //   type: 'phone',
        //   defaultCountryCode: 'AM',
        //   validation: { required: { msg: 'Phone Is required' } }
        // },
        // {
        //   id: 'price',
        //   type: 'price',
        //   label: 'Please Type Price',
        //   validations: {
        //     first: {
        //       required: { msg: 'Price is required' }
        //     }
        //   }
        // },
        // {
        //   id: 'scaleRating',
        //   type: 'scaleRating',
        //   min: 1,
        //   max: 5,
        //   validation: { required: { msg: 'please rate us' } }
        // },
        // {
        //   id: 'signature',
        //   type: 'signature',
        //   validation: { required: { msg: 'This Field Is Required' } }
        // },
        // {
        //   id: 'size',
        //   type: 'singleChoice',
        //   options: [
        //     { key: 1, value: 's', label: 'S' },
        //     { key: 2, value: 'm', label: 'M' },
        //     { key: 3, value: 'l', label: 'L' },
        //     {
        //       key: 'other',
        //       value: 'Other',
        //       placeholder: 'Other'
        //     }
        //   ],
        //   quantity: {
        //     enabled: true,
        //     label: 'Quantity',
        //     value: 1
        //   }
        // },
        // {
        //   id: 'starRating',
        //   type: 'starRating',
        //   validation: {
        //     required: {
        //       msg: 'Star rating is required'
        //     }
        //   }
        // },
        // {
        //   id: 'terms',
        //   type: 'terms',
        //   text: 'I agree to the {Terms of Service}',
        //   url: 'https://example.com/',
        //   openIn: 'newTab'
        // },
        // {
        //   id: 'color',
        //   type: 'text',
        //   label: 'Please Type Your Favorit Color',
        //   placeholder: 'Type ...',
        //   validation: { required: { msg: 'Text is required' } },
        //   initial: 'Red'
        // },
        // {
        //   id: 'textArea',
        //   type: 'textarea',
        //   richTextEditor: true,
        //   validation: { required: { msg: 'this field is required' } }
        // },
        // {
        //   id: 'time',
        //   type: 'time',
        //   label: 'Please Type Your Visit Time',
        //   validations: {
        //     hour: {
        //       required: { msg: 'Hour is required' }
        //     }
        //   }
        // },
        // {
        //   id: 'website',
        //   type: 'url',
        //   label: 'Please Type Your Website',
        //   placeholder: 'Type ...',
        //   validation: {
        //     required: { msg: 'Website is required' },
        //     url: { msg: 'Wrong Url Format' }
        //   }
        // }
      ]}
      logic={[
        {
          id: 'date',
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 'password',
              value: 'a',
              rule: 'is'
            }
          ]
        }
      ]}
      // pagination={{
      //   buttons: { type: 0, next: "Next", prev: "Prev" },
      //   initial: 0,
      //   pages: [{
      //     title: 'Page 1',
      //     description: "",
      //     fields:['storeButton','text','signature','password']
      //   }, {
      //     title: 'Page 2',
      //     description: "",
      //     fields:['storeButton','phone','name']
      //     },
      //     {
      //       title: 'Page 3',
      //       description: "",
      //       fields:['storeButton','phone','password']
      //     }
      //   ],
      //   timeline:1,
      // }}
      pagination={singleField}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
