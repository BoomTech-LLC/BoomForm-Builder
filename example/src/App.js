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
          type: 'name',
          id: 1,
          placeholders: { first: '*First', last: '*Last' },
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
          id: 11,
          defaultCountryCode: 'AM',
          placeholder: '',
          label: 'Phone',
          validation: { HTMLValidate: true }
        },
        {
          type: 'email',
          id: 2,
          placeholder: 'Email',
          validation: {
            HTMLValidate: true,
            email: { msg: 'Please enter a valid Email address.' }
          }
        },
        {
          type: 'address',
          id: 7,
          placeholders: {
            street: 'Street Adress',
            street2: 'Street Adress 2',
            city: 'City',
            state: 'State / Region',
            zip: 'Postal/Zip Code'
          },
          defaultCountry: 12,
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
          type: 'just',
          id: 9,
          value: {
            value:
              '<!DOCTYPE html>\n<html>\n<head>\n<style>\np.small {\n  line-height: 0.7;\n}\n\np.big {\n  line-height: 1.8;\n}\n</style>\n</head>\n<body>\n\n\n<p>\nThis document hereinafter to be called as “Consent Agreement/ agreement/contract” is\nentered into by and between the following parties;<br>\n\nwww.xsitebunny: is a business oriented online platform, office located at: 5830 E. 2ND\nSTREET SUITE 8 CASPER WY 82609, hereinafter to be known as ‘First party’<br>\nCreator: is an individual, who will provide services as a content provider, hereinafter to\nbe known as ‘Second Party/content provider’\n</p>\n\n\n<p>\nWHEREAS, both the parties hereinafter called or referred as “parties” together.\nTherefore, the Second Party hereto agrees to the following terms and conditions of this\nagreement;\n</p>\n\n<p>Recitals:\nThe clauses and terms produced in this agreement are to be considered as an integral part of\nthe terms described on the website ‘www.xsitebunny.com’ and to be read together with this\nagreement.\n</p>\n\n<p>\n1. Prohibited and Lawful Content:\nThe content provider agrees that the content provided shall be in no manner contradict\nor violates any of the policy and standards neither shall be illegal, unlawful,\nunwarranted or prohibited by the law enforcement agencies or under laws and\nregulations of the concerned jurisdiction.\n</p>\n\n<p>\n2. Consent and Permission:\nThe content provider shall, while obtaining or arranging any content of any person or\nindividual in any manner for the purpose of the nature of this job or position, is required\nto seek written permission/acknowledgment and consent from the concerned person\nand individual, depicted in the content and to maintain the record of the same and to be\nproduced whenever needed.\n</p>\n\n<p>\n3. Scope of Consent and Permission:\nThe content provider subject to clause 2, shall be responsible and hereby agrees to\nobtain and seek consent for the following prescribed areas;\n</p>\n\n<p class="big">\na) Consent to be depicted in the content.<br>\n\nb) Consent to allow the content to be used for the public distribution and upload on\nvarious platforms including website ‘www.xsitebunny.com’<br>\n\nc) Consent for the content to be downloaded, by the users and clients, where it is available\nfor the download.<br>\n\nd) Consent to the content provider to verify the identity and age of all persons depicted in\nthe content to ensure that all persons depicted are adults, major, sound mind and legally\ncapable to give consent and enter into any agreement. Whereas, also to provide\nsupporting documents upon request by the content provider.<br>\n\n</p>\n<p>\n4. Obligations of Creator. Your account will be terminate in the event one of the following occurs:\n \n(A) Sharing trade secrets to competitors or anyone that doesn\'t work/contract at the company  \n(B) Talking down about the company on any form of social media \n(C) Not posting for more then 60 days\n\n</p>\n\n<p>\n5. Signature and Date:\nThe Parties hereby agree to the terms and conditions set forth in this Agreement. This\nagreement is demonstrated by their signatures below:\n</p>\n\n</body>\n</html>'
          }
        },
        {
          type: 'date',
          id: 10,
          format: 'MM-DD-YYYY',
          label: 'Date',
          validation: { HTMLValidate: true }
        },
        {
          type: 'signature',
          id: 8,
          label:
            "E-Signature <span class='boomForm-field__label-star'>*</span>",
          validation: {
            HTMLValidate: true,
            required: { msg: 'This field is required.' }
          }
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
