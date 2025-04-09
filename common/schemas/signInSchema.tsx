import * as yup from "yup";

import { mailRegexp } from "../../utils/mail.utils";

export const SignInSchema = yup.object().shape({
  email: yup.string().matches(mailRegexp, "Mail format not valid").required("Email Required"),
  password: yup.string().required("Password is required"),
});
