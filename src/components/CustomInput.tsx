import { CustomInputProps } from "@/utils";

const CustomInput = (props: CustomInputProps) => {
  const {
    name,
    type,
    label,
    handleChange,
    handleBlur,
    value,
    placeholder,
    error,
    touched,
  } = props;
  return (
    <>
      <label htmlFor="id_password" className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={"form-control " + (error && touched ? "is-invalid" : null)}
        id={`id_${name}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched ? <p className="invalid-feedback">{error}</p> : null}
    </>
  );
};

export default CustomInput;
