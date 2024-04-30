import React from "react";

const SelectSeats = () => {
  return (
    <div>
      <div className="mt-3 mb-1 d-flex align-items-center justify-content-center gap-4">
        <div className="g_font_12">
          <p className="m-0 text-secondary">Platinum</p>
          <h6 className=" g_font_12fw-bold ">RS. 100</h6>
          <h6 className=" g_font_12 text-success ">Available</h6>
        </div>
        <div className="g_font_12">
          <p className="m-0 text-secondary">Platinum</p>
          <h6 className=" g_font_12 fw-bold ">RS. 100</h6>
          <h6 className="g_font_12 text-success">Available</h6>
        </div>
      </div>
    </div>
  );
};

export default SelectSeats;
