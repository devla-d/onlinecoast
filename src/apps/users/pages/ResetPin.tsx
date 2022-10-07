import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useUtils from "@/hooks/useUtils";
import BreadcrumNav from "../components/BreadcrumNav";

const ResetPin = () => {
  useUtils("Reset security pin");
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
                <form action="" autoComplete="false">
                  <div className=" mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      Old support pin
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="old pin"
                    />
                  </div>
                  <div className=" mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      New support pin
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="new pin"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <CustomSubmitBtn
                      color="primary"
                      text="Submit"
                      loading={true}
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
