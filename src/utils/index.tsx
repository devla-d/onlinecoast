import axios from "axios";

export interface RouteInterface {
  id: number;
  element: JSX.Element;
  path: string;
}

export interface DesHero {
  /*** Page title */
  title: string;
  /*** current Page title */
  currentPage: string;
  /***  link to page */
  link?: string;
  image: string;
}

export interface DesCustomInput {
  name: string;
  type: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  value: string | number;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
  children?: JSX.Element | JSX.Element[];
  handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  class_Name?: string;
}

export interface DesCustomSelect {
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

export interface DesCustomSubmitBtn {
  color: string;
  loading: boolean;
  text: string;
  type: "button" | "submit" | "reset";
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const BASE_URL = "https://api.onlineseacoastacct.net/";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: false,
    "x-app-key": "d619d4deb806",
  },
});

export interface DesRefreshResponse {
  errors?: Array<string> | string;
  accesstoken?: string;
}
