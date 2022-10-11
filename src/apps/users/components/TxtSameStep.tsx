import { useContext } from "react";
import { TxtSameContext } from "../pages/TransferToSame";
import TxtSameOne from "./TxtSameOne";

const TxtSameStep = () => {
  const { currentSteps } = useContext(TxtSameContext)!;
  console.log(currentSteps);
  const contents = [<TxtSameOne />];
  return contents[currentSteps];
};

export default TxtSameStep;
