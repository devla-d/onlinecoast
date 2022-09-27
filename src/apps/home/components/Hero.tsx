import React from "react";
import { HeroInterface } from "../../../utils";

const Hero: React.FC<HeroInterface> = ({ title, currentPage }) => {
  return (
    <>
      <div className="heroSection setBg" data-bg="/home/abouthero.jpg">
        <div className="hero-content">
          <div className="breadcrumb-area">
            <h2 className="title text-left">{title}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {currentPage}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
