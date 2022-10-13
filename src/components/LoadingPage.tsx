import useUtils from "@/hooks/useUtils";

const LoadingPage = () => {
  useUtils("Please wait");
  return (
    <>
      <div
        className=""
        data-v-be7bbc8c=""
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="logincard" data-v-be7bbc8c="">
          <div className="" data-v-be7bbc8c="">
            <div className="error-body uk-text-center" data-v-be7bbc8c="">
              <h1
                className="error-title uk-text-danger"
                data-v-be7bbc8c=""
                style={{
                  color: "#f0506e",
                  fontSize: "60px",
                  textTransform: "capitalize",
                }}
              >
                please wait
              </h1>
              <h3
                className="uk-text-uppercase error-subtitle"
                data-v-be7bbc8c=""
              >
                <i
                  className="fa-solid fa-spinner fa-spin"
                  style={{ fontSize: "20px" }}
                ></i>
              </h3>
              <p className="uk-text-muted mt-4 mb-4" data-v-be7bbc8c="">
                page is loading
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;