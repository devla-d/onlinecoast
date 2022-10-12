import BreadCrum from "../components/BreadCrum";
import UserCard from "../components/UserCard";

const Users = () => {
  return (
    <>
      <BreadCrum name="Users" />
      <div className="row justify-content-center mb-3">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
};

export default Users;
