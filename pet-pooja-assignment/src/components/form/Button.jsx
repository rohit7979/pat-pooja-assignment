import React from 'react';

const Button = ({ type = 'button', onClick, children }) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'submit':
        return 'bg-green-500 text-white hover:bg-green-600';
      case 'reset':
        return 'bg-gray-500 text-white hover:bg-gray-600';
      default:
        return 'bg-blue-500 text-white hover:bg-blue-600';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded ${getButtonStyle()} focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      {children}
    </button>
  );
};

export default Button;
