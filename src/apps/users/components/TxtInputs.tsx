const TxtInputs = () => {
  return (
    <>
      <label htmlFor={`id_name`} className="form-label">
        Description
      </label>
      <input
        type="text"
        name="{name}"
        className={"form-control form-control-lg "}
        id={`id_$`}
        placeholder="...."
      />
    </>
  );
};

export default TxtInputs;
