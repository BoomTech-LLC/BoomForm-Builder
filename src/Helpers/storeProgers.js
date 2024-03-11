export const storeProgresStore = (
  field,
  localStorageFormData,
  localStorageStatus
) => {
  const initials = localStorageFormData[field.id];
  const handleChange = ({ id, value }) =>
    window._handleChange && window._handleChange({ id, value });

  if (field && initials && localStorageStatus !== ('reset' || null))
    switch (field.type) {
      case 'name':
        ['first', 'middle', 'last'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: initials[part]
          })
        );
        return {
          ...field,
          initials
        };

      case 'address':
        ['city', 'country', 'street', 'street2', 'zip'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: initials[part]
          })
        );

        return {
          ...field,
          defaultCountry: initials.country.key,
          initials: {
            ...initials
          }
        };

      case 'time':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}.format`,
            value: initials.format
          });

        window._handleChange &&
          window._handleChange({
            id: `${field.id}.hour`,
            value: initials.hour
          });

        window._handleChange &&
          window._handleChange({
            id: `${field.id}.minute`,
            value: initials.minute
          });

        return {
          ...field,
          initials
        };

      case 'price ':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}.first`,
            value: initials.first
          });

        window._handleChange &&
          window._handleChange({
            id: `${field.id}.last`,
            value: initials.last
          });

        return {
          ...field,
          initials
        };

      case 'multipleChoice':
        const multipleChoiceOpitons = field.options.map(option => ({
          ...option,
          checked: initials[option.key]
        }));

        window._handleChange &&
          window._handleChange({
            id: `${field.id}`,
            value: initials
          });

        return {
          ...field,
          options: multipleChoiceOpitons
        };

      case 'text':
      case 'password':
      case 'email':
      case 'number':
      case 'url':
      case 'date':
      case 'scaleRating':
      case 'starRating':
      case 'textarea':
      case 'terms':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}`,
            value: initials
          });
        return {
          ...field,
          initial: initials
        };

      case 'select':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}.size`,
            value: initials.key
          });

        return {
          ...field,
          initial: initials.key
        };

      case 'singleChoice':
        const singleChoiceOptions = field.options.map(option => {
          return {
            ...option,
            checked: option.value === initials
          };
        });

        window._handleChange &&
          window._handleChange({
            id: `${field.id}`,
            value: initials
          });

        return { ...field, options: singleChoiceOptions };

      case 'phone':
        ['code', 'phone'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: initials[part]
          })
        );

        return {
          ...field,
          defaultCountryCode: initials.code,
          initial: initials.phone
        };
    }
  else {
    switch (field.type) {
      case 'name':
        ['first', 'middle', 'last'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: ''
          })
        );

        return {
          ...field
        };

      case 'address':
        ['city', 'street', 'street2', 'zip'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: ''
          })
        );

        window._handleChange &&
          window._handleChange({
            id: `${field.id}.country`,
            value: {
              code: 'US',
              dial_code: '+1',
              flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
              key: 229,
              name: 'United States',
              value: 'United States'
            }
          });

        return {
          ...field
        };

      case 'time':
        ['hour', 'minute'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: null
          })
        );
        window._handleChange &&
          window._handleChange({
            id: `${field.id}.format`,
            value: {}
          });

      case 'price ':
        ['first', 'last'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: ''
          })
        );
      case 'select':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}.size`,
            value: null
          });

        return { ...field };

      case 'multipleChoice':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}`,
            value: null
          });

        return { ...field };

      case 'phone':
        ['code', 'phone'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: ''
          })
        );
        return { ...field };

      case 'text':
      case 'password':
      case 'email':
      case 'number':
      case 'url':
      case 'date':
      case 'scaleRating':
      case 'starRating':
      case 'textarea':
      case 'terms':
      case 'singleChoice':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}`,
            value: null
          });

        return {
          ...field
        };
    }
  }
  return { ...field };
};
