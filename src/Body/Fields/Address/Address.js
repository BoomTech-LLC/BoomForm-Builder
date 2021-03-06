import React, { Fragment } from 'react'
import { Input } from 'boomform'
import { Select } from 'boomform'
import {
  getPlaceholder,
  getInitial,
  getValidation
} from './../../../Helpers/global'
import { getAddressFields, countryList } from './../../../Helpers/address'

const Address = ({
  id,
  label,
  hide,
  classnameprefix,
  placeholders,
  initials,
  validations,
  defaultCountry,
  ...props
}) => {
  const fields = getAddressFields()

  return (
    <>
      {hide?.includes('street') ? null : (
        <Input
          {...props}
          key={`${id}.street`}
          id={`${id}.street`}
          type='text'
          placeholder={getPlaceholder(placeholders, 'street')}
          initial={getInitial(initials, 'street')}
          validation={getValidation(validations, 'street')}
        />
      )}
      {hide?.includes('street2') ? null : (
        <Input
          {...props}
          key={`${id}.street2`}
          id={`${id}.street2`}
          type='text'
          placeholder={getPlaceholder(placeholders, 'street2')}
          initial={getInitial(initials, 'street2')}
          validation={getValidation(validations, 'street2')}
        />
      )}
      <div>
        {hide?.includes('city') ? null : (
          <Input
            {...props}
            key={`${id}.city`}
            id={`${id}.city`}
            type='text'
            placeholder={getPlaceholder(placeholders, 'city')}
            initial={getInitial(initials, 'city')}
            validation={getValidation(validations, 'city')}
          />
        )}
        {hide?.includes('state') ? null : (
          <Input
            {...props}
            key={`${id}.state`}
            id={`${id}.state`}
            type='text'
            placeholder={getPlaceholder(placeholders, 'state')}
            initial={getInitial(initials, 'state')}
            validation={getValidation(validations, 'state')}
          />
        )}
      </div>
      <div>
        {hide?.includes('zip') ? null : (
          <Input
            {...props}
            key={`${id}.zip`}
            id={`${id}.zip`}
            type='text'
            placeholder={getPlaceholder(placeholders, 'zip')}
            initial={getInitial(initials, 'zip')}
            validation={getValidation(validations, 'zip')}
          />
        )}
        {hide?.includes('country') ? null : (
          <Select
            {...props}
            key={`${id}.country`}
            id={`${id}.country`}
            options={
              getPlaceholder(placeholders, 'country')
                ? [
                    {
                      key: 'placeholder',
                      value: ` -- ${getPlaceholder(
                        placeholders,
                        'country'
                      )} -- `
                    },
                    ...countryList
                  ]
                : countryList
            }
            initial={defaultCountry}
          />
        )}
      </div>
    </>
  )
}

export default Address
