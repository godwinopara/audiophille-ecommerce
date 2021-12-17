import Label from "./Label";
import FormInput from "./FormInput";

const InputWrapper = ({
  labelText,
  placeholder,
  inputType,
  value,
  onChange,
  name,
  isInputFieldEmpty,
}) => {
  return (
    <div className="w-full">
      <Label text={labelText} />
      <FormInput
        inputType={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        inputEmpty={isInputFieldEmpty}
      />
    </div>
  );
};

export default InputWrapper;
