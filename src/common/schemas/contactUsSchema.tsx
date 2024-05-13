import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  fullname: yup.string().required("Full Name Required"),
  email: yup.string().email().required("Email Required"),
  country: yup.string().required("Country Required"),
  phone: yup.string(),
  service: yup.string().required("Service Required"),
  description: yup.string(),
});
