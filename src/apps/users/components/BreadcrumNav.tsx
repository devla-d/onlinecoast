import { BreadcrumNavIn } from "../utils";

const BreadcrumNav = ({ pagenavTitle, currentPage }: BreadcrumNavIn) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="breadcrumNav border-bottom">
          <div className="d-flex align-items-center justify-content-between mb-4 ">
            <h4 className="pagenavTitle">{pagenavTitle}</h4>
            <ol className="breadcrumb" style={{ marginBottom: 0 }}>
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span>{currentPage}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumNav;
