
import React from 'react'
import './MyCard.css'

export const MyCard = ({ src, name,playname, title1,title2, description,istitleslice=true, isNameSlice=true }) => {
    return (
        <div >
            <div>
                <div className='g_Movies_card'>
                    <img src={src} alt="" />
                </div>
            </div>
            <div className=" mt-3">
                <h5 className='g_font_15'>{(name?.length < 24 || !isNameSlice) ? name:`${name.slice(0,24)}...`}</h5>
                <h6 className='g_font_12 my-1 text-muted'>{(title1?.length<16||istitleslice)?title1:`${title1.slice(0,16)}...`}</h6>

                {title2 && <h6 className='roboto-regular g_font_14 text-muted'>{title2}</h6>}
                <h6 className='g_font_12 text-muted'>{description}</h6>

            </div>
        </div>
    )
}