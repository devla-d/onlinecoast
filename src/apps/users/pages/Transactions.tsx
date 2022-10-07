import useUtils from "@/hooks/useUtils";
import BreadcrumNav from "../components/BreadcrumNav";
import TxtCard from "../components/TxtCard";
import { TransactionIn } from "../utils";

const Transactions = () => {
  useUtils("Transaction logs");
  const transaction: TransactionIn = {
    amount: 200,
    id: 2,
    mode: "debit",
    date: new Date().toString(),
    status: "pending",
    ref: "xxxxxxxxxx",
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-item-center">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Transactions" currentPage="logs (2)" />
          {/* breadcrum */}
          <div className="mb-3"></div>

          <div className="col-lg-8">
            <TxtCard transaction={transaction} />
            <TxtCard transaction={transaction} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
