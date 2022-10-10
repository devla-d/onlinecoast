import { useAppSelector } from "@/hooks/useStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Protected = () => {
  const user = useAppSelector((state) => state.user.user);

  const { pathname } = useLocation();
  if (user) {
    return <Outlet />;
  } else {
    toast.warn("Please login");

    return <Navigate to={`/sign-in?next=${pathname}`} replace={true} />;
  }
};

export default Protected;
