import { updateUser } from "@/apps/auth/slicer";
import { DesUser } from "@/apps/auth/utils";
import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useAppDispatch } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import BreadcrumNav from "../components/BreadcrumNav";
import { resetPinSchema } from "../utils";

interface Response {
  user?: DesUser;
  msg?: string;
  errors?: Array<string>;
}

const ResetPin = () => {
  useUtils("Reset security pin");
  const [loading, setloading] = useState(false);
  const dispatch = useAppDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        oldpin: "",
        newpin: "",
      },
      validationSchema: resetPinSchema,
      onSubmit(values, formikHelpers) {
        setloading(true);
        axiosPrivate
          .post<Response>("/reset-support-pin/", values)
          .then(({ data }) => {
            if (data.msg && data.user) {
              dispatch(updateUser(data.user));
              toast.info("Support pin change");
              formikHelpers.resetForm();
            } else if (data.errors) {
              let errs = data.errors;
              errs.forEach((e) => {
                toast.error(e);
              });
            }
          })
          .catch((e) => {
            let err = e as AxiosError;
            if (err.response?.status === 400) {
              toast.error("Old pin don't match");
            }
            console.log(e);
          });
        setloading(false);
      },
    });
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Reset pin" currentPage="pin" />
          {/* breadcrum */}
          <div className="mt-4"></div>
          <div className="col-lg-6">
            <div className=" resetCard">
              <div className="card-body">
                <h3>Reset pin</h3>
                <form onSubmit={handleSubmit} autoComplete="false">
                  <div className=" mb-3">
                    <CustomInput
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Old support pin"
                      name="oldpin"
                      type="text"
                      value={values.oldpin}
                      touched={touched.oldpin}
                      error={errors.oldpin}
                      placeholder={"Old support pin"}
                    />
                  </div>
                  <div className=" mb-3">
                    <CustomInput
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="New support pin"
                      name="newpin"
                      type="text"
                      value={values.newpin}
                      touched={touched.newpin}
                      error={errors.newpin}
                      placeholder={"New support pin"}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <CustomSubmitBtn
                      color="primary"
                      text="Submit"
                      loading={loading}
                      type="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPin;
