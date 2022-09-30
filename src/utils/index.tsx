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
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  value: string;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export interface CustomSubmitBtnProps {
  color: string;
  loading: boolean;
  text: string;
  type: "button" | "submit" | "reset";
}
