import React, { useContext, useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { GlobalContext } from '../../Provider/Provider';
import AppModal from '../../Component/AppModal/AppModal';
import SelectSeats from './SelectSeats';
import PriceAndTime from './PriceAndTime';
// import SelectSeats from './SelectSeats';
const Theaters = () => {
    const [isFillHeart, setIsFillHeart] = useState(false)
    const [openTicketModal, setOpenTicketModal] = useState(false)
    const { values } = useContext(GlobalContext)
    const { shows } = values?.ticketBooking
    console.log(shows);

    function heartHandlerEnter() {
        setIsFillHeart(true)
    }
    function heartHandlerLeave() {
        setIsFillHeart(false)
    }


    return (
        <div className='g_theaters'>
            <AppModal width={40} open={openTicketModal} onClose={() => setOpenTicketModal(false)}>
                <SelectSeats/>
            </AppModal>
            <div className=" d-flex g_font_12 border-bottom align-items-center py-2 justify-content-end gap-2 p-2">
                <div className=' d-flex align-items-center gap-1'>
                    <GoDotFill size={16} color='#4ABD5D' />
                    <h6 className='g_font_10 roboto-regular'>AVAILBALE</h6>
                </div>
                <div className='d-flex align-items-center gap-1'>
                    <GoDotFill size={16} color='#FF6600' />
                    <h6 className='g_font_10 roboto-regular'>FAST FILLING</h6>
                </div>
                <div className='d-flex align-items-center gap-1'>
                    <div style={{ lineHeight: 1 }} className='border-success border px-2 text-success'>
                        <span className='b_h9 '>LAN</span>
                    </div>
                    <h6 className='g_font_10 roboto-regular'>SUBTITLES LANGUAGE</h6>
                </div>
            </div>
            {/* //time and  shows */}
            <div className="row py-3 ">
                <div className="col-12 col-md-3 d-flex gap-3">
                    <div onMouseLeave={heartHandlerLeave} onMouseEnter={heartHandlerEnter} >
                        {isFillHeart ? <FaHeart color='#F84464' size={20} cursor={"pointer"} /> : <CiHeart size={20} cursor={"pointer"} />}
                    </div>
                    <div>
                        <h6 className='g_theater g_font_13 m-0'>Meenakshi Cinemark:Selu</h6>
                        <div className='text-warning d-flex align-items-center gap-2 mt-3'>
                            <IoFastFoodOutline />
                            <h6 className='g_font_13 m-0'>Food Beverage</h6>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-1">
                    <div className='g_info text-secondary d-flex align-items-center gap-2'>
                        <BsExclamationCircle size={14} />
                        <h6 className='g_font_12 m-0'>INFO</h6>
                    </div>
                </div>
                <div className="col-12 col-md-5 ">
                    <div className="d-flex flex-wrap gap-3">
                        {shows?.map((ele) => {
                            return <PriceAndTime key={ele} onClick={() => setOpenTicketModal(true)} > {ele}</PriceAndTime>
                        })}

                    </div>
                    <div className=' d-flex mt-2 align-items-center text-secondary  gap-1'>
                        <GoDotFill size={16} color='#FFC610' />
                        <h6 className='g_font_13  roboto-regular'>Cancellation Available</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theaters