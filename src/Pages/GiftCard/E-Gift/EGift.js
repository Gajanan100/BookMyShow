import { dataCard } from "../../../data";
import React, { useEffect, useState } from "react";

const EGift = () => {
  const [active, setActive] = useState("All");
  const [data, setData] = useState(dataCard);
  const btnsData = ["All", "Generic", "Combos"];

  useEffect(() => {
    const newData = dataCard.filter(({ type }) => {
      if (active === "All") {
        return true;
      } else {
        return type === active;
      }
    });
    setData(newData);
  }, [active]);

  return (
    <div className=" g_gift">
      <h6 className="text-center text-secondary">
        Pick a card from one of our themes
      </h6>
      <div className="d-flex justify-content-center gap-2 my-3">
        {btnsData.map((ele, index) => {
          return (
            <button
              onClick={() => setActive(ele)}
              key={index}
              className={`g_gift_btn ${active === ele ? "active" : ""}`}
            >
              {ele}
            </button>
          );
        })}
      </div>
      <div className="row">
        {data.map(({ imgpath, contentData }, index) => {
          return (
            <div key={index} className="col-12 col-md-3 mt-4">
              <div className="g_content_hover_box">
                <div className="g_img_box">
                  <img src={imgpath} alt="" />
                </div>
                {contentData && (
                  <div className="g_content ">
                    <table>
                      <tbody>
                        <tr style={{ height: 50 }}>
                          <td style={{ width: 200 }}>
                            <h6 className="g_font_15">{contentData?.title1}</h6>
                          </td>
                          <td
                            style={{ textAlign: "end", alignSelf: "baseline" }}
                          >
                            {" "}
                            <h6 className="g_font_14">
                              ₹ {contentData?.price1}
                            </h6>
                          </td>
                        </tr>
                        <tr style={{ height: 20 }}>
                          <td style={{ width: 200 }}>
                            <h6 className="g_font_13">{contentData?.title2}</h6>
                          </td>
                          <td style={{ textAlign: "end" }}>
                            {" "}
                            <h6 className="g_font_13">
                              ₹ {contentData?.price2}
                            </h6>
                          </td>
                        </tr>
                        <tr style={{ height: 30 }}>
                          <td style={{ width: 200 }}>
                            <h6 className="g_font_13">
                              BookMyShow Instant Gift Card
                            </h6>
                          </td>
                          <td style={{ textAlign: "end" }}>
                            {" "}
                            <h6 className="g_font_13">
                              ₹ {contentData?.price3}
                            </h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="border-0 text-white rounded-3 mt-3 w-75 mx-auto p-2">
                      Buy Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EGift;
