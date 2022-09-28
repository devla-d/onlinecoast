import useUtils from "../../../hooks/useUtils";
import Hero from "../components/Hero";

const Faqs = () => {
  useUtils("Frequenty ask questions");
  return (
    <>
      {/* hero section  */}
      <Hero title="Faqs" currentPage="faqs" image="/home/abouthero.jpg" />
      {/* hero section ends  */}
      <section className="in-section about">
        <div className="container">
          <h3>
            <span> Questions</span> AND ANSWERS
          </h3>
          <div className="faq-content">
            <div className="el-f"></div>
            <div className="faq-block">
              <h2 className="faq-block__title">Basic questions</h2>
              <div className="accordion accordion-faq">
                <div className="accordion-item">
                  <a
                    className="accordion-title accordion-header"
                    id="accheaderone"
                    data-bs-toggle="collapse"
                    href="#faq1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="faq1"
                  >
                    Do you have official registration?
                  </a>

                  <div className="question-block collapse" id="faq1">
                    <p>
                      Yes, our company is an officially registered enterprise.
                      Our head office is located in London.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a
                    className="accordion-title accordion-header"
                    id="accheaderone"
                    data-bs-toggle="collapse"
                    href="#faq2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="faq2"
                  >
                    Do you have official registration?
                  </a>

                  <div className="question-block collapse" id="faq2">
                    <p>
                      Yes, our company is an officially registered enterprise.
                      Our head office is located in London.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <a
                    className="accordion-title accordion-header"
                    id="accheaderone"
                    data-bs-toggle="collapse"
                    href="#faq3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="faq3"
                  >
                    Do you have official registration?
                  </a>

                  <div className="question-block collapse" id="faq3">
                    <p>
                      Yes, our company is an officially registered enterprise.
                      Our head office is located in London.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
