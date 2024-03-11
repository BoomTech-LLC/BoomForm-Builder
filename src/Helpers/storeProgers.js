export const storeProgresStore = (
  field,
  localStorageFormData,
  localStorageStatus
) => {
  const localStorageFormData = localStorageFormData[field.id];
  const handleChange = ({ id, value }) =>
    window._handleChange && window._handleChange({ id, value });

  if (
    field &&
    localStorageFormData &&
    localStorageStatus !== ('reseted' || null)
  )
    switch (field.type) {
      case 'name':
        ['first', 'middle', 'last'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: localStorageFormData[part]
          })
        );
        return {
          ...field,
          localStorageFormData
        };

      case 'address':
        ['city', 'country', 'street', 'street2', 'zip'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: localStorageFormData[part]
          })
        );

        return {
          ...field,
          defaultCountry: localStorageFormData.country.key,
          localStorageFormData: {
            ...localStorageFormData
          }
        };

      case 'time':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}.format`,
            value: localStorageFormData.format
          });

        window._handleChange &&
          window._handleChange({
            id: `${field.id}.hour`,
            value: localStorageFormData.hour
          });

        window._handleChange &&
          window._handleChange({
            id: `${field.id}.minute`,
            value: localStorageFormData.minute
          });

        return {
          ...field,
          localStorageFormData
        };

      case 'price ':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}.first`,
            value: localStorageFormData.first
          });

        window._handleChange &&
          window._handleChange({
            id: `${field.id}.last`,
            value: localStorageFormData.last
          });

        return {
          ...field,
          localStorageFormData
        };

      case 'multipleChoice':
        const multipleChoiceOpitons = field.options.map(option => ({
          ...option,
          checked: localStorageFormData[option.key]
        }));

        window._handleChange &&
          window._handleChange({
            id: `${field.id}`,
            value: localStorageFormData
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
            value: localStorageFormData
          });
        return {
          ...field,
          initial: localStorageFormData
        };

      case 'select':
        window._handleChange &&
          window._handleChange({
            id: `${field.id}.size`,
            value: localStorageFormData.key
          });

        return {
          ...field,
          initial: localStorageFormData.key
        };

      case 'singleChoice':
        const singleChoiceOptions = field.options.map(option => {
          return {
            ...option,
            checked: option.value === localStorageFormData
          };
        });

        window._handleChange &&
          window._handleChange({
            id: `${field.id}`,
            value: localStorageFormData
          });

        return { ...field, options: singleChoiceOptions };

      case 'phone':
        ['code', 'phone'].forEach(part =>
          handleChange({
            id: `${field.id}.${part}`,
            value: localStorageFormData[part]
          })
        );

        return {
          ...field,
          defaultCountryCode: localStorageFormData.code,
          initial: localStorageFormData.phone
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
