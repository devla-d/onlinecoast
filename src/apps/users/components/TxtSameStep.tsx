import { useContext } from "react";
import { TxtSameContext } from "../pages/TransferToSame";
import TxtSameOne from "./TxtSameOne";
import TxtSameTwo from "./TxtSameTwo";

const TxtSameStep = () => {
  const { currentSteps } = useContext(TxtSameContext)!;

  const contents = [<TxtSameOne />, <TxtSameTwo />];
  return contents[currentSteps];
};

export default TxtSameStep;
