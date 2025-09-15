import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
};

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = false 
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm overflow-hidden';
  const hoverClasses = hoverable ? 'hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;