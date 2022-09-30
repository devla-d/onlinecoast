import { CustomSubmitBtnProps } from "@/utils";

const CustomSubmitBtn = ({
  color,
  loading,
  text,
  type,
  handleClick,
}: CustomSubmitBtnProps) => {
  return (
    <>
      <button
        onClick={handleClick}
        type={type}
        className={`btn btn-${color}`}
        disabled={loading}
      >
        {loading ? (
          <i className="fa fa-spinner fa-spin fa-1x formLoader"></i>
        ) : null}
        {text}
      </button>
    </>
  );
};

export default CustomSubmitBtn;
