import { DesUser } from "@/apps/auth/utils";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserDetailContex } from "../pages/UserDetail";

interface DescFomData {
  id: number | string | undefined;
  amount: number | string;
}

interface DescFormRespone {
  msg: string;
  user: DesUser;
}
const TopupModal = () => {
  const { user, id, setuser, setstep } = useContext(UserDetailContex)!;

  const axiosPrivate = useAxiosPrivate();
  const [formData, setformData] = useState<DescFomData>({
    id: id,
    amount: "",
  });
  const [loading, setloading] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);

    axiosPrivate
      .post<DescFormRespone>("/admin/topup-user/", formData)
      .then(({ data }) => {
        toast.info(data.msg);
        setuser(data.user);
        setformData({ id: id, amount: "" });
        setstep(0);
      })
      .catch(console.log);
    setloading(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setformData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <>
      {user ? (
        <>
          <div className="card userCard">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary"> </h6>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
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
              <div className="card-footer">
                <div className="d-flex space-bt">
                  <button
                    onClick={() => {
                      setstep(0);
                    }}
                    type="button"
                    className="btn btn-outline-primary"
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
              </div>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
};

export default TopupModal;
