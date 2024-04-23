
import React from 'react'

export const OurProducts = () => {
  return (
        <div className='bg-white my-2 py-4 g_our_product'>
            <h5 className='ms-4'>OUR PRODUCTS</h5>
            <div className="row text-white ">
                <div className="col-12 col-md-6 p-0">
                    <div style={{ background: "url(Corporates/Campaigns/movie-voucher.avif" }} className='g_box'>
                        <div style={{ width: "65%" }} className=' mx-auto'>
                            <div className='g_font_20'>
                            <h2 className=' py-5'>Movie Vouchers</h2>
                            <p>Highly customizable, single usage,<br/>
                             promotional codes in the form of<br/>
                             set amount / value or a percentage<br/>
                              of discount on the ticket cost.<br/>
                             promotions, consumer activation<br/>
                             and countless more!</p>

                            </div>
                            <button className='btn bg-white my-5 p-3 px-5'>Enquire</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-0">
                    <div style={{ background: "url(Corporates/Campaigns/gift-voucher.avif" }} className='g_box'>
                        <div style={{ width: "65%" }} className=' mx-auto'>
                            <h2 className='py-5'>Gift Vouchers</h2>
                             <div className='g_font_20'>
                             <p>Amazing little pre-loaded crash card<br/>
                              which can be used to purchase tickets<br/>
                               across all categories for 6 months.<br/>
                               Be it employee rewards, trade channel<br/>
                              incentive or consumer engagement,<br/>
                               a gift voucher fits all.</p>

                             </div>
                            <button className='btn bg-white my-5 p-3 px-5'>Enquire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}
