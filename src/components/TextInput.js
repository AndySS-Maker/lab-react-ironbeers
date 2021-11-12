import React from 'react';

function TextInput({
  variant = '',
  _id,
  label,
  type,
  onChange,
  value,
  name,
  required,
}) {
  const formFieldContentClass = `form-field-content ${
    variant ? `form-field-content--${variant}` : ''
  }`;
  return (
    <div className="form-field">
      <label className="form-field-label" htmlFor={_id}>
        {label}
      </label>
      <input
        _id={_id}
        type={type}
        className={formFieldContentClass}
        onChange={onChange}
        value={value}
        name={name}
        required={required}
      />
    </div>
  );
}

export default TextInput;
