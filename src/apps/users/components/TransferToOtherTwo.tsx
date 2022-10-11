import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppSelector } from "@/hooks/useStore";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TransferToOtherContext } from "../pages/TransferToOther";
import { DesTxtOtherFormData, TransferToSameSchemaTwo } from "../utils";

const TransferToOtherTwo = () => {
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.user.user!);
  const { formData } = useContext(TransferToOtherContext)!;
  let form_data = formData!;
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: {
        security_code: "",
      },
      validationSchema: TransferToSameSchemaTwo,
      onSubmit: (values) => {
        sendRequest(form_data, values);
      },
    });

  const sendRequest = async (val: DesTxtOtherFormData, sec: typeof values) => {
    if (user.security_pin === sec.security_code) {
      setLoading(true);
      try {
        const { data } = await axiosPrivate.post("/transfer-others", val);

        if (data.error) {
          toast.error("Transaction Failed");
        } else {
          toast.info("Transaction created");
        }
        navigate("/transactions-log", { replace: true });
      } catch (error) {}
      return true;
    } else {
      toast.error("Invalid security pin");
      return false;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" mb-3" id="amount_box">
          <CustomInput
            handleBlur={handleBlur}
            handleChange={handleChange}
            label="Security Pin"
            name="security_code"
            type="text"
            value={values.security_code}
            touched={touched.security_code}
            error={errors.security_code}
          />
          <i className="fa-solid fa-lock dollarSign"></i>
        </div>
        <div className=" mb-3">
          <div className="d-grid gap-2">
            <CustomSubmitBtn
              color="primary"
              text="Submit"
              loading={loading}
              type="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default TransferToOtherTwo;
