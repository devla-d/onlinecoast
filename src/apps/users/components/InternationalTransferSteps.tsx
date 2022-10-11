import { useContext } from "react";
import { TransferToInterContext } from "../pages/InternationalTransfer";
import InternationalTransferOne from "./InternationalTransferOne";
import InternationalTransferTwo from "./InternationalTransferTwo";

const InternationalTransferSteps = () => {
  const { currentSteps } = useContext(TransferToInterContext)!;
  let context = [<InternationalTransferOne />, <InternationalTransferTwo />];
  return context[currentSteps];
};

export default InternationalTransferSteps;
