import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  name: Yup.string().min(5, "too short").required("required"),
  email: Yup.string().email("invalid email format").required("required"),
  phonenumber: Yup.number().required("required"),
  address: Yup.string().required("required"),
  city: Yup.string().required("required"),
  zipcode: Yup.string().required("required"),
  country: Yup.string().required("required"),
});
