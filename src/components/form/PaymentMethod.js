import Label from "./Label";

const PaymentMethod = ({ labelText, radioName, value, onChange, checked }) => {
  return (
    <div className="flex border border-gray-100 items-center py-7 w-full mb-6 rounded-xl px-6 hover:border-brown-100">
      <input
        className="cursor-pointer mr-6"
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
