import React from 'react'
import './ListShow.css'
import { Carousel } from './Carousel'
import ShowsCards from './ShowsCards';
import { Testimonials } from './Testimonials';

function ShowsMainText({ title, desc }) {
    return (
        <div className="text-center">
            <h1 className='text-blod ' >{title}</h1>
            <p className="w-100 g_font_20 mx-auto">{desc}</p>
        </div>
    );
}
const cardData = [
    {
        imgPath: "ListShow/perf.avif",
        title: "Performances",
    },
    {
        imgPath: "ListShow/experiencess.avif",
        title: "Experiences",
    },
    {
        imgPath: "ListShow/expositionss.avif",
        title: "Expositions",
    },
    {
        imgPath: "ListShow/partiess.avif",
        title: "Parties",
    },
    {
        imgPath: "ListShow/sport.avif",
        title: "Sports",
    },
    {
        imgPath: "ListShow/conferencess.avif",
        title: "Confercesses",
    },
];
const cardData2 = [
    {
        imgPath: "ListShow/online-saless.avif",
        title: "Online Sales & Marketing",
    },
    {
        imgPath: "ListShow/pricings.avif",
        title: "Pricing",
    },
    {
        imgPath: "ListShow/food.avif",
        title: "Food & beverages stalls and the Works!",
    },
    {
        imgPath: "ListShow/on-ground-support.avif",
        title: "Onground support & gate enty management",
    },
    {
        imgPath: "ListShow/report.avif",
        title: "Reports & business insights",
    },
    {
        imgPath: "ListShow/rfids.avif",
        title: "POS, RFID, Turnstiles & more...",
    },
];


export const ListShow = () => {
    return (
        <div>
            <section className="g_shows_top">
                <div className="my-3">
                    <Carousel />
                </div>
            </section>
            <div className="bg-white g_show_wrapper ">
                <div className="g_shows_wrapper_container mx-auto ">
                    <ShowsMainText
                        title={"What you can host?"}
                        desc={
                            "As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."
                        }
                    />
                    <div className="row">
                        {cardData.map(function (card, index) {
                            return (
                                <div key={index} className="col-12 col-md-4 mt-5">
                                    <ShowsCards background="#ECF5FF" {...card} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-5">
                        <button style={{ padding: "12px 70px" }} className="g_card_text text-white btn btn-sm b_sign_btn fw-bold">List your show</button>
                    </div>
                </div>
                <div style={{ marginTop: 100 }} className="g_shows_wrapper_container mx-auto ">
                    <ShowsMainText
                        title={"What are the services we offer?"}
                        desc={
                            `After successful collaborations with the best event organisers over the past decade and a half, we’re well equipped to bring your vision to life.`
                        }
                    />
                    <div className="row">
                        {cardData2.map(function (card, index) {
                            return (
                                <div key={index} className="col-12 col-md-4 mt-5">
                                    <ShowsCards  {...card} />
                                </div>
                            );
                        })}
                    </div>
                    <p className="mx-auto my-3 text-center" style={{ width: "85%" }}>
                        Apart form these must haves for any event, we also support a host of other services like SEO for your event, custom pricing for your tickets and this and also this.</p>
                    <div className="text-center mt-5">
                        <button style={{ padding: "12px 70px" }} className="g_card_text btn btn-sm g_sign_up_btn text-white fw-bold">List your show</button>
                    </div>
                </div>
            </div>
            <Testimonials />

            {/* Security Section  */}
            <div className='bg-white g_Security_main' >
            <div style={{ width: "50%", background: "url(ListShow/security-imag.avif)" }} className="mx-auto g_security ">
                    <ShowsMainText width={100} title={"Sit back and watch your event come to life"} desc={"Events maybe all fun and games, but we take it seriously. We ensure our customer’s security so that you don’t have to."} />
                </div>
            </div>

        </div>
    )
}
