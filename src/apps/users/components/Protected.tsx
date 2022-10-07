import { useAppSelector } from "@/hooks/useStore";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const Protected = () => {
  const user = useAppSelector((state) => state.user.user);
  if (user) {
    return <Outlet />;
  } else {
    toast.warn("Please login");
    return <Navigate to={"/sign-in"} />;
  }
};

export default Protected;
