import { Roles } from "@/apps/auth/utils";
import { useAppSelector } from "@/hooks/useStore";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminGuard = () => {
  const user = useAppSelector((state) => state.user.user);
  const { pathname } = useLocation();
  if (user) {
    if (user.roles == Roles.ADMIN) {
      return <Outlet />;
    } else {
      toast.error("You are not uathourize to enter this page");
      return <Navigate to="/sign-in" replace={true} />;
    }
  } else {
    toast.warn("Please login");

    return <Navigate to={`/sign-in?next=${pathname}`} replace={true} />;
  }
};

export default AdminGuard;
