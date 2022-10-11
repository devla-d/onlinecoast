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

export const SecuritySchema = yup.object().shape({
  security_code: yup
    .string()
    .min(4, "Security pin must be 4 characters long")
    .max(4, "Security pin must be 4 characters long")
    .required("Security pin is required"),
});

export const ResetPasswordSchema = yup.object().shape({
  newpassword: yup
    .string()
    .min(5)
    .max(12)
    .matches(passwordRules, "Please create a stronger password")
    .required("New Password Required"),

  confirmnewpassword: yup
    .string()
    .oneOf([yup.ref("newpassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export interface DesFormData {
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

export interface DesCreateAccContext {
  formData: DesFormData;
  setformData: React.Dispatch<React.SetStateAction<DesFormData>>;
  activeSteps: number;
  setActivesteps: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: (newData: DesFormData) => void;
  handlePrevStep: (newData: DesFormData) => void;
  verifyData: DesSignUpVerify | undefined;
}

export interface DesSignUpVerify {
  error?: string;
  user?: {
    email: string;
    password: string;
  };
}

export interface DesFormValues {
  email: string;
  password: string;
}

export interface DesRegisterResponse {
  errors?: string | string[];
  error?: string;
  msg?: string;
}

export interface DesUser {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  account_number: string;
  balance: number;
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
  profile_img: string;
  roles: string;
  is_active: string;
  password: string;
}

export interface DesIntialUserSlicer {
  existingEmails: Array<string>;
  user?: DesUser;
  refreshToken: string;
  accessToken: string;
  accountNumbers: Array<string>;
}

export interface DesExUserData {
  existingEmails: Array<string>;
}

export interface DesLoginResponse {
  user: DesUser;
  msg: string;
  accessToken: string;
  refreshToken: string;
  errors: string | Array<string>;
}

export interface INLoginContext {
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  storeDate: DesLoginResponse | undefined;
  setstoreDate: React.Dispatch<
    React.SetStateAction<DesLoginResponse | undefined>
  >;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface DesForgotPasswordResponse {
  errors?: string[] | string;
  msg?: string;
}

export interface DesJwtPayload {
  email: string;
  id: number;
  iat: string;
  exp: string;
}

export interface DesResetVerifyResponse {
  user?: DesJwtPayload;
  errors?: string;
}

export interface DesResetPasswordResponse {
  msg?: string;
  errors?: string[];
}

export interface DesAccountNumbers {
  accountNumbers: Array<string>;
}
