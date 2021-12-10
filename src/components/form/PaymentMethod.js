import Label from "./Label";

const PaymentMethod = ({ labelText, radioName, value, onChange, checked }) => {
  return (
    <div className="flex border items-center">
      <input
        className="cursor-pointer"
        type="radio"
        checked={checked}
        value={value}
        id={radioName}
        onChange={onChange}
      />
      <Label text={labelText} />
    </div>
  );
};

export default PaymentMethod;
