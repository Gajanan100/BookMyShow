import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CgSoftwareDownload } from "react-icons/cg";

function AppInput({ label, placeholder, type = "text" }) {
    return (
        <div className="mb-3">
            <label htmlFor="name" className="g_font_13">
                <span className="text-danger">*</span> {label}
            </label>
            <br />
            <input
                type={type}
                style={{ padding: "6px 10px" }}
                className="border w-100 rounded-1"
                placeholder={placeholder}
            />
        </div>
    );
}

export const Banner = () => {
    return (
        <div style={{ backgroundImage: "url(Corporates/corp-banner-bg.avif" }} className="position-relative">
            <div className="h-100 w-100 position-absolute top-0 left-0" style={{ background: "rgba(0,0,0,0.7)", zIndex: 1 }}></div>
            <div className="container py-4 position-relative " style={{zIndex:2}}>
                <div className="row text-white">
                    <div className="col-12 col-md-6 text-center mt-5">
                        <h1>Entertainment you can gift.</h1>
                        <p className="my-3 g_font_19">
                            A variety of solutions to skyrocket your business with vouchers,
                            <br /> promotions, loyalty, employee recognition & rewards.
                        </p>
                        <div
                            style={{ width: "60%" }}
                            className=" mx-auto d-flex mt-4 align-items-center justify-content-between"
                        >
                            <div className="d-flex align-items-center gap-2">
                                <FaRegCirclePlay size={20} />
                                <h6>Watch Video</h6>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <CgSoftwareDownload size={20} />
                                <h6>Download Brochure</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <form
                            action=""
                            className="bg-white text-dark mx-auto p-4 rounded-1 "
                            style={{ width: "80%" }}
                        >
                            <AppInput label={'Full Name'} placeholder={"Name"} />
                            <AppInput label={'Company Email'} placeholder={"Company Email"} type="email" />
                            <AppInput label={'Company Name'} placeholder={"Company Name"} />
                            <AppInput label={'Mobile Number'} type="number" placeholder={"eg. 91480XXXXX"} />
                            <button className="btn btn-secondary w-100 py-2 mt-2" style={{ opacity: "0.6" }}>Recive a callback</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}