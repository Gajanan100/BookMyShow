
import { IoMdStar } from "react-icons/io";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { MdOutlineShare } from "react-icons/md";
// import { useLocation } from "react-router-dom";
import { eleCommaTitle, redirectValidPath } from "../../lib/helpers";
import AppModal from "../../Component/AppModal/AppModal";
import { useContext, useState } from "react";
import { theaterLocations } from "../../data";
import { GlobalContext } from "../../Provider/Provider";
import { UPDATE_BOOKING_DETAILS } from "../../Provider/Actions";
const Banner = () => {
  const { values, dispatch } = useContext(GlobalContext);
  const [selectedLangFormat, setSelectedLangFormat] = useState({ lang: null, format: null })
  // console.log(selectedLangFormat);

  // console.log(values);
  // const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const findTheater = theaterLocations.find((ele) => ele.name === "Pune");
    const availableLanguages = values?.movieDetails?.movieDetails?.languages?.filter((lang) =>
        findTheater.languages.includes(lang)
    );
    const availableScreen = values?.movieDetails?.movieDetails?.screens?.filter((screen) =>
        findTheater.screens.includes(screen)
    );


  function redirectPath() {
    setSelectedLangFormat({ lang: availableLanguages[0], format: availableScreen[0] })

    const { name, movieDetails: { languages, lastDate, screens, slugInfo: { certification, category } } } = values?.movieDetails
    dispatch({ type: UPDATE_BOOKING_DETAILS, payload: { name, languages, screens, certification, category, lastDate, selectedLangFormat } })
}


  function BookTicketsHandler() {
    try {
      setOpenModal(true);
      redirectPath();
  } catch (error) {
      console.log(error)
  }
}
  // console.log(selectedLangFormat);

  function BookTicketModelBox() {
    return (
      <div className="pb-2">
        <div className="px-3 m-0 p-0">
          <p className="mt-3 roboto-regular g_font_14 ">
            {values?.movieDetails?.name}
          </p>
          <h6 className="mt-0 g_font_16">Select Language and format</h6>
        </div>
        <div style={{ background: "#F2F5F9" }} className="p-2 my-3 px-3">
        {availableLanguages?.map((ele, index, arrData) => {
                        return (
                            <span
                                key={ele}
                                onClick={() => {
                                    setSelectedLangFormat({ lang: ele, format: null })
                                    dispatch({ type: UPDATE_BOOKING_DETAILS, payload: { ...values?.ticketBooking, selectedLangFormat: { lang: ele, format: null } } })
                                }}
                                className={`${selectedLangFormat.lang === ele ? "text-primary" : "text-secondary"} g_cursor_pointer`}
                            >
                                {eleCommaTitle(ele, index, arrData)}
                            </span>
                        );
                    })}
        </div>
        <div className="d-flex gap-2 align-items-center px-1 g_font_12">
          {availableScreen?.map((ele) => {
            return (
              <NavLink
              to={"/booktickets"}
              key={ele}
              onClick={() => {
                  setSelectedLangFormat({ ...selectedLangFormat, format: ele })
                  dispatch({ type: UPDATE_BOOKING_DETAILS, payload: { ...values?.ticketBooking, selectedLangFormat: { ...selectedLangFormat, format: ele } } })
              }}
              className={`${selectedLangFormat.format === ele ? "g_card_text" : "text-secondary"}  border text-decoration-none p-2 rounded-pill px-4`}
          >
              {ele}
          </NavLink>

            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className="g_movie_detail"
      style={{
        backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url(${values?.movieDetails?.movieDetails?.bannerImgUrl})`,
      }}
    >
      <AppModal open={openModal} onClose={() => setOpenModal(false)}>
        <BookTicketModelBox />
      </AppModal>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-8">
            <div className="row align-items-center">
              <div className="col-12 col-md-4">
                <div>
                  <div className="g_img_box">
                    <img
                      src={values?.movieDetails?.movieDetails?.poster}
                      alt=""
                    />
                  </div>
                  <div className="bg-dark text-white text-center py-1">
                    <h6 className="g_font_12">In cinemas</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 text-white">
                <h2>{values?.movieDetails?.name}</h2>
                <div className="g_rating_box d-flex  align-items-center justify-content-between px-4 rounded-3 p-3">
                  <div className="d-flex align-items-center">
                    <IoMdStar size={25} className="g_text_color" />
                    <h6 className="m-0 ms-3">
                      {values?.movieDetails?.movieDetails?.rating}/10 (
                      {values?.movieDetails?.movieDetails?.votes} Votes)
                    </h6>
                    <HiOutlineChevronRight size={18} />
                  </div>
                  <button className="bg-white border-0 rounded-2 p-2 g_font_14">
                    Rate Now
                  </button>
                </div>
                <div className="g_screen_box d-flex gap-2">
                  <div className="g_screen d-flex px-2 gap-1 p-1 text-black ">
                    {values?.movieDetails?.movieDetails?.screens.map(
                      (ele, index, arrData) => {
                        return (
                          <Link
                            key={ele}
                            to={redirectValidPath(ele)}
                            className="text-black"
                          >
                            {eleCommaTitle(ele, index, arrData)}
                          </Link>
                        );
                      }
                    )}
                  </div>
                  <div className="g_lang d-flex px-2 gap-1 p-1 text-black ">
                    {values?.movieDetails?.movieDetails?.languages?.map(
                      (ele, index, arrData) => {
                        return (
                          <Link
                            key={ele}
                            to={redirectValidPath(ele)}
                            className="text-black"
                          >
                            {eleCommaTitle(ele, index, arrData)}
                          </Link>
                        );
                      }
                    )}
                  </div>
                </div>
                <div className="g_duration_box text-white my-4 d-flex align-items-center g_font_14 gap-2">
                  <span>
                    {values?.movieDetails?.movieDetails?.slugInfo?.duration}{" "}
                    <GoDotFill size={10} />
                  </span>
                  <div className="d-flex gap-1">
                    {values?.movieDetails?.movieDetails?.slugInfo?.category?.map(
                      (ele, index, arrData) => {
                        return (
                          <Link
                            key={ele}
                            to={redirectValidPath(ele)}
                            className="text-white"
                          >
                            {eleCommaTitle(ele, index, arrData)}
                          </Link>
                        );
                      }
                    )}
                  </div>
                  <span>
                    {" "}
                    <GoDotFill size={10} />{" "}
                    {
                      values?.movieDetails?.movieDetails?.slugInfo
                        ?.certification
                    }{" "}
                    <GoDotFill size={10} />
                  </span>
                  <span>
                    {values?.movieDetails?.movieDetails?.slugInfo?.releaseDate}
                  </span>
                </div>
              {findTheater && ( <button
                  onClick={BookTicketsHandler}
                  className=" g_sign_up_btn text-white rounded-3 btn btn-sm p-2 px-5"
                >
                  Book tickets
                </button>)}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <button className="g_share_btn">
              <MdOutlineShare size={30} />
              <h6>Share</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

