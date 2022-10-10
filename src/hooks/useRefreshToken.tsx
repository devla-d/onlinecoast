import { resetUser, updateAccess } from "@/apps/auth/slicer";
import { axiosPublic, RefreshResponses } from "@/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "./useStore";

const useRefreshToken = () => {
  const refreshToken = useAppSelector((state) => state.user.refreshToken);
  const dispatch = useAppDispatch();
  const navigete = useNavigate();
  const { pathname } = useLocation();

  const refresh = async () => {
    const { data } = await axiosPublic.post<RefreshResponses>(
      "/refresh-token/",
      {
        refreshToken,
      }
    );

    if (data.errors) {
      dispatch(resetUser());
      toast.error("session expired please login");
      navigete(`/sign-in?next=${pathname}`, { replace: true });
    }
    if (!data.accesstoken) return;
    dispatch(updateAccess(data.accesstoken));
    return data.accesstoken;
  };
  return refresh;
};

export default useRefreshToken;
