import { axiosPrivate } from "@/utils";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useAppSelector } from "./useStore";

const useAxiosPrivate = () => {
  const user = useAppSelector((state) => state.user.user);

  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccestoken = await refresh();

          prevRequest.headers["Authorization"] = `Bearer ${newAccestoken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh, user]);

  return axiosPrivate;
};

export default useAxiosPrivate;
