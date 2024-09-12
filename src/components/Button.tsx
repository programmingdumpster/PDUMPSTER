import React from 'react';

// Definiujemy typy dla propsów
interface ButtonProps {
  text: string; // Prop 'text' musi być typu string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="btn btn-sm btn-outline-light d-none d-lg-inline-block">
      <span style={{fontFamily: 'Montserrat'}}>{text}</span>
    </div>
  );
};

export default Button;
