import React from "react";
import MultiCarousel from "react-multi-carousel";
const Campaigns = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const data = [
        {
            imgpath: "acuvue-offer.avif",
        },
        {
            imgpath: "addidas-offer.avif",
        },
        {
            imgpath: "croma-promotions.avif",
        },
        {
            imgpath: "hp-offer.avif",
        },
        {
            imgpath: "croma-promotions.avif",
        },
        {
            imgpath: "hp-offer.avif",
        },
        {
            imgpath: "croma-promotions.avif",
        },
        {
            imgpath: "hp-offer.avif",
        },
        {
            imgpath: "croma-promotions.avif",
        },
        {
            imgpath: "hp-offer.avif",
        },
        {
            imgpath: "acuvue-offer.avif",
        },
        {
            imgpath: "acuvue-offer.avif",
        },
    ];
    return (
        <div className="g_movies_carousel bg-white">
            <div className="py-4">
                <h6 className="ms-4 mb-2">CAMPAIGNS WE’RE PROUD OF</h6>
                <div>
                    <MultiCarousel responsive={responsive}>
                        {data.map(({ imgpath }, index) => {
                            return (
                                <div key={index}>
                                    <img src={`Corporates/Campaigns/${imgpath}`} alt="" />
                                </div>
                            );
                        })}
                    </MultiCarousel>
                </div>
            </div>
        </div>
    );
};

export default Campaigns;