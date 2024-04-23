import React from "react";
import { IoCardOutline } from "react-icons/io5";
import { GiTicket } from "react-icons/gi";
const Physical = () => {
  return (
    <div className="g_physical text-center">
      <h6 className="text-center g_font_18 text-secondary">
        INTRODUCING PHYSICAL GIFT CARDS
      </h6>
      <div className="my-4">
        <p className="g_font_12 m-0">
          Gift your loved ones a range of experiences from movies to events,
          plays, concerts and sports with a BookMyShow gift card. Now pick one
          up at a store near you!!
        </p>
        <p className="g_font_12 m-0">
          BookMyShow Gift Cards are now available at thousands of stores at all
          major towns across India.
        </p>
      </div>
      <div>
        <h6 className="fw-normal g_font_14">Available at store near you</h6>
      </div>
      <div className="row justify-content-center my-4">
        <div className="col-12 col-md-2">
          <div className="g_img_box">
            <img
              src="https://assets-in.bmscdn.com/webin/giftcards/available/row1/1.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="g_img_box">
            <img
              src="https://assets-in.bmscdn.com/webin/giftcards/available/row1/2.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="g_img_box">
            <img
              src="https://assets-in.bmscdn.com/webin/giftcards/available/row1/my_jio_store_logo_unit.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="g_img_box">
            <img
              src="https://assets-in.bmscdn.com/webin/giftcards/available/row1/5.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="g_img_box">
            <img
              src="https://assets-in.bmscdn.com/webin/giftcards/available/row1/6.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h6 className="fw-normal g_font_14">Or order online from</h6>
      </div>
      <div className="row justify-content-center my-4">
        <div className="col-12 col-md-2">
          <div className="g_img_box">
            <img
              src="https://assets-in.bmscdn.com/webin/giftcards/available/row2/1.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="g_img_box">
            <img
              src="https://assets-in.bmscdn.com/webin/giftcards/available/row2/2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row my-4 align-items-center">
        <div className="col-12 col-md-6">
          <img
            src="https://assets-in.bmscdn.com/webin/giftcards/giftcard.png"
            alt=""
          />
        </div>
        <div className="col-12 col-md-6 b_h13">
          <div className="d-flex align-items-center gap-2">
            <div className="g_icon">
              <IoCardOutline size={25} />
            </div>
            <p className="m-0">As easy as paying cash</p>
          </div>
          <div className="d-flex align-items-center gap-2 mt-3">
            <div className="g_icon">
              <GiTicket size={25} />
            </div>
            <p className="m-0 text-start">
              Use it anytime, anywhere through the BookMyShow <br /> mobile app
              or on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Physical;
