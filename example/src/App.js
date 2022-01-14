import React, { useState } from 'react'
import Builder from 'boomform-builder'

const App = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(1)

  return (
    <Builder
      global={{
        print: true,
        name: x,
        logic: true,
        description: '456',
        innerComponent: (state) => {
          setTimeout(() => {
            setX(132)
            setY(456)
          })
        }
      }}
      fields={[
        {
          type: 'name',
          id: 9,
          placeholders: { first: 'Nombre alumn@', last: 'Apellidos alumn@' },
          validations: {
            first: { HTMLValidate: true, required: { msg: 'pri' } },
            last: { HTMLValidate: true, required: { msg: 'pri' } }
          }
        },
        {
          type: 'select',
          id: 65,
          options: [
            { key: 'placeholder', value: 'Selecciona el curso actual' },
            { key: 0, value: '3 años', label: '3 años  ', price: '' },
            { key: 1, value: '4 años', label: '4 años  ', price: '' },
            { key: 2, value: '5 años', label: '5 años  ', price: '' },
            { key: 3, value: '1º Primaria', label: '1º Primaria  ' },
            { key: 4, value: '2º Primaria', label: '2º Primaria  ' },
            { key: 5, value: '3º Primaria', label: '3º Primaria  ' },
            { key: 6, value: '4º Primaria', label: '4º Primaria  ' },
            { key: 7, value: '5º Primaria', label: '5º Primaria  ' },
            { key: 8, value: '6º Primaria', label: '6º Primaria  ' }
          ],
          payable: 1,
          validation: { HTMLValidate: true, required: { msg: 'pri' } }
        },
        {
          type: 'textarea',
          id: 12,
          height: '60px',
          placeholder: '',
          validation: { HTMLValidate: true }
        },
        {
          type: 'singleChoice',
          id: 71,
          columns: 1,
          options: [
            {
              key: 0,
              value: '0',
              label: '7:30 con desayuno  ',
              price: '',
              checked: false
            },
            {
              key: 1,
              value: '1',
              label: '7:45 con desayuno  ',
              price: '',
              checked: false
            },
            {
              key: 2,
              value: '2',
              label: '8:00 con desayuno  ',
              price: '',
              checked: false
            },
            {
              key: 3,
              value: '3',
              label: '8:15 con desayuno  ',
              checked: false
            },
            {
              key: 4,
              value: '4',
              label: '8:30 con desayuno  ',
              checked: false
            },
            {
              key: 5,
              value: '5',
              label: '8:45 sin desayuno  ',
              checked: false
            },
            { key: 6, value: '6', label: '9:00 sin desayuno  ', checked: false }
          ],
          validation: { HTMLValidate: true, required: { msg: 'pri' } }
        },
        {
          type: 'singleChoice',
          id: 55,
          columns: '1',
          options: [
            { key: 0, value: '0', label: 'Sí  ' },
            { key: 1, value: '1', label: 'No  ' }
          ],
          validation: { HTMLValidate: true, required: { msg: 'pri' } }
        },
        {
          type: 'name',
          id: 52,
          placeholders: { first: 'Nombre alumn@', last: 'Apellidos alumn@' },
          validations: {}
        },
        {
          type: 'select',
          id: 66,
          options: [
            { key: 'placeholder', value: 'Selecciona el curso actual' },
            { key: 0, value: '3 años', label: '3 años  ', price: '' },
            { key: 1, value: '4 años', label: '4 años  ', price: '' },
            { key: 2, value: '5 años', label: '5 años  ', price: '' },
            { key: 3, value: '1º Primaria', label: '1º Primaria  ' },
            { key: 4, value: '2º Primaria', label: '2º Primaria  ' },
            { key: 5, value: '3º Primaria', label: '3º Primaria  ' },
            { key: 6, value: '4º Primaria', label: '4º Primaria  ' },
            { key: 7, value: '5º Primaria', label: '5º Primaria  ' },
            { key: 8, value: '6º Primaria', label: '6º Primaria  ' }
          ],
          payable: 1,
          validation: { HTMLValidate: true }
        },
        {
          type: 'textarea',
          id: 63,
          height: '60px',
          placeholder: '',
          validation: { HTMLValidate: true }
        },
        {
          type: 'name',
          id: 56,
          placeholders: { first: 'Nombre alumn@', last: 'Apellidos alumn@' },
          validations: {}
        },
        {
          type: 'select',
          id: 67,
          options: [
            { key: 'placeholder', value: 'Selecciona el curso actual' },
            { key: 0, value: '3 años', label: '3 años  ', price: '' },
            { key: 1, value: '4 años', label: '4 años  ', price: '' },
            { key: 2, value: '5 años', label: '5 años  ', price: '' },
            { key: 3, value: '1º Primaria', label: '1º Primaria  ' },
            { key: 4, value: '2º Primaria', label: '2º Primaria  ' },
            { key: 5, value: '3º Primaria', label: '3º Primaria  ' },
            { key: 6, value: '4º Primaria', label: '4º Primaria  ' },
            { key: 7, value: '5º Primaria', label: '5º Primaria  ' },
            { key: 8, value: '6º Primaria', label: '6º Primaria  ' }
          ],
          payable: 1,
          validation: { HTMLValidate: true }
        },
        {
          type: 'textarea',
          id: 59,
          height: '60px',
          placeholder: '',
          validation: { HTMLValidate: true }
        },
        {
          type: 'name',
          id: 60,
          placeholders: { first: 'Nombre alumn@', last: 'Apellidos alumn@' },
          validations: {}
        },
        {
          type: 'select',
          id: 64,
          options: [
            { key: 'placeholder', value: 'Selecciona el curso actual' },
            { key: 0, value: '3 años', label: '3 años  ', price: '' },
            { key: 1, value: '4 años', label: '4 años  ', price: '' },
            { key: 2, value: '5 años', label: '5 años  ', price: '' },
            { key: 3, value: '1º Primaria', label: '1º Primaria  ' },
            { key: 4, value: '2º Primaria', label: '2º Primaria  ' },
            { key: 5, value: '3º Primaria', label: '3º Primaria  ' },
            { key: 6, value: '4º Primaria', label: '4º Primaria  ' },
            { key: 7, value: '5º Primaria', label: '5º Primaria  ' },
            { key: 8, value: '6º Primaria', label: '6º Primaria  ' }
          ],
          payable: 1,
          validation: { HTMLValidate: true }
        },
        {
          type: 'textarea',
          id: 62,
          height: '60px',
          placeholder: '',
          validation: { HTMLValidate: true }
        },
        {
          type: 'singleChoice',
          id: 68,
          columns: 1,
          options: [
            { key: 0, value: '0', label: 'Sí  ', price: '', checked: false },
            { key: 1, value: '1', label: 'No  ', price: '', checked: false }
          ],
          validation: { HTMLValidate: true }
        },
        {
          type: 'name',
          id: 13,
          placeholders: { first: 'Nombre', last: 'Apellidos' },
          validations: {
            first: { HTMLValidate: true, required: { msg: 'pri' } },
            last: { HTMLValidate: true, required: { msg: 'pri' } }
          }
        },
        {
          type: 'email',
          id: 14,
          placeholder: '*Email',
          validation: {
            HTMLValidate: true,
            email: { msg: 'tamarc2000@hotmail.com' },
            required: { msg: 'pri' }
          }
        },
        {
          type: 'phone',
          id: 15,
          defaultCountryCode: 'AM',
          placeholder: '*Teléfono',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 45,
          placeholder: '*NIF, NIE (1)',
          validation: { HTMLValidate: true, required: { msg: 'pri' } }
        },
        {
          type: 'name',
          id: 16,
          placeholders: { first: 'Nombre', last: 'Apellidos' },
          instruction:
            'Es casos monoparentales rellenar el campo con los mismos datos del (1)',
          validations: {
            first: { HTMLValidate: true, required: { msg: 'pri' } },
            last: { HTMLValidate: true, required: { msg: 'pri' } }
          }
        },
        {
          type: 'email',
          id: 17,
          placeholder: '*Email',
          validation: {
            HTMLValidate: true,
            email: { msg: 'tamarc2000@hotmail.com' },
            required: { msg: 'pri' }
          }
        },
        {
          type: 'phone',
          id: 18,
          defaultCountryCode: 'AM',
          placeholder: '*Teléfono',
          validation: { HTMLValidate: true }
        },
        {
          type: 'text',
          id: 46,
          placeholder: '*NIF, NIE (2)',
          validation: { HTMLValidate: true, required: { msg: 'pri' } }
        },
        {
          type: 'terms',
          id: 72,
          openIn: 'newTab',
          text: 'Acepto <a href="https://5bf8ce48-3ef2-4186-a7c6-d06038c8c24d.usrfiles.com/ugd/5bf8ce_23ab8e72b0b045b782d6a1b2ce929830.pdf" target="_blank">Normativa</a>',
          url: 'https://5bf8ce48-3ef2-4186-a7c6-d06038c8c24d.usrfiles.com/ugd/5bf8ce_23ab8e72b0b045b782d6a1b2ce929830.pdf',
          initial: false,
          payable: 'distribute',
          validation: { HTMLValidate: true, required: { msg: 'pri' } }
        },
        {
          type: 'textarea',
          id: 69,
          height: '60',
          placeholder: 'Nombre Apellidos y NIF',
          validation: { HTMLValidate: true }
        },
        {
          type: 'multipleChoice',
          id: 21,
          columns: '1',
          options: [
            { key: 0, value: 'Sí', label: 'Sí  ' },
            { key: 1, value: 'No', label: 'No  ' }
          ],
          validation: { HTMLValidate: true, required: { msg: 'pri' } }
        },
        {
          type: 'text',
          id: 47,
          placeholder: 'nº socio',
          validation: { HTMLValidate: true }
        },
        {
          type: 'file',
          id: 70,
          isMultiple: true,
          inputContent: 'Ej: TeresaLopezSerrano',
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
          validation: { HTMLValidate: true, required: { msg: 'pri' } }
        }
      ]}
      logic={[
        {
          id: 52,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'Sí' }]
        },
        {
          id: 47,
          action: 'show',
          operator: 'and',
          conditions: [{ id: 21, rule: 'checked', item: null, value: 'Sí' }]
        },
        {
          id: 60,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 56,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 59,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 62,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 63,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 66,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 67,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 60,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 64,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 55, rule: 'is', item: null, value: 'No' }]
        },
        {
          id: 16,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 68, rule: 'is', item: null, value: 'Sí' }]
        },
        {
          id: 17,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 68, rule: 'is', item: null, value: 'Sí' }]
        },
        {
          id: 18,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 68, rule: 'is', item: null, value: 'Sí' }]
        },
        {
          id: 46,
          action: 'hide',
          operator: 'and',
          conditions: [{ id: 68, rule: 'is', item: null, value: 'Sí' }]
        }
      ]}
      button={{
        text: 'submit'
      }}
    />
  )
}

export default App
