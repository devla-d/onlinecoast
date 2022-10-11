import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useAccNumber from "@/hooks/useAccNumber";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppSelector } from "@/hooks/useStore";
import { useFormik } from "formik";
import React, { useState } from "react";
import { TransferToSameSchema } from "../utils";
import BreadcrumNav from "./BreadcrumNav";

const TxtSameOne = () => {
  const user = useAppSelector((state) => state.user.user!);
  const axiosPrivate = useAxiosPrivate();
  const [loading, setLoading] = useState(false);
  useAccNumber();
  const accNumbes = useAppSelector((state) => state.user.accountNumbers);
  const schema = TransferToSameSchema(accNumbes);
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    setFieldValue,
    setFieldError,
  } = useFormik({
    initialValues: {
      amount: "",
      account_number: "",
      purpose: "",
      beneficiary: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const submitTxt = async (val: typeof values) => {
    try {
      const { data } = await axiosPrivate.post("");
    } catch (error) {}
  };
  const handleAccNumchange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("account_number", target.value);

    axiosPrivate
      .post("/validate-account-numbers/", { acc_number: target.value })
      .then(({ data }) => {
        console.log(data);
        if (data.valid) {
          setFieldValue("beneficiary", data.beneficiary);
        } else {
          setFieldValue("beneficiary", "Invalid");
        }
        console.log(errors.beneficiary, errors.account_number);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-item-center">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Transfer" currentPage="transfer" />
          {/* breadcrum */}
          <div className="mt-4"></div>

          <div className="col-lg-4">
            <div className="amountBox">
              <h4>available balance</h4>
              <h2>
                $<span>{user.balance}</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="transferCard">
              <p>Transfer to the same bank</p>
              <form onSubmit={handleSubmit}>
                <div className=" mb-3" id="amount_box">
                  <CustomInput
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Amount"
                    name="amount"
                    type="number"
                    value={values.amount}
                    touched={touched.amount}
                    error={errors.amount}
                  />
                  <i className="fa-solid fa-dollar dollarSign"></i>
                </div>
                <div className=" mb-3">
                  <CustomInput
                    handleBlur={handleBlur}
                    handleChange={handleAccNumchange}
                    label="Account Number"
                    name="account_number"
                    type="number"
                    value={values.account_number}
                    touched={touched.account_number}
                    error={errors.account_number}
                  />
                  <p className="text-muted mt-1">
                    benneficiary : &nbsp;
                    {errors.beneficiary ? (
                      <span className="text-deanger ">
                        {errors.beneficiary}
                      </span>
                    ) : (
                      <span className="text-warning ">
                        {values.beneficiary}
                      </span>
                    )}
                  </p>
                </div>
                <div className=" mb-3">
                  <CustomInput
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Purpose of Transfer"
                    name="purpose"
                    type="text"
                    value={values.purpose}
                    touched={touched.purpose}
                    class_Name={"form-control-lg"}
                    placeholder={"purpose of transfer"}
                    error={errors.purpose}
                  />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TxtSameOne;
