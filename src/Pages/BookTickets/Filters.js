import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import MyDropdown from "../../Component/MyDropdown/MyDropdown";
// import { removeSpecialCharacters } from "../../lib/helpers";
import { GlobalContext } from "../../Provider/Provider";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
function BoxDate({ day, date, month, isActive = false }) {
  return (
    <div className={`g_date_box ${isActive ? "active" : ""}`}>
      <h6 className="g_day">{day?.toUpperCase()}</h6>
      <h6 className="g_month">{date}</h6>
      <h6 className="g_year">{month.toUpperCase()}</h6>
    </div>
  );
}

const Filters = () => {
  const {values}=useContext(GlobalContext)
  console.log(values);
  const { state } = useLocation();
  const [dateData, setdateData] = useState([]);
  let date = new Date().getDate();
  // const params = new URLSearchParams(search)
  const {selectedLangFormat }=values?.ticketBooking
  

  // console.log(date);
  useEffect(() => {
    const result = [];
    let lastDate = new Date(state?.lastDate).getDate();
    console.log(lastDate);
    for (let i = date; i <= lastDate; i++) {
      let originalDate = new Date();
      originalDate.setDate(i);
      const [day, month, date] = originalDate.toString().split(" ");
      result.push({ day, month, date: Number(date) });
    }
    setdateData(result);
  }, [date, state?.lastDate]);

  // Filter Price Range
  const priceData = [
    { lable: "Rs. 0-100", value: "0-100" },
    { lable: "Rs. 101-200", value: "101-200" },
  ];
  const showsData = [
    {
      lable: (
        <span>
          Morning <span></span>12:00-11:59 AM
        </span>
      ),
      value: "12:00-11:59 AM",
    },
    {
      lable: (
        <span>
          Afternoon <span></span>12:00-3:59 PM
        </span>
      ),
      value: "12:00-3:59 PM",
    },
  ];

  function showTimehandler(value) {
    console.log(value);
  }
  function priceHandler(value) {
    console.log(value);
  }

  return (
    <div>
      <div className="row align-item-center justify-content-between g_date_range_box">
        <div className="col-12 col-md-3">
          <Carousel responsive={responsive}>
            {dateData?.map((ele) => {
              return (
                <BoxDate
                  isActive={ele?.date === date}
                  key={ele?.date}
                  {...ele}
                />
              );
            })}
          </Carousel>
        </div>
        <div className="col-12 col-md-5">
          <div className="row align-item-center justify-content-between">
            <div className="col-12 col-md-4 ">
              <div className="d-flex justify-content-between text-center align-item-center h-100  mt-3 fw-bold g_font_14">
                <div>
                {/* {params.get("language")}-{removeSpecialCharacters(params.get("screen"))} */}
                {selectedLangFormat?.lang} - {selectedLangFormat?.format}
                </div>
                <div className="fw-muted">
                  <FaAngleDown color="grey" opacity={0.7} />
                </div>
              </div>
            </div>
            {/* Filter Price Range */}

            <div className="col-12 col-md-4 ">
              <div className="  border-start g_filter_dropdown g_font_14 p-3 ">
                <MyDropdown
                  onFilterChange={priceHandler}
                  initialValue={["0-100"]}
                  title={"Filter Price Range"}
                  data={priceData}
                />
              </div>
            </div>
            {/* Filter Show Timings */}

            <div className="col-12 col-md-4">
              <div className="g_filter_dropdown p-3 g_font_14">
                <MyDropdown
                  onFilterChange={showTimehandler}
                  initialValue={["12:00-3:59 PM"]}
                  title={"Filter Show Timings"}
                  data={showsData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
