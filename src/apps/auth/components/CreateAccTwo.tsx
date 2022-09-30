import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { useFormik } from "formik";
import { useContext } from "react";
import { CreateAccContext } from "../pages/CreateAccountDetails";
import { CreateAccTwoSchema } from "../utils";

const CreateAccTwo = () => {
  const {
    formData,
    loading,

    handleNextStep,
    handlePrevStep,
  } = useContext(CreateAccContext)!;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        street_name: formData.street_name,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zipcode: formData.zipcode,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        date_of_birth: formData.date_of_birth,
        gender: formData.gender,
        next_of_kin: formData.next_of_kin,

        security_pin: formData.security_pin,
        account_type: formData.account_type,
        profile_img: formData.profile_img,
      },
      validationSchema: CreateAccTwoSchema,

      onSubmit(values, formikHelpers) {
        handleNextStep(values);
      },
    });

  return (
    <>
      <div className="auth-card setup">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Address
            <span> information</span>
          </h2>
        </div>
        <div className="authCardBody">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <CustomInput
                    placeholder="Street name"
                    name="street_name"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Street Name"
                    error={errors.street_name}
                    touched={touched.street_name}
                    type={"text"}
                    value={values.street_name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="City"
                    name="city"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="City"
                    error={errors.city}
                    touched={touched.city}
                    type={"text"}
                    value={values.city}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="state"
                    name="state"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="State"
                    error={errors.state}
                    touched={touched.state}
                    type={"text"}
                    value={values.state}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="Country"
                    name="country"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Country"
                    error={errors.country}
                    touched={touched.country}
                    type={"text"}
                    value={values.country}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="Zipcode"
                    name="zipcode"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Zipcode"
                    error={errors.zipcode}
                    touched={touched.zipcode}
                    type={"text"}
                    value={values.zipcode}
                  />
                </div>
              </div>
            </div>

            <div className="smButton setup">
              <CustomSubmitBtn
                color="outline-primary"
                text="Previous"
                loading={loading}
                type="button"
                handleClick={(e) => {
                  handlePrevStep(values);
                }}
              />
              <CustomSubmitBtn
                color="primary"
                text="Next"
                loading={loading}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccTwo;
