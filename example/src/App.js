import React from 'react';
// import Sidebar from './Sidebar'
// import Content from './Content'
import { Builder } from 'boomform-builder';

const App = () => {
  // const [example, setExample] = useState({ name: 'Logic', option: 'logic' })
  return (
    <>
      <Builder
        fields={[
          {
            id: 'email',
            type: 'email',
            label: 'Please Type Your Email',
            placeholder: 'Type ...',
            validation: {
              email: { msg: 'Wrong Email Format' },
              required:{msg:"SUKI SUIKI"},
              regEx: {
                msg: 'Business emails only, common providers like Gmail, Yahoo, etc., are not allowed.',
                value:
                  '^$|^[a-zA-Z0-9._%+-]+@(?!yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|protonmail\.com|mail\.com|zoho\.com|live\.com|msn\.com|ymail\.com|gmx\.com|fastmail\.com|mail\.ru|bk\.ru|gmail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
              }
            }
          }
        ]}
      />
    </>
  );
};

export default App;
