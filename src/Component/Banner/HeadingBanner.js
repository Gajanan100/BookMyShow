
import React from 'react'
import { MdChevronRight } from "react-icons/md";

export const HeadingBanner = ({title1,title2}) => {
  return (
        <div className='mt-2'>
              <div className='py-4 px-5 rounded-3  bg-white d-flex justify-content-between align-item-center '>
      
      <h5>{title1}</h5>
      <p className='g_card_text g_font_16'> {title2} <MdChevronRight/></p>

    </div>

        </div>
  )
}
