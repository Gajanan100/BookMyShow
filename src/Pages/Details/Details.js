import React, { useContext } from "react";
import Banner from "./Banner";
import "./Details.css";
// import { useLocation } from "react-router-dom";
import { CastsAndCrew } from "./CastsAndCrew";
import { GlobalContext } from "../../Provider/Provider";

export const Details = () => {
  // const { state } = useLocation();
  // const { values } = useContext(GlobalContext)
    const {values}=useContext(GlobalContext)
    console.log(values);


  return (
    <section>
      <Banner />
      <div className="container">
        <div className="w-75">
          <div className="my-3">
            <h4>About the movie</h4>
            <p className="g_font_15 fw-normal my-2"> {values?.movieDetails?.description} </p>
          </div>
          <CastsAndCrew data={values?.movieDetails?.movieDetails?.casts} crewData={values?.movieDetails?.crewData} />
        </div>
      </div>
    </section>
  );
};

export default Details;
