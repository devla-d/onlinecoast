import BreadcrumNav from "../components/BreadcrumNav";

const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Cards" currentPage="cards" />
          {/* breadcrum */}
        </div>
      </div>
    </>
  );
};

export default Cards;
