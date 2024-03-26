
import React from 'react'
import { GiHut } from "react-icons/gi";


export const ContactToday = () => {
  return (
    
    <section className='g_contact py-4'>
        <div className='container '>
            <div className='row text-white align-item-center'>
                <div className='col-12 col-md-9'>
                    <div className=' d-flex gap-2'>
                    <span><GiHut size={25}/></span>
                    <span className='px-2 g_font_15'>List Your Show</span>
                    <p className='g_font_14'>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
                    </div>
                </div>
                <div className='col-12 col-md-2 mx-auto text-end'>
                <button className='g_sign_up_btn px-2 py-1 border-0 rounded-3'>Contact today ! </button>
              </div>

            </div>
        </div>
    </section>
  )
}
