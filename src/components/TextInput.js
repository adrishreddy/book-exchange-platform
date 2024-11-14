import React from 'react';
import { textInputStyles } from '../styles/styles';

const TextInput = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div style={textInputStyles.inputWrapper}>
      <label style={textInputStyles.label}>{label}</label>
      <input
        style={textInputStyles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
