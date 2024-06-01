import React, { useState } from 'react';
import defaultImage from '../../public/button_default.svg';
import pressedImage from '../../public/button_pressed.svg';

const ButtonToggle: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div onClick={handleClick}>
      <img
        src={isPressed ? pressedImage : defaultImage}
        alt="toggle button"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ButtonToggle;
