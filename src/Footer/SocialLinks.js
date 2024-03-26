
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const socialIcons=[<FaFacebookF/>,<RiTwitterXLine/>,<TiSocialInstagram/>,<FaYoutube/>,<FaPinterestP/>,<FaLinkedinIn/>]


export const SocialLinks = () => {
  return (
     <section className='g_menu_link py-5'>
      <div className='g_bookmyshow_border position-relative'>
        <div className='g_bottom_logo d-flex justify-content-center position-absolute w-100'> 
        <div className=' g_menu_link px-2 '>  
          <img  src="logo_white_bookshow.svg" alt="logo_white_bookshow"/>
        </div>
        </div>
      </div>
      <div className='container text-white'>
        <div className='d-flex justify-content-center gap-2 pt-5 pb-4'> 
        {socialIcons.map(function(value,index){
          return(
          <div key={index} className='g_icons  align-items-center'>
                 {value}
       </div>);
        })}       
          {/* <div className='g_icons  align-items-center'>
           <div> <FaFacebookF/></div>
        </div>
        <div className='g_icons  align-items-center'>
           <div> <RiTwitterXLine/></div>
        </div>
        <div className='g_icons  align-items-center'>
           <div> <TiSocialInstagram/></div>
        </div>
        <div className='g_icons  align-items-center'>
           <div> <FaYoutube/></div>
        </div>
        <div className='g_icons  align-items-center'>
           <div> <FaPinterestP/></div>
        </div>
        <div className='g_icons  align-items-center'>
           <div> <FaLinkedinIn/></div>
        </div> */}
        </div>
      </div>
      <div className='g_copyright g_social_text_p  mt-0'>
        <div className='container text-center g_font_12 '>
        <p >Copyright 2024  © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
        <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>


        </div>

      </div>
     </section>

  )
}
