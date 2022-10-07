import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useUtils from "@/hooks/useUtils";
import BreadcrumNav from "../components/BreadcrumNav";

const TransferToSame = () => {
  useUtils("Transfer to onlineseacoat bank");
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-item-center">
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
              <p>Transfer to the same bank</p>
              <form action="">
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
                    Account Number
                  </label>
                  <input
                    type="text"
                    name="{name}"
                    className={"form-control "}
                    id={`id_$`}
                    placeholder="account number"
                  />
                  <p className="text-muted mt-1">
                    benneficiary : &nbsp;
                    <span className="text-warning ">sammy aniekan</span>
                  </p>
                </div>
                <div className=" mb-3">
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

export default TransferToSame;
