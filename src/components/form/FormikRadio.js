import { useField } from "formik";

const FormikRadio = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });

  return (
    <div>
      <label htmlFor=""></label>
      <input type="radio" name="" id="" />
    </div>
  );
};

export default FormikRadio;
