import React from "react";

const Partner = () => {
  const data = [ "hp-logo.avif","ola-logo.avif","axis-logo.avif","mastercard-logo.avif","icici-logo.avif", ];
  return (
    <div className="bg-white my-3 ">
      <div className="g_partner  p-2  text-center ">
        <h6 className="mb-5">OUR PARTNERS</h6>
        <div className="row justify-content-center " style={{paddingBottom:"25px",paddingTop:"40px",width:'95%'}}>
          {data.map((ele, index) => {
            return (
              <div key={index} style={{ width: "20%" }}>
                <div>
                  <img src={`Corporates/${ele}`} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partner;
