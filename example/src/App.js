import React, { useState } from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        print: true,
        name: 'x',
        description: '456',
        innerComponent: (state) => {}
      }}
      fields={[
        {
          type: 'date',
          id: 10,
          format: 'MM-DD-YYYY',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' },
            min: { msg: 'Please enter a valid date.', value: '2022-01-25' }
          }
        },
        {
          type: 'time',
          id: 21,
          format: 'AM/PM',
          validations: {
            hour: {
              required: { msg: 'This field is required.' },
              max: {
                type: 'number',
                value: 12,
                msg: 'Please enter a value between 0 and 12.'
              }
            },
            minute: {
              required: { msg: 'This field is required.' },
              max: {
                type: 'number',
                value: 59,
                msg: 'Please enter a value between 0 and 59.'
              }
            }
          }
        },
        {
          type: 'select',
          id: 7,
          options: [
            {
              key: 0,
              value: 'Small Room (up to 5 ppl)',
              label: 'Small Room (up to 5 ppl)  ',
              price: 40
            },
            {
              key: 1,
              value: 'Medium Room (up to 15 ppl)',
              label: 'Medium Room (up to 15 ppl)  ',
              price: 40
            },
            {
              key: 2,
              value: 'Large Room (up to 25 ppl)',
              label: 'Large Room (up to 25 ppl)  ',
              price: 60
            }
          ],
          payable: 1,
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'textarea',
          id: 19,
          height: '60px',
          placeholder:
            'You are free to stay for a shorter time. You may stay longer too, depending on the room demands on the night of.',
          width: 'px',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'number',
          id: 22,
          placeholder: 'If unsure, approximate is okay',
          payable: 0,
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' },
            min: {
              msg: 'Please enter at least 1 word(s).',
              value: 1,
              type: 'number'
            }
          }
        },
        {
          type: 'singleChoice',
          id: 17,
          columns: '1',
          options: [
            { key: 0, value: '0', label: 'Everyone under 21' },
            { key: 1, value: '1', label: 'Everyone over 21' },
            {
              key: 2,
              value: '2',
              label: 'Mix of under and over 21',
              checked: false
            }
          ],
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'name',
          id: 1,
          placeholders: { first: 'First Name', last: 'Last Name' },
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
          type: 'phone',
          id: 4,
          defaultCountryCode: 'AM',
          placeholder: '',
          validation: { HTMLValidate: true }
        },
        {
          type: 'email',
          id: 2,
          placeholder: 'Email',
          validation: {
            HTMLValidate: true,
            email: { msg: 'Please enter a valid Email address.' },
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'just',
          id: 26,
          value: {
            value:
              "1. This submission is a reservation request, not a final submission. You will receive a confirmation email or a telephone call to confirm.\n<br> <br>2. We <b>do not</b> take same-day reservations for FRIDAYS and SATURDAYS. Requests submitted will be disregarded. Walk-ins are welcome.\n<br> <br>3. Reservation requests are fulfilled in the order they are received.\n<br> <br>4. Unless you call ahead and let us know of your delay, we will <b>only hold your reservation for 10 minutes</b> into your reserved hour. The room will be given to the next person on the waiting list.\n<br><br>5. You are guaranteed the duration of hours you've requested. You may stay a shorter period, but if you'd like to stay for a longer period, please speak to one of our staff on the floor.\n<br> <br>5. No outside drinks and food are allowed. (Exceptions to dessert and birthday cakes)\n<br> <br>6. ABSOLUTELY NO OUTSIDE ALCOHOL is allowed in our facility. You will be violating the Virginia ABC law. If you are caught handling alcoholic dirnks that were not sold by us, you will be asked to pay your bill and leave. You will also be banned from entering our facility in the future. <b> <br> <br>**Each of our rooms are monitored by live and recording surveillance cameras.</b>"
          }
        },
        {
          type: 'textarea',
          id: 20,
          height: '101px',
          placeholder:
            'Please send us information or questions regarding your reservation request. NO OUTSIDE FOOD OR DRINKS ARE ALLOWED. Birthday cakes and/or desserts are currently allowed.',
          width: 'px',
          validation: { HTMLValidate: true }
        },
        {
          type: 'terms',
          id: 24,
          openIn: 'newTab',
          text: 'I agree to the Terms of Service.',
          url: 'https://example.com/',
          initial: false,
          payable: 'distribute',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        }
      ]}
      pagination={{
        pages: [
          {
            title: 'Reservation Details',
            description: '',
            fields: [10, 21, 7, 19, 22, 17]
          },
          { title: 'Contact Information', description: '', fields: [1, 4, 2] },
          {
            title: 'Terms and Conditions',
            description: '',
            fields: [26, 20, 24]
          }
        ],
        initial: 0,
        buttons: { type: 1, next: 'Next', prev: 'Prev' },
        timeline: 1
      }}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
