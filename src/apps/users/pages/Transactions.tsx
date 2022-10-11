import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUtils from "@/hooks/useUtils";
import { useEffect, useState } from "react";
import BreadcrumNav from "../components/BreadcrumNav";
import TxtCard from "../components/TxtCard";
import { DesTransaction, DesTransactionRespones } from "../utils";

const Transactions = () => {
  useUtils("Transaction logs");
  const axiosPrivate = useAxiosPrivate();
  const [transactions, setTxt] = useState<DesTransaction[]>();
  useEffect(() => {
    axiosPrivate
      .get<DesTransactionRespones>("/transaction-logs/")
      .then(({ data }) => {
        setTxt(data.transaction);
      })
      .catch((e) => {
        console.log(e);
      });
    return () => {};
  }, []);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-item-center">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav
            pagenavTitle="Transactions"
            currentPage={`logs (${transactions?.length})`}
          />
          {/* breadcrum */}
          <div className="mb-3"></div>

          <div className="col-lg-8">
            {transactions && transactions.length > 0 ? (
              transactions.map((tx) => <TxtCard transaction={tx} />)
            ) : (
              <div className="text-center">
                <h6>No Transactions</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
