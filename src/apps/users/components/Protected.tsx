import { useAppSelector } from "@/hooks/useStore";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const user = useAppSelector((state) => state.user.user);
  return user ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default Protected;
