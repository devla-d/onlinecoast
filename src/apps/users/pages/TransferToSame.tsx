import useUtils from "@/hooks/useUtils";
import { createContext, useState } from "react";
import TxtSameStep from "../components/TxtSameStep";
import { DesTransferToSameContext, DesTxtSameFormData } from "../utils";

export const TxtSameContext = createContext<
  DesTransferToSameContext | undefined
>(undefined);

const TransferToSame = () => {
  useUtils("Transfer to onlineseacoat bank");
  const [currentSteps, setcurrentSteps] = useState(0);
  const [formData, setformData] = useState<DesTxtSameFormData>();
  return (
    <>
      <TxtSameContext.Provider
        value={{ currentSteps, setcurrentSteps, formData, setformData }}
      >
        <TxtSameStep />
      </TxtSameContext.Provider>
    </>
  );
};

export default TransferToSame;
