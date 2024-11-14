import React, { useState } from 'react';
import { buttonStyles } from '../styles/styles';

const Button = ({ text, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={hover ? buttonStyles.buttonHover : buttonStyles.button}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
