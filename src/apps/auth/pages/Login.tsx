import { createContext, useState } from "react";
import LoginStep from "../components/LoginStep";
import { INLoginContext, INLOGINRESPONSE } from "../utils";

export const LoginContext = createContext<INLoginContext | undefined>(
  undefined
);

const Login = () => {
  const [loading, setloading] = useState(false);
  const [storeDate, setstoreDate] = useState<INLOGINRESPONSE>();
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
