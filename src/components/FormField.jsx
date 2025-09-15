const FormField = ({ fieldName, FieldIcon, fieldValue, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={fieldName}
        className="block text-sm font-medium text-gray-300 mb-3"
      >
        Ingrese su {fieldName}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <FieldIcon className="h-5 text-gray-300 mx-2" />
        </div>
        <input
          id={fieldName}
          type={fieldName}
          value={fieldValue}
          onChange={handleInputChange}
          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm text-gray-400"
        />
      </div>
    </div>
  );
}

export default FormField