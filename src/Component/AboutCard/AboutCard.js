import React from 'react'
import "./AboutCard.css"
import { eleCommaTitle } from '../../lib/helpers'
const AboutCard = ({ imgPath, name, profession = [] }) => {
    return (
        <div className=' d-flex justify-content-center text-center align-items-center  flex-column'>
            <div className='b_about_img_box'>
                <img src={imgPath} alt="" />
            </div>
            <h6 className='mt-1 fw-normal'>{name}</h6>
            <div className='m-0'>
                {Array.isArray(profession) && profession?.map((ele, index, arrData) => {
                    return <span className='b_h12' key={ele}>{eleCommaTitle(ele, index, arrData)}</span>
                })}
            </div>
        </div>
    )
}

export default AboutCard