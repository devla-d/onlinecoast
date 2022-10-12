import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../pages/Login";
import LoginOne from "./LoginOne";
import LoginTwo from "./LoginTwo";

const LoginStep = () => {
  const { currentStep } = useContext(LoginContext)!;
  const forms = [<LoginOne />, <LoginTwo />, <Navigate to="/notfound" />];
  return forms[currentStep];
};

export default LoginStep;
