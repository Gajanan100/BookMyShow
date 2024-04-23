import React, { useEffect, useState } from "react";
import "./offers.css";
import { CiSearch } from "react-icons/ci";
import { PiCreditCardLight } from "react-icons/pi";
import { TfiCreditCard } from "react-icons/tfi";
import { SiBookmyshow } from "react-icons/si";
import { CiWallet } from "react-icons/ci";
import { LiaAwardSolid } from "react-icons/lia";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import OfferCard from "./OfferCard";
import { OffersData } from "../../data";

const data = [
  {
    icon: <PiCreditCardLight size={30} />,
    title: "Credit Card",
    cardType: "creditCard",
  },
  {
    icon: <TfiCreditCard size={30} />,
    title: "Debit Card",
    cardType: "debitCard",
  },
  {
    icon: <SiBookmyshow size={30} />,
    title: "BookMyShow",
    cardType: "bookMyShow",
  },
  {
    icon: <CiWallet size={30} />,
    title: "Wallet",
    cardType: "wallet",
  },
  {
    icon: <LiaAwardSolid size={30} />,
    title: "Rewards",
    cardType: "rewards",
  },
  {
    icon: <MdOutlineCurrencyRupee size={30} />,
    title: "Pay Later",
    cardType: "payLater",
  },
];

const Offers = () => {
  const [activeFilters, setActiveFilters] = useState([
    "creditCard",
    "debitCard",
    "bookMyShow",
    "wallet",
    "rewards",
    "payLater",
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [cardsData, setCardsData] = useState(OffersData);

  function filtersHandler(cardType) {
    if (activeFilters.includes(cardType)) {
      const newData = activeFilters.filter((ele) => {
        return ele !== cardType;
      });
      setActiveFilters(newData);
    } else {
      setActiveFilters([...activeFilters, cardType]);
    }
  }

  function inputHandler(event) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    const searchTime = setTimeout(() => {
      const newdata = OffersData.filter(({ title }) => {
        return title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setCardsData(newdata);
    }, 1000);
    return () => clearTimeout(searchTime);
  }, [searchValue]);

  return (
    <section className="g_offers">
      <div className="bg-white py-3">
        <div className="container">
          <div className="g_search">
            <input
              onChange={inputHandler}
              value={searchValue}
              type="text"
              placeholder="Search for Offers by Name or Bank"
            />
            <div className="g_search_icon">
              <CiSearch />
            </div>
          </div>
          <div className="g_filters  mx-auto">
            <h6>FILTER OFFERS BY</h6>
            <div className="d-flex justify-content-between mt-2">
              {data.map(({ icon, title, cardType }, index) => {
                const isActive = activeFilters.includes(cardType);
                return (
                  <div
                    onClick={() => filtersHandler(cardType)}
                    key={index}
                    className="g_card_wrapper "
                  >
                    <div className={`g_cards`}>{icon}</div>
                    <small className={`g_small ${isActive ? "active" : ""}`}>
                      {title}
                    </small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap container gap-3">
        {cardsData?.map((ele, index) => {
          if (activeFilters.includes(ele.cardType)) {
            return (
              <div key={index} className="g_offersCard_col">
                <OfferCard {...ele} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
};

export default Offers;
