import React from 'react';

const MAX_STRING_LENGTH = 150;

export const jsonDisplay = (obj: unknown) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

export const truncate = (value: string | number) => {
  let output = value?.toString() ?? '';

  if (output.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }

  return output;
};

export const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2));
};

export const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />;
};
