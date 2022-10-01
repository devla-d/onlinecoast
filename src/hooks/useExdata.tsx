import { getExistingdata } from "@/apps/auth/slicer";
import { useEffect } from "react";
import { useAppDispatch } from "./useStore";

const useExdata = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExistingdata(true));

    return () => {};
  }, []);
};

export default useExdata;
