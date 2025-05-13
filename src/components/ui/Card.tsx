import React from 'react';
import { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = false,
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-card p-6';
  const hoverClasses = hover ? 'transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-card-hover' : '';
  const clickClasses = onClick ? 'cursor-pointer' : '';
  
  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;