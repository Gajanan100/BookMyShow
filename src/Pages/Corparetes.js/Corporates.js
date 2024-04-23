import React from "react";
import { Banner } from "./Banner";
import Partner from "./Partner";
import Records from "./Records";
import { Promotion } from "./Promotion";
import Solution from "./Solution";
import Campaigns from "./Campaigns";
import { OurProducts } from "./OurProducts";
import BulkBooking from "./BulkBooking";
import Testimonial from "./Testimonial";


export const Corporates = () => {
  return (
    <div>
      <Banner />
      <Partner />
      <Records />
      <Promotion />
      <Solution/>
    <div className="bg-white my-2 py-5">
     <div className="d-flex justify-content-between align-items-center px-5  g_font_20 ">
      <p className="m-0 ">
        Get priority support from the experts in the entertainment industry.
      </p>
      <button className="text-white btn btn-sm g_sign_up_btn px-3 py-2 g_font_18 ">
        Access the complete suite
      </button>
      </div>

    </div>
      <Campaigns/>
      <OurProducts/>
      <BulkBooking/>
      <Testimonial/>

      
    </div>
  );
};
