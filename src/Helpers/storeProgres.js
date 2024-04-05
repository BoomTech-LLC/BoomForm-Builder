export const storeProgresSubmitStore = ({
  fields,
  localStorageFormData,
  localStorageStatus,
  activeStorages
}) => {
  // console.log('🚀 ~ fields:', fields);
  const handleChange = ({ id, value }) =>
    window._handleChange && window._handleChange({ id, value });
  console.log('555555555');
  fields.forEach(field => {
    const formData = localStorageFormData[field.id];
    // console.log('&&&****(((())))', field);

    if (field && formData && localStorageStatus !== 'reseted') {
      console.log('field', field);
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
          console.log('***************', formData.format);
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
          break;

        case 'price':
          console.log('&&&&formData&&&&', formData);
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
            id: `${field.id}.size`,
            value: formData.key
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
            value: {}
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
            id: `${field.id}.size`,
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
