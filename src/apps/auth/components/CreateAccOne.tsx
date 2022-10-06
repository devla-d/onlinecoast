import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { CreateAccContext } from "../pages/CreateAccountDetails";
import { CreateAccOneSchema } from "../utils";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAccOne = () => {
  const [startDate, setStartDate] = useState(new Date());

  const {
    formData,
    loading,

    handleNextStep,
  } = useContext(CreateAccContext)!;
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
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
      profile_img: formData.profile_img,
    },
    validationSchema: CreateAccOneSchema,

    onSubmit(values) {
      handleNextStep(values);
    },
  });

  const handlePhoneChange = (num: E164Number | undefined) => {
    if (num) {
      setFieldValue("phone_number", num);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomInput
                    placeholder="first name"
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
                    placeholder="Last name"
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
              <div className="col-lg-12">
                <div className="mb-3">
                  <PhoneInput
                    defaultCountry={"US"}
                    required={true}
                    placeholder="Enter phone number"
                    value={values.phone_number}
                    onChange={(num) => {
                      handlePhoneChange(num);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Date of Birth(D/M/Y)
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => {
                      setFieldValue(
                        "date_of_birth",
                        `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
                      );
                      setStartDate(date);
                    }}
                    className="form-control"
                    required={true}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <CustomSelect
                    handleSelectChange={handleChange}
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
                    placeholder="Next of Kin"
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

export default CreateAccOne;
