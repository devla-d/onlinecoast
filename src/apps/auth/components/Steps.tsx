import { useContext } from "react";
import { CreateAccContext } from "../pages/CreateAccountDetails";
import CreateAccOne from "./CreateAccOne";
import CreateAccThtree from "./CreateAccThtree";
import CreateAccTwo from "./CreateAccTwo";
import SubmitAccount from "./SubmitAccount";

const Steps = () => {
  const formContext = useContext(CreateAccContext);
  if (formContext) {
    const currentForm = [
      <CreateAccOne />,
      <CreateAccTwo />,
      <CreateAccThtree />,
      <SubmitAccount />,
    ];

    return currentForm[formContext.activeSteps];
  } else {
    return (
      <>
        <div className="text-center">
          <h3>Not Found</h3>
        </div>
      </>
    );
  }
};

export default Steps;
