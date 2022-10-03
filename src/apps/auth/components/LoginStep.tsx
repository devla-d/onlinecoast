import { useContext } from "react";
import { LoginContext } from "../pages/Login";
import LoginOne from "./LoginOne";
import LoginTwo from "./LoginTwo";

const LoginStep = () => {
  const { currentStep } = useContext(LoginContext)!;
  const forms = [<LoginOne />, <LoginTwo />];
  return forms[currentStep];
};

export default LoginStep;
