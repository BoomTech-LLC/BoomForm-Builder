import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: '123',
        description: '456',
        logic: true,
        print: false,
        innerComponent: (state) => console.log(state)
      }}
      fields={[
        {
          type: 'select',
          id: 6,
          options: [
            { key: 'placeholder', value: 'Select category' },
            { key: 0, value: 'Channel', label: 'Channel  ', price: '' },
            { key: 1, value: 'Craft', label: 'Craft  ', price: '' },
            { key: 2, value: 'Digital', label: 'Digital  ', price: '' },
            { key: 3, value: 'Entertainment', label: 'Entertainment  ' },
            { key: 4, value: 'Good', label: 'Good  ' },
            { key: 5, value: 'Heritage', label: 'Heritage  ' }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {},
          initial: 2
        },
        {
          type: 'select',
          id: 7,
          options: [
            { key: 'placeholder', value: 'Choose subcategory' },
            {
              key: 0,
              value: 'Use of Media',
              label: 'Use of Media (+$100) ',
              price: 100
            },
            {
              key: 1,
              value: 'Use of Data',
              label: 'Use of Data (+$100) ',
              price: 100
            },
            {
              key: 2,
              value: 'Use of Insights and Strategy',
              label: 'Use of Insights and Strategy (+$100) ',
              price: 100
            },
            {
              key: 3,
              value: 'Use of Influencers & Brand -  Ambassadors',
              label: 'Use of Influencers & Brand -  Ambassadors (+$100) ',
              price: 100
            },
            {
              key: 4,
              value: 'PR & Reputation Management',
              label: 'PR & Reputation Management (+$100) ',
              price: 100
            },
            {
              key: 5,
              value: 'Integrated Campaigns',
              label: 'Integrated Campaigns (+$100) ',
              price: 100
            }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 8,
          options: [
            { key: 'placeholder', value: 'Choose subcategory' },
            {
              key: 0,
              value: 'Audio Craft',
              label: 'Audio Craft (+$100) ',
              price: 100
            },
            {
              key: 1,
              value: 'Design Craft',
              label: 'Design Craft (+$100) ',
              price: 100
            },
            {
              key: 2,
              value: 'Digital, Mobile and Social Craft',
              label: 'Digital, Mobile and Social Craft (+$100) ',
              price: 100
            },
            {
              key: 3,
              value: 'Film Craft',
              label: 'Film Craft (+$100) ',
              price: 100
            },
            {
              key: 4,
              value: 'Print Craft',
              label: 'Print Craft (+$100) ',
              price: 100
            }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 9,
          label: 'Barev',
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            {
              key: 0,
              value: 'Integrated Digital Campaign',
              label: 'Integrated Digital Campaign (+$130) ',
              price: 130
            },
            {
              key: 1,
              value: 'Social Media Campaigns',
              label: 'Social Media Campaigns (+$100) ',
              price: 100
            },
            {
              key: 2,
              value: 'Websites, Microsites, Web services',
              label: 'Websites, Microsites, Web services (+$100) ',
              price: 100
            },
            { key: 3, value: 'Apps', label: 'Apps (+$100) ', price: 100 },
            { key: 4, value: 'Games', label: 'Games (+$100) ', price: 100 },
            {
              key: 5,
              value: 'Messaging',
              label: 'Messaging (+$100) ',
              price: 100
            },
            {
              key: 6,
              value: 'Novel & Devices',
              label: 'Novel & Devices (+$100) ',
              price: 100
            },
            { key: 'other', value: 'Other' }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 10,
          options: [
            { key: 'placeholder', value: 'Choose Subcategory' },
            {
              key: 0,
              value: 'Entertainment Film',
              label: 'Entertainment Film (+$100) ',
              price: 100
            },
            {
              key: 1,
              value: 'Entertainment Film',
              label: 'Entertainment Film (+$100) ',
              price: 100
            },
            {
              key: 2,
              value: 'Media Promo',
              label: 'Media Promo (+$100) ',
              price: 100
            },
            {
              key: 3,
              value: 'Live Events',
              label: 'Live Events (+$100) ',
              price: 100
            },
            { key: 4, value: 'Sports', label: 'Sports (+$100) ', price: 100 },
            {
              key: 5,
              value: 'Comic Skits',
              label: 'Comic Skits (+$100) ',
              price: 100
            },
            {
              key: 6,
              value: 'Use of Music',
              label: 'Use of Music (+$100) ',
              price: 100
            },
            {
              key: 7,
              value: 'Music Video',
              label: 'Music Video (+$100) ',
              price: 100
            }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 11,
          options: [
            { key: 'placeholder', value: 'Choose Subcategory' },
            {
              key: 0,
              value: 'Non-Profit Organizations',
              label: 'Non-Profit Organizations  ',
              price: ''
            },
            {
              key: 1,
              value: 'For-Profit Organizations',
              label: 'For-Profit Organizations  ',
              price: ''
            }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 12,
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            { key: 0, value: 'Audio', label: 'Audio (+$100) ', price: 100 },
            { key: 1, value: 'Film', label: 'Film (+$100) ', price: 100 },
            { key: 2, value: 'Design', label: 'Design (+$100) ', price: 100 },
            {
              key: 3,
              value: 'Outdoor – Billboards & Posters',
              label: 'Outdoor – Billboards & Posters (+$100) ',
              price: 100
            },
            {
              key: 4,
              value: 'Outdoor – Ambient & Installations',
              label: 'Outdoor – Ambient & Installations (+$100) ',
              price: 100
            },
            {
              key: 5,
              value: 'Outdoor Activations',
              label: 'Outdoor Activations (+$100) ',
              price: 100
            },
            { key: 6, value: 'New Choice', label: 'New Choice  ' }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {},
          initial: ''
        },
        {
          type: 'select',
          id: 14,
          options: [
            { key: 'placeholder', value: 'Please choose craft options' },
            {
              key: 0,
              value: 'Copywriting',
              label: 'Copywriting  ',
              price: null
            },
            {
              key: 1,
              value: 'Use of Music',
              label: 'Use of Music  ',
              price: null
            },
            {
              key: 2,
              value: 'Sound Design',
              label: 'Sound Design  ',
              price: null
            }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 15,
          options: [
            { key: 'placeholder', value: 'Please choose craft option' },
            { key: 0, value: 'Animation', label: 'Animation  ', price: '' },
            {
              key: 1,
              value: 'Image Creation',
              label: 'Image Creation  ',
              price: ''
            },
            {
              key: 2,
              value: 'Copywriting for Design',
              label: 'Copywriting for Design  ',
              price: ''
            },
            { key: 3, value: 'Typography', label: 'Typography  ' }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {},
          initial: ''
        },
        {
          type: 'select',
          id: 16,
          options: [
            { key: 'placeholder', value: 'Please choose craft option' },
            {
              key: 0,
              value: 'Copywriting',
              label: 'Copywriting (+$100) ',
              price: 100
            },
            {
              key: 1,
              value: 'Graphic Design',
              label: 'Graphic Design (+$100) ',
              price: 100
            },
            {
              key: 2,
              value: 'User Experience',
              label: 'User Experience (+$100) ',
              price: 100
            }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 17,
          options: [
            { key: 'placeholder', value: 'Please choose craft option' },
            {
              key: 0,
              value: 'Direction',
              label: 'Direction (+$100) ',
              price: 100
            },
            { key: 1, value: 'Casting', label: 'Casting (+$100) ', price: 100 },
            {
              key: 2,
              value: 'Copywriting',
              label: 'Copywriting (+$100) ',
              price: 100
            },
            {
              key: 3,
              value: 'Use of Music',
              label: 'Use of Music (+$100) ',
              price: 100
            },
            {
              key: 4,
              value: 'Cinematography',
              label: 'Cinematography (+$100) ',
              price: 100
            },
            {
              key: 5,
              value: 'Production Design/Art',
              label: 'Production Design/Art (+$100) ',
              price: 100
            },
            {
              key: 6,
              value: 'Direction',
              label: 'Direction (+$100) ',
              price: 100
            },
            {
              key: 7,
              value: 'Animation',
              label: 'Animation (+$100) ',
              price: 100
            }
          ],
          payable: 1,
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 18,
          options: [
            { key: 'placeholder', value: 'Please choose craft option' },
            {
              key: 0,
              value: 'Copywriting',
              label: 'Copywriting (+$100) ',
              price: 100
            },
            {
              key: 1,
              value: 'Art Direction',
              label: 'Art Direction (+$100) ',
              price: 100
            },
            {
              key: 2,
              value: 'Illustration',
              label: 'Illustration (+$100) ',
              price: 100
            },
            {
              key: 3,
              value: 'Photography',
              label: 'Photography (+$100) ',
              price: 100
            },
            {
              key: 4,
              value: 'Typography',
              label: 'Typography (+$100) ',
              price: 100
            }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'select',
          id: 21,
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            {
              key: 0,
              value:
                'Screens e.g. cinema, television, in-flight, showroom, exhibition etc',
              label:
                'Screens e.g. cinema, television, in-flight, showroom, exhibition etc  ',
              price: ''
            },
            { key: 1, value: 'Print', label: 'Print  ', price: '' },
            { key: 2, value: 'Event', label: 'Event  ', price: '' },
            { key: 3, value: 'Audio', label: 'Audio  ' },
            {
              key: 4,
              value: 'Outdoor & Ambient',
              label: 'Outdoor & Ambient  '
            },
            { key: 5, value: 'New Choice', label: 'New Choice  ' }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'text',
          id: 22,
          placeholder: '',
          instruction:
            'Please list platforms on which you ran your campaign. Separate each one with a comma.',
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'text',
          id: 23,
          placeholder: '',
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: 'dfsdf'
        },
        {
          type: 'date',
          id: 24,
          format: 'DD-MM-YYYY',
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: '2021-12-03'
        },
        {
          type: 'date',
          id: 25,
          format: 'DD-MM-YYYY',
          classnameprefix: 'one-third',
          validation: {},
          initial: '2021-12-10'
        },
        {
          type: 'singleChoice',
          id: 27,
          columns: 1,
          options: [
            { key: 0, value: 'Yes', label: 'Yes  ', price: '', checked: false },
            { key: 1, value: 'No', label: 'No  ', price: '', checked: false }
          ],
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'select',
          id: 28,
          options: [
            { key: 'placeholder', value: 'Please choose...' },
            { key: 0, value: '2', label: '2 (+$100) ', price: 100 },
            { key: 1, value: '3', label: '3 (+$200) ', price: 200 },
            { key: 2, value: '4', label: '4 (+$300) ', price: 300 },
            { key: 3, value: '5', label: '5 (+$400) ', price: 400 }
          ],
          payable: 1,
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        },
        {
          type: 'text',
          id: 42,
          placeholder: '',
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: 'fff'
        },
        {
          type: 'name',
          id: 43,
          placeholders: { first: 'First', last: 'Last', middle: 'Middle' },
          validations: {
            first: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            },
            last: {
              HTMLValidate: true,
              required: { msg: 'This field is required.' }
            }
          },
          initials: { first: 'fff', last: 'dfdf' }
        },
        {
          type: 'email',
          id: 44,
          placeholder: '',
          classnameprefix: 'one-third',
          validation: {
            email: { msg: 'Please enter a valid Email address.' },
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: 'dsgdfsdf@dssd.ru'
        },
        {
          type: 'text',
          id: 45,
          placeholder: '',
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: 'dsfsdf'
        },
        {
          type: 'textarea',
          id: 48,
          height: '60',
          placeholder: '',
          validation: {},
          initial: ''
        },
        {
          type: 'textarea',
          id: 49,
          height: '60',
          placeholder: '',
          validation: {},
          initial: ''
        },
        {
          type: 'textarea',
          id: 47,
          height: '60',
          placeholder: '',
          validation: {},
          initial: ''
        },
        {
          type: 'textarea',
          id: 50,
          height: '60',
          placeholder: '',
          validation: {},
          initial: ''
        },
        {
          type: 'textarea',
          id: 51,
          height: '60',
          placeholder: '',
          validation: {},
          initial: ''
        },
        {
          type: 'textarea',
          id: 52,
          height: '60',
          placeholder: '',
          validation: {},
          initial: ''
        },
        {
          type: 'textarea',
          id: 53,
          height: '60',
          placeholder: '',
          validation: {},
          initial: ''
        },
        {
          type: 'textarea',
          id: 54,
          height: '60',
          placeholder: 'First name, Last name, Company, Role',
          instruction:
            'Please list all the main people to be acknowledged on this job from agency, client, production, collaborating companies, illustrators, photographers, animators etc.  Example:        John Jill, AIG Communications, Art Director\nUse one line per person',
          validation: {},
          initial: ''
        },
        {
          type: 'url',
          id: 56,
          placeholder: '',
          instruction:
            'You may put all the files you wish to submit inside a Google Drive folder and send us the link. Please remember give access to download. Even when submitting cloud files, remember to use only accepted file formats and specifications.',
          validation: { url: { msg: 'Please enter a valid URL.' } },
          initial: ''
        },
        {
          type: 'terms',
          id: 57,
          openIn: 'newTab',
          text: 'I hereby confirm that I have the authority to enter this work into Pitcher Awards on behalf of my company. I declare that the information I have provided regarding the work are true to the best of my knowledge and accept the terms and conditions guiding the Pitcher Awards.',
          url: 'https://www.pitcherfestival.com/t-and-c',
          initial: false,
          payable: 'distribute',
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        },
        {
          type: 'textarea',
          id: 58,
          height: '60',
          placeholder: 'One title on each line.',
          instruction:
            'Remember to save each work with the name of the execution title before uploading.',
          classnameprefix: 'one-third',
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          },
          initial: ''
        }
      ]}
      logic={[
        {
          id: 7,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 6, rule: 'is', item: null, value: 'Channel' }]
        },
        {
          id: 8,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 6, rule: 'is', item: null, value: 'Craft' }]
        },

        {
          id: 10,
          action: 'show',
          operator: 'and',
          conditions: [
            { id: 6, rule: 'is', item: null, value: 'Entertainment' }
          ]
        },
        {
          id: 11,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 6, rule: 'is', item: null, value: 'Good' }]
        },
        {
          id: 12,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 6, rule: 'is', item: null, value: 'Heritage' }]
        },
        {
          id: 14,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 8, rule: 'is', item: null, value: 'Audio Craft' }]
        },
        {
          id: 15,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 8, rule: 'is', item: null, value: 'Design Craft' }]
        },
        {
          id: 16,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 8,
              rule: 'is',
              item: null,
              value: 'Digital, Mobile and Social Craft'
            }
          ]
        },
        {
          id: 17,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 8, rule: 'is', item: null, value: 'Film Craft' }]
        },
        {
          id: 18,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 8, rule: 'is', item: null, value: 'Print Craft' }]
        },
        {
          id: 21,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 7, rule: 'is', item: null, value: 'Use of Media' }]
        },
        {
          id: 22,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 9,
              rule: 'is',
              item: null,
              value: 'Integrated Digital Campaign'
            }
          ]
        },
        {
          id: 22,
          action: 'show',
          operator: 'and',
          conditions: [
            { id: 7, rule: 'is', item: null, value: 'Integrated Campaigns' }
          ]
        },
        {
          id: 27,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 6, rule: 'is', item: null, value: 'Craft' }]
        },
        {
          id: 27,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 6, rule: 'is', item: null, value: 'Heritage' }]
        },
        {
          id: 28,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 27, rule: 'is', item: null, value: 'Yes' }]
        },
        {
          id: 52,
          action: 'show',
          operator: 'and',
          conditions: [
            {
              id: 7,
              rule: 'is',
              item: null,
              value: 'Use of Insights and Strategy'
            }
          ]
        },
        {
          id: 53,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 7, rule: 'is', item: null, value: 'Use of Data' }]
        },
        {
          id: 27,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 6, rule: 'is', item: null, value: 'Craft' }]
        },
        {
          id: 58,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 27, rule: 'is', item: null, value: 'Yes' }]
        },
        {
          id: 27,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 6, rule: 'is', item: null, value: 'Heritage' }]
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
