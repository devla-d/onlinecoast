import { BASE_URL } from "@/utils";
import axios from "axios";
import { useAppSelector } from "./useStore";

const useAxios = () => {
  const token = useAppSelector((state) => state.user.accessToken);

  const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : false,
      "x-app-key": "d619d4deb806",
    },
  });

  return axiosPrivate;
};

export default useAxios;
