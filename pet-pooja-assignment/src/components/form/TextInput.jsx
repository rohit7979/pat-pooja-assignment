const TextInput = ({ name, placeholder, value, onChange }) => {
    return (
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
      />
    );
  };
  
  export default TextInput;
  