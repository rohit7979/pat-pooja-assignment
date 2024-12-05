import React, { useReducer, useState } from 'react';
import Button from './Button';
import FormField from './FormField';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return {}; 
    default:
      return state;
  }
};

const FormContainer = ({ config, onSubmit }) => {
  const [formState, dispatch] = useReducer(formReducer, {});
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    const { validation } = field;
    let errorMessage = '';

    if (validation?.required && !value) {
      errorMessage = `${field.label} is required.`;
    } else if (validation?.minLength && value.length < validation.minLength) {
      errorMessage = `${field.label} must be at least ${validation.minLength} characters.`;
    } else if (validation?.pattern && !new RegExp(validation.pattern).test(value)) {
      errorMessage = `${field.label} is invalid.`;
    }

    return errorMessage;
  };

  const validateForm = () => {
    const newErrors = {};
    config.fields.forEach((field) => {
      const value = formState[field.name] || '';
      const error = validateField(field, value);
      if (error) newErrors[field.name] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      dispatch({ type: 'RESET_FORM' });
      setErrors({});
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch({ type: 'RESET_FORM' });
    setErrors({});
  };

  const handleChange = (field, value) => {
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field.name]: error }));
    dispatch({ type: 'UPDATE_FIELD', field: field.name, value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-50 rounded shadow-md">
        <h1 className='text-2xl font-bold mb-5 text-teal-700 '>Feedback Form</h1>
      {config.fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formState[field.name] || ''}
          onChange={(value) => handleChange(field, value)}
          error={errors[field.name]}
        />
      ))}

      <div className="flex space-x-4">
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FormContainer;
