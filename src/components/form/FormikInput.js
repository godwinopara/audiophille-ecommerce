import { useField } from "formik";

const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={props.id || props.name}
          className={`${meta.touched && meta.error ? "text-red-100" : null} font-bold text-xl`}
        >
          {label}
        </label>
        <span className="text-red-100">{meta.error}</span>
      </div>
      <input
        className={`border-2 ${meta.touched && meta.error ? "border-red-100" : "border-gray-100"}
            block rounded-lg w-full mb-10 mt-4 pl-10 py-7 font-bold`}
        {...props}
        {...field}
      />
    </div>
  );
};

export default FormikInput;
