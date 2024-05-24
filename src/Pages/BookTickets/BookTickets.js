import React, { useContext } from "react";
// import { useLocation } from "react-router-dom";
import "./BookTickets.css";
import "react-multi-carousel/lib/styles.css";
import Filters from "./Filters";
import { GlobalContext } from "../../Provider/Provider";
import Theaters from "./Theaters";

const BookTickets = () => {
  // const { state, search } = useLocation();
  // const {values } = useContext(GlobalContext)
  // console.log(values);
  // const params = new URLSearchParams(search);
  const {values}=useContext(GlobalContext)
  console.log(values);
  if (!values?.ticketBooking) return null
  const { name, category, certification,selectedLangFormat } = values?.ticketBooking
  console.log(values?.ticketBooking,"i am Gajanan Chavan")


  return (
    <div className="g_book_ticket">
      <div className="bg-white pt-5 ">
        <div className="container">
          <h3>
            {name} - {selectedLangFormat.lang}
          </h3>
          <div className="pb-1">
            <div className="d-flex gap-2 align-item-center text-center my-2 ">
              <button className="g_btn_ua"> {certification}</button>
              <div className="d-flex gap-2 ">
                {category.map((ele, index) => {
                  return (
                    <div className="align-item-center">
                      <button
                        style={{ height: "25px" }}
                        className="g_category_btn align-item-center bg-white mt-0 text-secondary  border-secodary border rounded-pill text-center g_font_13 px-3"
                        key={index}
                      >
                        {ele}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* movies calender on BookMy Show */}

        <div className="border-top ">
          <div className="container">
            <Filters />
          </div>
        </div>
      </div>
      <div className="my-2 bg-white container p-0">
        <Theaters/>
       <h6>Book</h6>
      </div>
    </div>
  );
};

export default BookTickets;
