
import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";

 const ShowsCards = ({ imgPath, title, background = "#FCF1F1" }) => {
        return (
            <div style={{ background }} className='g_shows_card text-center'>
                <div className='g_shows_card_img'>
                    <img src={imgPath} alt="" />
                </div>
                <h4>{title}</h4>
                <BsExclamationCircle size={25} className='g_card_text' />
            </div>
        
      )
}
export default ShowsCards
