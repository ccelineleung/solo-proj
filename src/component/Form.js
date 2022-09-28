import React from 'react';

function Form({ text, value, onInput, onKeyUp, readOnly = false, onChange }) {
  return (
    <div>
      <label>{text}</label>
      <input
        type='number'
        value={value}
        onInput={onInput}
        onKeyUp={onKeyUp}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
}

export default Form;
