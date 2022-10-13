import { DesUser } from "@/apps/auth/utils";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
interface DesTopupModal {
  user: DesUser;
  setuser: React.Dispatch<React.SetStateAction<DesUser | undefined>>;
}

interface DescFomData {
  id: number;
  amount: number | string;
}

interface DescFormRespone {
  msg: string;
  user: DesUser;
}
const TopupModal = ({ user, setuser }: DesTopupModal) => {
  const axiosPrivate = useAxiosPrivate();
  const [formData, setformData] = useState<DescFomData>({
    id: user.id,
    amount: "",
  });
  const [loading, setloading] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    var closeBtn = document.getElementById("closeBtn") as HTMLButtonElement;
    setloading(true);

    axiosPrivate
      .post<DescFormRespone>("/admin/topup-user/", formData)
      .then(({ data }) => {
        toast.info(data.msg);
        setuser(data.user);
        setformData({ id: user.id, amount: "" });
        closeBtn.click();
      })
      .catch(console.log);
    setloading(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setformData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade"
        id="topupModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="topupModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelLogout">
                Top up user
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <h4 className="text-dark text-truncate">
                  User : <small>{user.first_name + " " + user.last_name}</small>
                </h4>
                <input
                  type="hidden"
                  name="account_id"
                  defaultValue={user.id}
                  readOnly={true}
                />

                <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    className="form-control"
                    value={formData.amount}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  id="closeBtn"
                  type="button"
                  className="btn btn-outline-primary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>

                <CustomSubmitBtn
                  color="success"
                  text="Submit"
                  loading={loading}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>,
    dialog
  );
};

export default TopupModal;
