import Label from "./Label";
import FormInput from "./FormInput";

const InputWrapper = ({ labelText, placeholder, inputType }) => {
  return (
    <div className="w-full">
      <Label text={labelText} />
      <FormInput inputType={inputType} placeholder={placeholder} />
    </div>
  );
};

export default InputWrapper;
