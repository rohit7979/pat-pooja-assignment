import React from 'react';

const FormField = ({ field, value, onChange, error }) => {
  const handleChange = (e) => {
    const newValue = field.type === 'checkbox' ? e.target.checked : e.target.value;
    onChange(newValue);
  };

  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
        return (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={value}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`p-2 border rounded w-full ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
      case 'textarea':
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={value}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`p-2 border rounded w-full ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
      case 'select':
        return (
          <select
            id={field.name}
            name={field.name}
            value={value}
            onChange={handleChange}
            className={`p-2 border rounded w-full ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="" disabled>
              {field.placeholder || 'Select an option'}
            </option>
            {field.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={field.name}
              name={field.name}
              checked={value}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={field.name} className="text-sm">
              {field.label}
            </label>
          </div>
        );
      case 'radio':
        return (
          <div className="space-y-1 flex gap-10  md:flex-row md:space-y-0 flex-wrap">
            {field.options.map((option, index) => (
              <div key={index} className="bull flex items-center space-x-2">
                <input
                  type="radio"
                  id={`${field.name}-${option}`}
                  name={field.name}
                  value={option}
                  checked={value === option}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={`${field.name}-${option}`} className="text-sm">
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      case 'date':
        return (
          <input
            type="date"
            id={field.name}
            name={field.name}
            value={value}
            onChange={handleChange}
            className={`p-2 border rounded w-full ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={field.name} className="text-sm font-medium">
        {field.label}
      </label>
      {renderField()}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default FormField;
