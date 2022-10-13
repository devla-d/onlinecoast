import { DesUser } from "@/apps/auth/utils";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUtils from "@/hooks/useUtils";
import { useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import UserCard from "../components/UserCard";

interface DesUserResponse {
  user: DesUser[];
}
const Users = () => {
  useUtils("Users");
  const axiosPrivate = useAxiosPrivate();
  const [users, setusers] = useState<DesUser[]>();
  useEffect(() => {
    axiosPrivate
      .get<DesUserResponse>("/admin/all-users")
      .then(({ data }) => {
        setusers(data.user);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      setusers(undefined);
    };
  }, []);

  return (
    <>
      <BreadCrum name="Users" />
      <div className="row justify-content-center mb-3">
        {users ? (
          <>
            {users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </>
        ) : (
          <>
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3>loading...</h3>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Users;
