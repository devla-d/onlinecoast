import { useContext } from "react";
import { UserDetailContex } from "../pages/UserDetail";
import EditUser from "./EditUser";
import TopupModal from "./TopupModal";
import UserDetailsOne from "./UserDetailsOne";

const UserDetailsStep = () => {
  const { step } = useContext(UserDetailContex)!;

  let context = [<UserDetailsOne />, <TopupModal />, <EditUser />];

  return context[step];
};

export default UserDetailsStep;
