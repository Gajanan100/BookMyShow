import React, { useState } from "react";
import "./GiftCard.css";
import EGift from "./E-Gift/EGift";
import Physical from "./Physical/Physical";
const GiftCard = () => {
  const [active, setActive] = useState("e-giftcard");

  return (
    <section className="g_gifts_card">
      <div className="container my-5">
        <div className="text-center g_btn">
          <button
            onClick={() => setActive("e-giftcard")}
            className={`border b_h12 ${
              active === "e-giftcard" ? "active" : ""
            }`}
          >
            E-GIFT CARDS
          </button>
          <button
            onClick={() => setActive("physical-giftcard")}
            className={`border b_h12 ${
              active === "physical-giftcard" ? "active" : ""
            }`}
          >
            PHYSICAL GIFT CARDS
          </button>
        </div>
        <div className="bg-white my-3 p-3">
          {active === "e-giftcard" && <EGift />}
          {active === "physical-giftcard" && <Physical />}
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
