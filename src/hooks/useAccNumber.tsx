import { updateAccounNumbers } from "@/apps/auth/slicer";
import { DesAccountNumbers } from "@/apps/auth/utils";

import { useEffect } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import { useAppDispatch } from "./useStore";

const useAccNumber = () => {
  const dispatch = useAppDispatch();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get<DesAccountNumbers>("/account-numbers")
      .then(({ data }) => {
        dispatch(updateAccounNumbers(data));
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {};
  }, []);
};

export default useAccNumber;
