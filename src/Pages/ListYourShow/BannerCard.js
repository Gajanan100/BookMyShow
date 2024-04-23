
import React from 'react'
import { Link } from 'react-router-dom'

 const BannerCard = ({ background = "#45443F", title, description, imgPath }) => {
  return (
    <div className='p-3 mx-2 text-white' style={{ background, width: "50%" }}>
        <div className='row align-item-center g_Carousel'>
            <div className='col-12 col-md-7'>             
                   <h2 className='mb-2'>{title}</h2>
                   <p className='g_font_18'>{description}</p>
                   <Link to={"/"} className='text-white text-decoration-none g_font_18 '>Know More</Link>
                   <button className='g_card_text border-0 rounded-1 d-block mt-2 px-4'>Contact Us Today</button>
            </div>
            <div className='col-12 col-md-5'>
               <div className='g_banner_card_img'>
                <img src={imgPath} alt="" />
               </div>
            </div>

        </div>
    </div>
  )
}
export default BannerCard
