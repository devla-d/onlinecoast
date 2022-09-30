import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { useFormik } from "formik";

const CreateAccountDetails = () => {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      date_of_birth: "",
      gender: "",
      next_of_kin: "",
    },

    onSubmit(values, formikHelpers) {},
  });

  return (
    <>
      <div className="auth-card setup">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Personal
            <span> information</span>
          </h2>
        </div>
        <div className="authCardBody">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="*****"
                    name="first_name"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="First Name"
                    error={errors.first_name}
                    touched={touched.first_name}
                    type={"text"}
                    value={values.first_name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="*****"
                    name="last_name"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Last Name"
                    error={errors.last_name}
                    touched={touched.last_name}
                    type={"text"}
                    value={values.last_name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="*****"
                    name="phone_number"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Phone Number"
                    error={errors.phone_number}
                    touched={touched.phone_number}
                    type={"tel"}
                    value={values.phone_number}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="*****"
                    name="date_of_birth"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Date of Birth"
                    error={errors.date_of_birth}
                    touched={touched.date_of_birth}
                    type={"text"}
                    value={values.date_of_birth}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomSelect
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Gender"
                    error={errors.gender}
                    value={values.gender}
                    name="gender"
                    type="select"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </CustomSelect>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="*****"
                    name="next_of_kin"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Next of Kin"
                    error={errors.next_of_kin}
                    touched={touched.next_of_kin}
                    type={"text"}
                    value={values.next_of_kin}
                  />
                </div>
              </div>
            </div>

            <div className="smButton setup">
              <CustomSubmitBtn
                color="outline-primary"
                text="Previous"
                loading={true}
                type="button"
              />
              <CustomSubmitBtn
                color="primary"
                text="Next"
                loading={true}
                type="button"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAccountDetails;
