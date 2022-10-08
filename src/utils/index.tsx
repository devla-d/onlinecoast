import axios from "axios";

export interface RouteInterface {
  id: number;
  element: JSX.Element;
  path: string;
}

export interface HeroInterface {
  /*** Page title */
  title: string;
  /*** current Page title */
  currentPage: string;
  /***  link to page */
  link?: string;
  image: string;
}

export interface CustomInputProps {
  name: string;
  type: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  value: string;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
  children?: JSX.Element | JSX.Element[];
  handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface CustomSelectProps {
  name: string;
  type: string;
  label: string;
  value: string;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
  children?: JSX.Element | JSX.Element[];
  handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface CustomSubmitBtnProps {
  color: string;
  loading: boolean;
  text: string;
  type: "button" | "submit" | "reset";
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const BASE_URL = "http://localhost:3030";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: false,
    "x-app-key": "d619d4deb806",
  },
});
