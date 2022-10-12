import UserDetailsOne from "./UserDetailsOne";
import UserDetailTwo from "./UserDetailTwo";

const UserDetailsStep = () => {
  let context = [<UserDetailsOne />, <UserDetailTwo />];

  return context[0];
};

export default UserDetailsStep;
