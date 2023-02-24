import React from "react";
import pizza from "./assets/pizza.jpg";
import burger from "./assets/burger.jpg";
import "./PromotionBanner.css";
const PromotionBanner = () => {
  return (
    <div className="promotions-banner">
      <figure className="picture-content">
        <img src={pizza} alt="pizza" className="picture" />
        <section className="text">
          <span className="redText">BUY 1 GET FREE</span>
          <span className="blackText">All Pizza</span>
        </section>
      </figure>
      <figure className="picture-content">
        <img src={burger} alt="" className="picture" />
        <section className="text">
          <span className="redText">ONLY $12</span>
          <span className="blackText">Tasty Burger</span>
        </section>
      </figure>
    </div>
  );
};

export default PromotionBanner;
