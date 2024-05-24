import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MyCard.css";
import { GlobalContext } from "../../Provider/Provider";
import { UPDATE_MOVIES_DETAILS } from "../../Provider/Actions";

export const MyCard = ({
  src,
  name,
  title1,
  title2,
  description,
  istitleslice = true,
  isNameSlice = true,
  movieDetails,
}) => {
  // const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);
  console.log(dispatch);
  // const redirectUrlHandler = () => {
  //   if (movieDetails) {
  //     // navigate("/details", { state: { ...movieDetails, name } });
  //   }
  // };
  return (
    <Link
      to={"/details"}
      onClick={() =>
        dispatch({
          type: UPDATE_MOVIES_DETAILS,
          payload: {
            src,
            name,
            title1,
            title2,
            description,
            istitleslice,
            isNameSlice,
            movieDetails,        
            },
        })
      }
      style={{ cursor: "pointer" }}
    >
      <div>
        <div className="g_Movies_card">
          <img src={src} alt="" />
        </div>
      </div>
      <div className=" mt-3">
        <h5 className="g_font_15">
          {name?.length < 24 || !isNameSlice ? name : `${name.slice(0, 24)}...`}
        </h5>
        <h6 className="g_font_12 my-1 text-muted">
          {title1?.length < 16 || istitleslice
            ? title1
            : `${title1.slice(0, 16)}...`}
        </h6>

        {title2 && (
          <h6 className="roboto-regular g_font_14 text-muted">{title2}</h6>
        )}
        <h6 className="g_font_12 text-muted">{description}</h6>
      </div>
    </Link>
  );
};
