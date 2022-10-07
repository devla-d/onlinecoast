import BreadcrumNav from "../components/BreadcrumNav";

const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="row  justify-content-center ">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Cards" currentPage="cards" />
          {/* breadcrum */}
          <div className="mt-4"></div>

          <div className="col-lg-4">
            <div className="creditCard">
              <div className="creditCardName text-truncate">
                <h4>Samuel aniekan samuel</h4>
              </div>
              <div className="creditCardNumber text-truncate">
                <ul>
                  <li>4160</li>
                  <li>4655</li>
                  <li>3958</li>
                  <li>3156</li>
                </ul>
              </div>
              <div className="creditCardFooter">
                <ul>
                  <li>
                    <p>Current balance</p>
                    <h4>
                      $<span>100</span>
                    </h4>
                  </li>
                  <li>
                    <p>Valid thru</p>
                    <h4>06/25</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cardDetails">
              <h3>Card details</h3>
              <ul>
                <li>
                  <p>Card Type</p>
                  <h4>Mastercard</h4>
                </li>
                <li>
                  <p>Card name</p>
                  <h4>jimmy aniekan</h4>
                </li>
                <li>
                  <p>Card Number</p>
                  <h4>41608400539583156</h4>
                </li>
                <li>
                  <p>CARD CVV</p>
                  <h4>345</h4>
                </li>
                <li>
                  <p>BILLING ADDRESS</p>
                  <h4>19, Olubunmi Rotimi, Lekki, Lagos</h4>
                </li>
                <li>
                  <p>zipcode</p>
                  <h4>23401</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;