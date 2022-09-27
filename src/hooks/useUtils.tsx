import { useEffect } from "react";
import { sizeFont, setBg } from "../utils/helper";

const useUtils = (pageTitle: string) => {
  useEffect(() => {
    sizeFont();
    setBg();
    document.title = pageTitle;
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, [pageTitle]);
  return true;
};

export default useUtils;
