import React from 'react'
import './ListShow.css'
import { Carousel } from 'react-responsive-carousel';



export const ListShow = () => {
  return (
    <div>
       <section>
         <div className='g_list_show'>
          <Carousel />

         </div>
       </section>
       <section>
          <div className='container g_host'>
            <h3 className='g_heading'>What can you host?</h3>
            <p>
            As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host.
            </p>
            <div className='row' >
              <div className='col-12 col-md-4'>
                      <img  src='' alt='' />
              </div>
            </div>
            {/* <div className='container'>
              njkklbjh
            </div> */}
          </div>
       </section>
    </div>
  )
}
