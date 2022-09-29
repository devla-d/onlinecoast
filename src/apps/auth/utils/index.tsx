import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const RegisterSchema = (activeEmail: string[]) => {
  return yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .notOneOf(activeEmail, "Email is already taken")
      .required("Email is required"),

    password: yup
      .string()
      .min(5)
      .max(12)
      .matches(passwordRules, "Please create a stronger password")
      .required("Password Required"),

    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
};

export const Loginschema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(5).max(12).required("Password is Required"),
});
