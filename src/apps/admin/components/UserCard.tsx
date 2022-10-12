import { DesUser } from "@/apps/auth/utils";
import { BASE_URL } from "@/utils";
import moment from "moment";
import { Link } from "react-router-dom";

interface DecUserCard {
  user: DesUser;
}

const UserCard = (prop: DecUserCard) => {
  const { user } = prop;
  return (
    <>
      <div className="col-lg-8 mb-2">
        <Link to={`/admin/users/${user.id}`} className="card h-100">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col mr-2 text-truncate">
                <div className="h5 mb-0 font-weight-bold text-gray-800 text-truncate">
                  {user.first_name + " " + user.last_name}
                </div>
                <div className="mt-2 mb-0 text-muted text-xs text-truncate">
                  <span className="text-success mr-2">
                    <i className="fa"></i>$0
                  </span>
                  <span className="text-truncate">
                    Joined on{" "}
                    {`${moment(user.createdAt).format("MMM Do YY, h:mm:ss a")}`}
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <img
                  className="img-profile rounded-circle"
                  src={`${BASE_URL}${user.profile_img}`}
                  style={{ maxWidth: "42px", height: "42px" }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserCard;
