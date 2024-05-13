import * as yup from "yup";

import { mailRegexp } from "@/assets/regexp/mail.regexp.ts";

export const contactUsSchema = yup.object().shape({
  fullname: yup.string().required("Full Name Required"),
  email: yup.string().matches(mailRegexp, "Mail format not valid").required("Email Required"),
  country: yup.string().required("Country Required"),
  phone: yup.string(),
  service: yup.string().required("Service Required"),
  description: yup.string(),
});
