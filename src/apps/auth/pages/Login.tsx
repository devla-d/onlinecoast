import useUtils from "@/hooks/useUtils";
import { createContext, useState } from "react";
import LoginStep from "../components/LoginStep";
import { INLoginContext, DesLoginResponse } from "../utils";

export const LoginContext = createContext<INLoginContext | undefined>(
  undefined
);

const Login = () => {
  useUtils("Login into your account");
  const [loading, setloading] = useState(false);
  const [storeDate, setstoreDate] = useState<DesLoginResponse>();
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <LoginContext.Provider
        value={{
          loading,
          setloading,
          storeDate,
          setstoreDate,
          currentStep,
          setCurrentStep,
        }}
      >
        <LoginStep />
      </LoginContext.Provider>
    </>
  );
};

export default Login;
