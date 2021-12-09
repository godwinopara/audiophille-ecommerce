import Label from "./Label";
import FormInput from "./FormInput";

const InputWrapper = ({ labelText, inputValue, inputType }) => {
  return (
    <div>
      <Label text={labelText} />
      <FormInput inputType={inputType} />
    </div>
  );
};

export default InputWrapper;
