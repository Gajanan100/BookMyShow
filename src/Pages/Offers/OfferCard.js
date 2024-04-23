import React from "react";
import { RxMobile } from "react-icons/rx";
import { PiLaptop } from "react-icons/pi";
const OfferCard = ({ backgroundImgUrl, logoUrl, description, title, date }) => {
  return (
    <div className="bg-white g_card  my-3 border">
      <div className="g_top">
        <div className="g_img_box">
          <img src={backgroundImgUrl} alt="" />
        </div>
        <div className="g_hover_content_overlay"></div>
        <div className="g_hover_content">
          <h6 className="py-3">ABOUT OFFER</h6>
          <p>{description}</p>
          <div>
            <small className="g_font_11">AVAILBALE FOR</small>
            <div className="d-flex  gap-3 align-items-center text-center justify-content-center mt-2">
              <div>
                <div className="g_icon rounded-pill ">
                  <PiLaptop />
                </div>
                <small className="g_font_9">WEB</small>
              </div>
              <div>
                <div className="g_icon rounded-pill ">
                  <RxMobile size={18} />
                </div>
                <small className="g_font_9">MOBILE</small>
              </div>
            </div>
          </div>
        </div>
        <div className="g_logo mt-5">
          <img src={logoUrl} alt="" />
        </div>
      </div>
      <div className="g_bottom bg-white p-2">
        <h6>
          {title?.length > 26
            ? `${title?.toUpperCase()?.slice(0, 26)}...`
            : title?.toUpperCase()}{" "}
        </h6>
        <div className="g_date_range">
          <span>
            Valid till <span>{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
