export const storeProgresSubmitStore = ({
  fields,
  localStorageFormData,
  localStorageStatus
}) => {
  const handleChange = ({ id, value }) =>
    window._handleChange && window._handleChange({ id, value });
  fields.forEach(field => {
    const formData = localStorageFormData[field.id];
    if (field && formData)
      if (localStorageStatus !== 'reseted') {
        switch (field.type) {
          case 'name':
            ['first', 'middle', 'last'].forEach(part => {
              formData[part] &&
                handleChange({
                  id: `${field.id}.${part}`,
                  value: formData[part]
                });
            });
            break;

          case 'address':
            ['city', 'country', 'street', 'street2', 'zip'].forEach(part =>
              handleChange({
                id: `${field.id}.${part}`,
                value: formData[part]
              })
            );
            break;

          case 'time':
            handleChange({
              id: `${field.id}.format`,
              value: formData.format
            });

            handleChange({
              id: `${field.id}.hour`,
              value: formData.hour
            });

            handleChange({
              id: `${field.id}.minute`,
              value: formData.minute
            });
            break;

          case 'price':
            ['first', 'last'].forEach(part =>
              handleChange({
                id: `${field.id}.${part}`,
                value: formData[part]
              })
            );
            break;
          case 'multipleChoice':
            const multipleChoiceOpitons = field.options?.map(option => ({
              ...option,
              checked: formData[option.key]
            }));

            multipleChoiceOpitons.forEach(option =>
              handleChange({
                id: `${field.id}.${option.key}`,
                value: option.checked
              })
            );
            break;

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
            handleChange({
              id: `${field.id}`,
              value: formData
            });
            break;

          case 'select':
            handleChange({
              id: `${field.id}`,
              value: formData
            });
            break;

          case 'singleChoice':
            handleChange({
              id: `${field.id}`,
              value: formData
            });
            break;

          case 'phone': {
            handleChange({
              id: `${field.id}.phone`,
              value: formData['phone']
            });
            handleChange({
              id: `${field.id}.code`,
              value: formData['code']
            });

            break;
          }
        }
      } else {
        switch (field.type) {
          case 'name':
            ['first', 'middle', 'last'].forEach(part =>
              handleChange({
                id: `${field.id}.${part}`,
                value: ''
              })
            );
            break;

          case 'address':
            ['city', 'street', 'street2', 'zip'].forEach(part =>
              handleChange({
                id: `${field.id}.${part}`,
                value: ''
              })
            );

            handleChange({
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
            break;

          case 'time':
            ['hour', 'minute'].forEach(part =>
              handleChange({
                id: `${field.id}.${part}`,
                value: null
              })
            );
            handleChange({
              id: `${field.id}.format`,
              value: null
            });
            break;

          case 'price':
            ['first', 'last'].forEach(part =>
              handleChange({
                id: `${field.id}.${part}`,
                value: null
              })
            );
            break;

          case 'select':
            handleChange({
              id: `${field.id}`,
              value: null
            });
            break;

          case 'multipleChoice':
            const multipleChoiceOpitons = field.options?.map(option => ({
              ...option,
              checked: formData[option.key]
            }));

            multipleChoiceOpitons.forEach(option =>
              handleChange({
                id: `${field.id}.${option.key}`,
                value: false
              })
            );

            break;

          case 'phone':
            handleChange({
              id: `${field.id}.phone`,
              value: ''
            });
            break;

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
            handleChange({
              id: `${field.id}`,
              value: null
            });
            break;
        }
      }
  });
};
