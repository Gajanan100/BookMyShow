import React from 'react'

const BulkBooking = () => {
    return (
        <div className='my-2 g_bulk_booking text-white position-relative' style={{ background: "url(Corporates/bulk-booking.avif)" }}>
            <div className='position-absolute top-0 start-0 w-100 h-100' style={{ background: "rgba(0,0,0,0.5)", zIndex: 1 }}></div>
            <div className="row justify-content-between px-5 py-5 align-items-center position-relative" style={{ zIndex: 2 }}>
                <div className="col-12 col-md-5">
                    <h6 className='my-3'>Bulk Booking</h6>
                    <h2>Exclusive corporate experiences from BookMyShow</h2>
                </div>
                <div className="col-12 col-md-3">
                    <button className="g_sign_up_btn  py-3 text-white btn btn-sm g_card_text w-100">Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default BulkBooking