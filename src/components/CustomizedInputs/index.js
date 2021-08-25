import React, { useState } from 'react';
import { InputGroup, InputField, InputLabel } from './styles';

export default function CustomizedInputs({ inputName, inputType }) {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <InputGroup>
      <InputField
        type={inputType}
        value={value}
        onChange={e => handleTextChange(e.target.value)}
      />
      <InputLabel className={isActive ? 'Active' : ''} htmlFor="email">
        {inputName}
      </InputLabel>
    </InputGroup>
  );
}
