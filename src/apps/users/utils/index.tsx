import { DesUser } from "@/apps/auth/utils";
import * as yup from "yup";

export enum STATUS {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  DECLINED = "DECLINED",
}

export const toggleSidebar = () => {
  var sidebar = document.getElementById("sideBar") as HTMLElement;
  var sidebarToggler = document.querySelector("a#toogleSidebar i") as Element;

  if (!sidebar.classList.contains("toggled")) {
    sidebarToggler.classList.remove("fa-bars");
    sidebarToggler.classList.add("fa-xmark");
    sidebar.classList.add("toggled");
  } else {
    sidebarToggler.classList.remove("fa-xmark");
    sidebarToggler.classList.add("fa-bars");
    sidebar.classList.remove("toggled");
  }
};

export const clossSideBar = () => {
  var sidebar = document.getElementById("sideBar") as HTMLElement;
  var sidebarToggler = document.querySelector("a#toogleSidebar i") as Element;
  sidebarToggler.classList.remove("fa-xmark");
  sidebarToggler.classList.add("fa-bars");
  sidebar.classList.remove("toggled");
};

export function cc_format(value: string) {
  let len, i;
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}
export interface DesBreadcrumNav {
  pagenavTitle: string;
  currentPage: string;
}

export interface DesTransaction {
  id: number;
  user: DesUser;

  amount: number;

  benneficiary_name: string;

  benneficiary_accnumber: string;

  bic_code: string;

  bank_name: string;

  purpose: string;

  firstname: string;

  lastname: string;

  phone: string;

  email: string;

  city: string;

  country: string;
  mode: string;

  createdAt: Date;

  updatedAt: Date;
  status: STATUS;
}

export interface DesTransactionCard {
  transaction: DesTransaction;
}

export interface DesTransactionRespones {
  transaction: DesTransaction[];
  msg: string;
}

export interface DesCard {
  user: DesUser;

  card_number: string;

  card_type: string;

  card_name: string;

  card_cvv: string;

  billing_address: string;

  zipcode: string;
  expire: string;
}

export interface CardResponse {
  card: DesCard | null;
  msg: string;
}

export const TransferToSameSchema = (account_numbers: Array<string>) =>
  yup.object().shape({
    amount: yup
      .number()
      .positive()
      .integer()
      .min(10, "Minimum is $10")
      .required("Amount is required"),
    account_number: yup
      .string()
      .oneOf(account_numbers, "Account number is invalid")
      .required("Account number is required"),

    purpose: yup.string().notRequired(),

    beneficiary: yup.string().notRequired(),
  });
export const TransferToSameSchemaTwo = yup.object().shape({
  security_code: yup
    .string()
    .min(4, "Security pin must be 4 characters long")
    .max(4, "Security pin must be 4 characters long")
    .required("Security pin is required"),
});

export interface DesTxtSameFormData {
  amount: string;
  account_number: string;
  purpose?: string;
  beneficiary?: string;
}
export interface DesTxtOtherFormData {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  ben_account_number: string;
  iban_number: string;
  bank_name: string;
  swift_code: string;
  amount: string;
  purpose: string;
}
export interface DesTransferToSameContext {
  currentSteps: number;
  setcurrentSteps: React.Dispatch<React.SetStateAction<number>>;
  formData: DesTxtSameFormData | undefined;
  setformData: React.Dispatch<
    React.SetStateAction<DesTxtSameFormData | undefined>
  >;
}
export interface DesTransferToOtherContext {
  currentSteps: number;
  setcurrentSteps: React.Dispatch<React.SetStateAction<number>>;
  formData: DesTxtOtherFormData | undefined;
  setformData: React.Dispatch<
    React.SetStateAction<DesTxtOtherFormData | undefined>
  >;
}

export interface DesTransferToInterContext {
  currentSteps: number;
  setcurrentSteps: React.Dispatch<React.SetStateAction<number>>;
  formData: DesTxtInterFormData | undefined;
  setformData: React.Dispatch<
    React.SetStateAction<DesTxtInterFormData | undefined>
  >;
}

export const TransferToOtherOneSchema = yup.object().shape({
  first_name: yup.string().required("Firstname Is Required"),
  last_name: yup.string().required("Lastname Is Required"),
  phone: yup.string().notRequired(),
  email: yup.string().email("Email is invalid").notRequired(),
  ben_account_number: yup.string().required("Benneficiary name Is Required"),
  iban_number: yup.string().required("IBAN Number  Is Required"),
  bank_name: yup.string().required("Bank name Is Required"),
  swift_code: yup.string().required("Swift/BIC Code  Is Required"),
  amount: yup
    .number()
    .positive()
    .integer()
    .min(20, "Minimum is $20")
    .required("Amount is required"),
  purpose: yup.string().notRequired(),
});

export const TransferToInterOneSchema = yup.object().shape({
  first_name: yup.string().required("Firstname Is Required"),
  last_name: yup.string().required("Lastname Is Required"),
  country: yup.string().notRequired(),
  city: yup.string().notRequired(),
  ben_account_number: yup.string().required("Benneficiary name Is Required"),
  iban_number: yup.string().required("IBAN Number  Is Required"),
  bank_name: yup.string().required("Bank name Is Required"),
  swift_code: yup.string().required("Swift/BIC Code  Is Required"),
  amount: yup
    .number()
    .positive()
    .integer()
    .min(20, "Minimum is $20")
    .required("Amount is required"),
  purpose: yup.string().notRequired(),
});

export interface DesTxtInterFormData {
  first_name: string;
  last_name: string;
  country: string;
  city: string;
  ben_account_number: string;
  iban_number: string;
  bank_name: string;
  swift_code: string;
  amount: string;
  purpose: string;
}
