import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { TransferToOtherContext } from "../pages/TransferToOther";
import { TransferToOtherOneSchema } from "../utils";

const TransferToOtherOne = () => {
  const [loading, setloading] = useState(false);
  const { setformData, setcurrentSteps } = useContext(TransferToOtherContext)!;
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        ben_account_number: "",
        iban_number: "",
        bank_name: "",
        swift_code: "",
        amount: "",
        purpose: "",
      },
      validationSchema: TransferToOtherOneSchema,
      onSubmit(values) {
        setloading(true);
        setformData(values);
        setcurrentSteps((prev) => prev + 1);
      },
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="First name"
              name="first_name"
              type="text"
              value={values.first_name}
              touched={touched.first_name}
              error={errors.first_name}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Last name"
              name="last_name"
              type="text"
              value={values.last_name}
              touched={touched.last_name}
              error={errors.last_name}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Phone (if any)"
              name="phone"
              type="text"
              value={values.phone}
              touched={touched.phone}
              error={errors.phone}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Email (if any)"
              name="email"
              type="email"
              value={values.email}
              touched={touched.email}
              error={errors.email}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Beneficiary account name"
              name="ben_account_number"
              type="text"
              value={values.ben_account_number}
              touched={touched.ben_account_number}
              error={errors.ben_account_number}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="IBAN Number"
              name="iban_number"
              type="text"
              value={values.iban_number}
              touched={touched.iban_number}
              error={errors.iban_number}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label=" Bank Name"
              name="bank_name"
              type="text"
              value={values.bank_name}
              touched={touched.bank_name}
              error={errors.bank_name}
            />
          </div>
          <div className="col-lg-6 mb-3">
            <CustomInput
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Swift/BIC Code"
              name="swift_code"
              type="text"
              value={values.swift_code}
              touched={touched.swift_code}
              error={errors.swift_code}
            />
          </div>
        </div>
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
            handleChange={handleChange}
            label="Purpose of Transfer"
            name="purpose"
            type="text"
            value={values.purpose}
            touched={touched.purpose}
            error={errors.purpose}
            placeholder="...."
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
    </>
  );
};

export default TransferToOtherOne;
