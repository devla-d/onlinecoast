import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useUtils from "@/hooks/useUtils";
import BreadcrumNav from "../components/BreadcrumNav";

const TransferToOther = () => {
  useUtils("Transfer to other banks");
  return (
    <>
      <div className="container">
        <div className="row justify-content-center  ">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Transfer" currentPage="transfer" />
          {/* breadcrum */}
          <div className="mt-4"></div>

          <div className="col-lg-4">
            <div className="amountBox">
              <h4>available balance</h4>
              <h2>
                $<span>3000</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="transferCard">
              <p>Transfer to other bank</p>
              <form action="">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="first name"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      Phone(if any)
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="first name"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      Email (if any)
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      Beneficiary account name
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="  name"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      IBAN Number
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="IBAN Number"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="Bank"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`id_name`} className="form-label">
                      Swift/BIC Code
                    </label>
                    <input
                      type="text"
                      name="{name}"
                      className={"form-control "}
                      id={`id_$`}
                      placeholder="Swift/BIC Code"
                    />
                  </div>
                </div>
                <div className=" mb-3" id="amount_box">
                  <label htmlFor={`id_name`} className="form-label">
                    Amount
                  </label>
                  <input
                    type="text"
                    name="{name}"
                    className={"form-control "}
                    id={`id_amount`}
                    placeholder="amount"
                  />
                  <i className="fa-solid fa-dollar dollarSign"></i>
                </div>

                <div className=" mb-3">
                  <label htmlFor={`id_name`} className="form-label">
                    Purpose of Transfer
                  </label>
                  <input
                    type="text"
                    name="{name}"
                    className={"form-control form-control-lg "}
                    id={`id_$`}
                    placeholder="...."
                  />
                </div>
                <div className=" mb-3">
                  <div className="d-grid gap-2">
                    <CustomSubmitBtn
                      color="primary"
                      text="Submit"
                      loading={true}
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferToOther;
