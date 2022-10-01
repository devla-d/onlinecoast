import React from "react";
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

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

export const CreateAccOneSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  // phone_number: yup.string().notRequired(),
  date_of_birth: yup.string().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  next_of_kin: yup.string().required("Next of kin is required"),
});

export const CreateAccTwoSchema = yup.object().shape({
  street_name: yup.string().required("Street is required"),
  city: yup.string().required("City  is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  zipcode: yup.string().required("Zipcode is required"),
});

export const CreateAccThreeSchema = yup.object().shape({
  security_pin: yup
    .string()
    .min(4, "Security pin must be 4 characters long")
    .max(4, "Security pin must be 4 characters long")
    .required("Security pin is required"),
  account_type: yup.string().required("account type is required"),
  // profile_img: yup.mixed().required("File is required"),
});

export interface formDataI {
  first_name: string;
  last_name: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
  next_of_kin: string;

  street_name: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;

  security_pin: string;
  account_type: string;
  profile_img?: File;
}

export interface CreateAccManager {
  formData: formDataI;
  setformData: React.Dispatch<React.SetStateAction<formDataI>>;
  activeSteps: number;
  setActivesteps: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: (newData: formDataI) => void;
  handlePrevStep: (newData: formDataI) => void;
  verifyData: INSignUpVerify | undefined;
}

export interface INSignUpVerify {
  error?: string;
  user?: {
    email: string;
    password: string;
  };
}

export interface INFormValues {
  email: string;
  password: string;
}

export interface INRegisterResponse {
  errors?: string | string[];
  error?: string;
  msg?: string;
}

export interface INIntialUserSlicer {
  existingEmails: Array<string>;
}

export interface INExUserData {
  existingEmails: Array<string>;
}
