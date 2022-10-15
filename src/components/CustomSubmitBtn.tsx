import { DesCustomSubmitBtn } from "@/utils";

const CustomSubmitBtn = ({
  color,
  loading,
  text,
  type,
  handleClick,
}: DesCustomSubmitBtn) => {
  return (
    <>
      {handleClick ? (
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
      ) : (
        <button type={type} className={`btn btn-${color}`} disabled={loading}>
          {loading ? (
            <i className="fa fa-spinner fa-spin fa-1x formLoader"></i>
          ) : null}
          {text}
        </button>
      )}
    </>
  );
};

export default CustomSubmitBtn;
