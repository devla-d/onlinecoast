import { useContext } from "react";
import { TransferToOtherContext } from "../pages/TransferToOther";
import TransferToOtherOne from "./TransferToOtherOne";
import TransferToOtherTwo from "./TransferToOtherTwo";

const TransferToOtherSteps = () => {
  const { currentSteps } = useContext(TransferToOtherContext)!;
  let contents = [<TransferToOtherOne />, <TransferToOtherTwo />];
  return contents[currentSteps];
};

export default TransferToOtherSteps;
