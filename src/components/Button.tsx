import React from 'react';

interface ButtonProps {
  label: string;
  icon: React.ElementType;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  label,
  icon: Icon,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary hover:bg-secondary',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    success: 'bg-green-600 hover:bg-green-700',
    danger: 'bg-red-600 hover:bg-red-700',
    warning: 'bg-yellow-600 hover:bg-yellow-700',
  };
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const iconSizes = {
    xs: 'w-5',
    sm: 'w-6',
    md: 'w-6',
    lg: 'w-8',
  };
  return (
    <>
      <button
        className={`
          ${variantClasses[variant]} 
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          rounded-lg transition-all duration-300
        `}
        disabled={disabled}
        onClick={onClick}>
        <div className={`flex justify-center ${sizeClasses[size]}`}>
          <Icon
            className={`${iconSizes[size]} text-white border-amber-600 pr-1.5`}
          />
          <p className="text-white font-medium">{label}</p>
        </div>
      </button>
    </>
  );
};

export default Button;
