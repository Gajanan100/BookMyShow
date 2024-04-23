import React from "react";
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
    return (
        <div className="my-4 g_testimonial">
            <h5 className="text-center my-3">Testimonials</h5>
            <Carousel showStatus={false}>
                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="h-50 w-50 mx-auto d-flex align-item-center text-center mt-4" >
                                <img src="Corporates/o-logo.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="g_font_14">
                                “Through our partnership with BookMyShow, we have been able to
                                offer very exciting events privileges to our Select members. We
                                were able to drive excitement/ engagement with unique offering
                                which was much appreciated by our privileged members. Thank you
                                BookMyShow and team for great work.”
                            </p>
                            <h6>
                                Ashish Lingamneni <br /> Associate Director - Marketing <br />
                                OlaCabs
                            </h6>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="h-50 w-50 mx-auto d-flex align-item-center text-center mt-4" >
                                <img src="Corporates/mmt-logo.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="g_font_14">
                            “My experience of working with BMS Corporate Solutions team has been absolutely awesome. I really like the professionalism and biasedness for action that the team demonstrates. Team is extremely clear with their communication and maintain extreme transparency which is very important to build trust in any partnership”
                            </p>
                            <h6>
                            Arun Garg <br /> Head - Alliances & Partnerships <br />
                            MakeMyTrip
                            </h6>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="h-50 w-50 mx-auto d-flex align-item-center text-center mt-4" >
                                <img src="Corporates/mastercard-logo (1).avif" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="g_font_14">
                            “Through our partnership, we have been able to create waves of excitement and interest amongst our customers. It has helped us to build a long lasting relationship & a special bond with our clients as movies is something that appeals to everyone. Thank you, BookMyShow!“                            </p>
                            <h6>
                            Vikas Verma <br /> Executive Director <br />
                            Executive Director
                            </h6>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row bg-white p-3">
                        <div className="col-12 col-md-3">
                            <div className="h-50 w-50 mx-auto d-flex align-item-center text-center mt-4" >
                                <img src="Corporates/cm-logo.avif.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-9 text-start border-start border-2">
                            <p className="g_font_14">
                            “As a token of our appreciation to the prospects who visit our Holiday World, we offer them BMS vouchers. These vouchers helps us further reinforce our core thought of creating Magical Moments for them and instantly put a smile on their faces“  </p>                          <h6>
                            Vikas Verma <br /> Executive Director <br />
                            Executive Director
                            </h6>
                        </div>
                    </div>
                </div>

            </Carousel>
            <div className="text-center" >
            <button className=" border border-danger g_card_text 
            -2 g_font_18 " style={{padding:"0 140px"}} >
                  Partner with us
                </button>

            </div>
          
        </div>
    );
};

export default Testimonial;