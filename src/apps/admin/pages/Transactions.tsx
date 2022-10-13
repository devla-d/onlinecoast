import { DesTransaction } from "@/apps/users/utils";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import TXCard from "../components/TXCard";

interface DesTxtTResponse {
  transactions: DesTransaction[];
}

const Transactions = () => {
  const axiosPrivate = useAxiosPrivate();
  const [trasactions, settrasactions] = useState<DesTransaction[]>();
  useEffect(() => {
    axiosPrivate
      .get<DesTxtTResponse>("/admin/all-transactions")
      .then(({ data }) => {
        settrasactions(data.transactions);
      })
      .catch(console.log);
    return () => {};
  }, []);

  return (
    <>
      <BreadCrum name="Transactions" />
      <div className="row justify-content-center mb-3">
        {trasactions ? (
          <>
            {trasactions.map((ts) => (
              <TXCard transaction={ts} key={ts.id} />
            ))}
          </>
        ) : (
          <>
            <div className="text-center">
              <h1>Loading...</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Transactions;
