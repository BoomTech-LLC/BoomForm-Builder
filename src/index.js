import React from 'react';
import { BoomForm } from 'boomform';
import Form from './Form';
import countries from './Helpers/countries';

const Builder = ({
  global = {},
  fields = [],
  button = {},
  pagination = {},
  logic = [],
  formId,
  payment = {},
  pages = {},
  gridOptions = {}
}) => {
  return (
    <BoomForm
      global={global}
      fields={fields}
      button={button}
      payment={payment}
      pagination={pagination}
      logic={logic}
      pages={pages}
      gridOptions={gridOptions}
    >
      {() => (
        <Form
          global={global}
          fields={fields}
          button={button}
          payment={payment}
          formId={formId}
          pagination={pagination}
          logic={logic}
          pages={pages}
          gridOptions={gridOptions}
        />
      )}
    </BoomForm>
  );
};

export { Builder, countries };
