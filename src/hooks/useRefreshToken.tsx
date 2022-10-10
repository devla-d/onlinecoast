import { resetUser, updateAccess } from "@/apps/auth/slicer";
import { axiosPublic, RefreshResponses } from "@/utils";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./useStore";

const useRefreshToken = () => {
  const refreshToken = useAppSelector((state) => state.user.refreshToken);
  const dispatch = useAppDispatch();
  const navigete = useNavigate();

  const refresh = async () => {
    const { data } = await axiosPublic.post<RefreshResponses>(
      "/refresh-token/",
      {
        refreshToken,
      }
    );

    if (data.errors) {
      dispatch(resetUser());
      navigete("/sign-in", { replace: true });

      //   setTimeout(() => {
      //     window.location.reload();
      //   });
    }
    if (!data.accesstoken) return;
    dispatch(updateAccess(data.accesstoken));
    return data.accesstoken;
  };
  return refresh;
};

export default useRefreshToken;
