import React from 'react';
import './Button.scss';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title, onClick, disabled = false,
}) => (
  <button className={`button ${disabled ? 'inactive' : ''}`} type='button' onClick={onClick}>{title}</button>
);

export default Button;
