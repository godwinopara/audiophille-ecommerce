const FormInput = ({ inputType, placeholder, value, onChange, name, inputEmpty }) => {
  return (
    <input
      className={`border-2 ${
        inputEmpty === true ? "border-red-100" : "border-gray-100"
      } rounded-lg mb-10 mt-4 pl-10 py-7 w-full font-bold`}
      type={inputType}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default FormInput;
