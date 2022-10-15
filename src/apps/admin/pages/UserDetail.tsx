import { DesUser } from "@/apps/auth/utils";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUtils from "@/hooks/useUtils";
import { AxiosError } from "axios";
import { useState, useEffect, createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import UserDetailsStep from "../components/UserDetailsStep";

interface DesUserDetailContex {
  user: DesUser | undefined;
  setuser: React.Dispatch<React.SetStateAction<DesUser | undefined>>;
  totalRecieved: number;
  totalSent: number;
  id: string | undefined;
  setstep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
}

export const UserDetailContex = createContext<DesUserDetailContex | undefined>(
  undefined
);

interface DesUserResponse {
  user: DesUser;
  totalRecieved: number;
  totalSent: number;
}

const UserDetail = () => {
  const axiosPrivate = useAxiosPrivate();
  useUtils("User details");
  const [user, setuser] = useState<DesUser>();
  const [totalRecieved, settotalRecieved] = useState(0);
  const [totalSent, settotalSent] = useState(0);
  const [step, setstep] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axiosPrivate
      .get<DesUserResponse>(`/admin/all-users/${id}`)
      .then(({ data }) => {
        setuser(data.user);
        settotalRecieved(data.totalRecieved);
        settotalSent(data.totalSent);
      })
      .catch((e) => {
        let er = e as AxiosError;
        console.log(er);
        if (er.response?.status == 404) {
          navigate("/not-found");
        }
      });

    return () => {
      setuser(undefined);
    };
  }, [id]);

  return (
    <>
      <BreadCrum name="Users Details" />
      <UserDetailContex.Provider
        value={{ setuser, user, totalRecieved, totalSent, id, step, setstep }}
      >
        <UserDetailsStep />
      </UserDetailContex.Provider>
    </>
  );
};

export default UserDetail;
