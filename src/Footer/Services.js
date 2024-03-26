
import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa6";

export const Services = () => {
    const data=[
        {
            icons:<RiCustomerService2Line size={45}/>,
            title: "24/7 CUSTOMER CARE",
        },
        {
            icons:<GiTicket size={45}/>,
            title: "RESEND BOOKING CONFORMATIONS",
        },
        {
            icons:<FaEnvelopeOpenText size={45}/>,
            title: "SUBSCRIBE TO THE NEWSLETTERS",
        }        
    ]
  return (
        <section className='g_service text-white py-3'>
            <div className='container'>
                <div className='row'>
                    {data.map((eve,index)=>{
                        return(
                            <div key={index} className='col-12 col-md-4 text-center g_box_opacity'>
                            {eve.icons}
                            <p className='roboto-light mt-2 g_font_10'>{eve.title}</p>   
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
  )
}
