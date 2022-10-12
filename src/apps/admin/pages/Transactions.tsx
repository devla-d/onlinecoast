import BreadCrum from "../components/BreadCrum";
import TXCard from "../components/TXCard";

const Transactions = () => {
  return (
    <>
      <BreadCrum name="Transactions" />
      <div className="row justify-content-center mb-3">
        <TXCard />
        <TXCard />
        <TXCard />
        <TXCard />
      </div>
    </>
  );
};

export default Transactions;
