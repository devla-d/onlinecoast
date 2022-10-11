import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUtils from "@/hooks/useUtils";
import { useEffect, useState } from "react";
import BreadcrumNav from "../components/BreadcrumNav";
import { DesCard, CardResponse, cc_format } from "../utils";

const Cards = () => {
  useUtils("Card");
  const axiosPrivate = useAxiosPrivate();
  const [card, setCard] = useState<DesCard>();

  useEffect(() => {
    axiosPrivate
      .get<CardResponse>("/debit-cards/")
      .then(({ data }) => {
        if (data.card) setCard(data.card);
        else console.log("No card");
      })
      .catch((e) => {
        console.log(e);
      });
    return () => {};
  }, []);

  return (
    <>
      <div className="container">
        <div className="row  justify-content-center ">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Cards" currentPage="cards" />
          {/* breadcrum */}
          <div className="mt-4"></div>
          {card ? (
            <>
              <div className="col-lg-4">
                <div className="creditCard">
                  <div className="creditCardName text-truncate">
                    <h4>{card.card_name}</h4>
                  </div>
                  <div className="creditCardNumber text-truncate">
                    <ul>
                      <li>{cc_format(card.card_number)}</li>
                    </ul>
                  </div>
                  <div className="creditCardFooter">
                    <ul>
                      <li>
                        <p>Current balance</p>
                        <h4>
                          $<span>{card.user.balance}</span>
                        </h4>
                      </li>
                      <li>
                        <p>Valid thru</p>
                        <h4>{card.expire}</h4>
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
                      <h4>{card.card_type}</h4>
                    </li>
                    <li>
                      <p>Card name</p>
                      <h4>{card.card_name}</h4>
                    </li>
                    <li>
                      <p>Card Number</p>
                      <h4>{card.card_number}</h4>
                    </li>
                    <li>
                      <p>CARD CVV</p>
                      <h4>{card.card_cvv}</h4>
                    </li>
                    <li>
                      <p>BILLING ADDRESS</p>
                      <h4>{card.billing_address}</h4>
                    </li>
                    <li>
                      <p>zipcode</p>
                      <h4>{card.zipcode}</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-4">
                <div className="cardDetails text-center">
                  <h5>No card contact support</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
