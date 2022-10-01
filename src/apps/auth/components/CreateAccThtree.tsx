import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { useFormik } from "formik";
import { useContext } from "react";
import { CreateAccContext } from "../pages/CreateAccountDetails";
import { CreateAccThreeSchema } from "../utils";

const CreateAccThtree = () => {
  const {
    formData,
    loading,
    setformData,

    handleNextStep,
    handlePrevStep,
  } = useContext(CreateAccContext)!;
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        date_of_birth: formData.date_of_birth,
        gender: formData.gender,
        next_of_kin: formData.next_of_kin,
        street_name: formData.street_name,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zipcode: formData.zipcode,

        security_pin: formData.security_pin,
        account_type: formData.account_type,
      },
      validationSchema: CreateAccThreeSchema,

      onSubmit(values, formikHelpers) {
        handleNextStep(values);
      },
    });

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    var { target } = event;
    if (!target.files) return;
    const profile_img = target.files[0];
    setformData((prev) => ({ ...prev, profile_img }));
  };

  return (
    <>
      <div className="auth-card setup">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            banking
            <span> Profile</span>
          </h2>
        </div>
        <div className="authCardBody">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <CustomInput
                    placeholder="Security Pin"
                    name="security_pin"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Security Pin"
                    error={errors.security_pin}
                    touched={touched.security_pin}
                    type={"number"}
                    value={values.security_pin}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <CustomSelect
                    handleSelectChange={handleChange}
                    label="Accout type"
                    error={errors.account_type}
                    value={values.account_type}
                    name="account_type"
                    type="select"
                  >
                    <option value="Savings account">Savings account</option>
                    <option value="Checking Account">Checking Account</option>
                    <option value="Fixed Account">Fixed Account</option>
                  </CustomSelect>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor={`id_profile_img`} className="form-label">
                    Profile image
                  </label>
                  <input
                    className={"form-control "}
                    type="file"
                    id="id_profile_img"
                    accept="image/*"
                    onChange={handleChangeFile}
                    required={true}
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

export default CreateAccThtree;
