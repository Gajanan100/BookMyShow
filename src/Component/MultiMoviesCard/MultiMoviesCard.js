import React from 'react'
import MultiCarousel from "react-multi-carousel";
import "./MultiMoviesCard.css"
import { MdOutlineChevronRight } from "react-icons/md";
export const MultiMoviesCard = ({ srcData = [], title, isShowAll = false }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='g_movies_carousel'>
            {(title || isShowAll) && <div className='d-flex justify-content-between align-items-center my-2 mx-1'>
                <h4 className='g_font_20'>{title}</h4>
                {isShowAll && <div className='g_card_text d-flex align-items-center'>
                    <span className='b_cursor_pointer g_font_14 '>See All</span>
                    <MdOutlineChevronRight />
                </div>}
            </div>}
            <MultiCarousel responsive={responsive}>
                {srcData.map((path, index) => {
                    return <div key={index} className="g_carousel_img_box">
                        <img src={path} alt="" />
                    </div>
                })}

            </MultiCarousel>
        </div>

    )
}