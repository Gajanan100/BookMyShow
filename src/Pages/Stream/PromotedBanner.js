import React from 'react'
// import { IoMdPlay } from "react-icons/io";
export const PromotedBanner = ({ path, posterPath, title, movieName, slug, language, description, isPremiere = false }) => {
    return (
        <div className='g_promated_banner_top' style={{ background: path }}>
            <div className='g_Promoted_banner'>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="b_img_box">
                                <img src={posterPath} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7 text-white d-flex align-items-center text-start">
                            <div className='g_Promoted_banner_content d-flex flex-column gap-4'>
                                {isPremiere && <img style={{width:"150px",height:"30px"}} src='PromotedImg/premiere-chip-tag.avif' alt='h' />}
                                <h6>{title}</h6>
                                <h2>{movieName}</h2>
                                <h6>{slug}</h6>
                                <h6 className='g_font_13'>{language}</h6>
                                <h6 className='g_description'>{description}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}