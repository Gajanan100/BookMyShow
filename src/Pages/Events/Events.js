
import React from 'react'
import './events.css'
import { Fillter } from '../../Component/Fillter/Fillter'
import { AppliedFill } from '../../Component/Fillter/AppliedFill';
import { MyCard } from '../../Component/Card/MyCard';
// import { Carousel } from 'react-responsive-carousel';
const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomorrow", "This Weekend"],
    },
    {
      title: "Languages",
      buttons: ["English", "Hindi", "Telgu", "Punjabi"],
    },
    {
      title: "Categories",
      buttons: ["Workshop", "Online Streaming Events", "Comedy Shows", "Kids", "Performances", "Music Shows"],
    },
    {
      title: "More Filters",
      buttons: ["Online Streaming", "Fast Filling", "Outdoor Events", "Must Attend", "Unmissable Events", "Kids Activities", "Kids Allowed", "Offers for you"],
    },
    {
      title: "Price",
      buttons: ["Free", "0-500", "501-2000", "Above 2000"],
    },
  ];
  
  const moviesData = [
    {
      name: "Max Fields Holi Festival",
      title1: "Camp Max: Kalote",
      title2: "Holi Celebrations",
      description: "₹ 1000 onwards",
      src: "Events/et00391068-xzeblxybyx-portrait.avif",
    },
    {
      name: "Gaurav Gupta Live",
      title1: "The Kopa:Pune",
      title2: "Stand up Comedy",
      description: "₹ 400 onwards",
      src: "Events/et00376905-rbrftaasbm-portrait.avif",
    },
    {
      name: "Sunburn Holi Weekend Ft. Marshmello-Pune",
      title1: "Mahalakshmi Lawns",
      isNameSlice: false,
      title2: "Concerts",
      description: "₹ 999 onwards",
      src: "Events/et00385753-bbgmyxzrmq-portrait.avif",
    },
    {
      name: "Barso Holi Carnival Feat Ritviz- Pune",
      title1: "Formula Karting Pune",
      title2: "Concerts",
      description: "₹ 499 onwards",
      src: "Events/et00391115-pqjmybtxbp-portrait.avif",
    },
    {
      name: "The Rahul Deshpande Collective -pune ",
      title1: "Pandit Farms: pune",
      title2: "Concerts",
      description: "₹ 500 onwards",
      src: "Events/et00387665-qrlbsjzeum-portrait.avif",
    },
    {
      name: "Kal Ki Chinta Nahi Karta Ft. Ravi Gupta",
      title1: "The KOPA Pune comedy shows",
      title2: "Education",
      description: "₹ 499 onwards",
      src: "Events/et00329412-qlfczlezbk-portrait.avif",
    },
    {
      name: "Sankarshan via Spruha ",
      title1: "Yashwantrao Chavan",
      title2: "Poetry",
      isNameSlice: false,
      description: "₹ 300 onwards",
      src: "Events/et00371175-kxqkbpnxby-portrait.avif",
    },
    {
      name: "BMW Joytown 2024",
      title1: "Mhalaxmi Race Course",
      title2: "Concerrts",
      isNameSlice: false,
      description: "₹ 4999 onwards",
      src: "Events/et00386991-anltfykwss-portrait.avif",
    },
    {
      name: "CHAMAN CHATORA Gaurav Kapoor's",
      title1: "The KOPA Pune",
      isNameSlice: false,
      title2: "Stand up Comdey",
      description: "₹ 999 onwards",
      src: "Events/et00313122-jjeweppqsn-portrait.avif",
    },
    {
      name: "Ajay-Atul Live Concert 2024- pune",
      title1: "Mahalakshmi Lawns: pune",
      title2: "Concerts",
      description: "₹ 999 onwards",
      src: "Events/et00383790-auxrvergux-portrait.avif",
    },
    {
      name: "Waters: Holi Hai 2.0",
      title1: "WATERS: Bar & Kitchen",
      title2: "Holi Celebrations",
      isTitle1Slice: false,
      description: "₹ 399 onwards",
      src: "Events/et00390029-dxxappedtp-portrait.avif",
    },
    {
      name: "Ayushwar Bolu Kahi- Pune",
      title1: "Yashwantrao Chavan",
      title2: "Poetry",
      isTitle1Slice: false,
      description: "₹ 400 onwards",
      src: "Events/et00362502-lvlqzmpelx-portrait.avif",
    },
    {
      name: "Pranit More Live: Stand- Up & Crowd-work Solo",
      title1: "Godaam Speciality Coffee",
      isTitle1Slice: false,
      title2: "Stand up Comedy",
      description: "₹ 399 onwards",
      src: "Events/et00363549-zcvkqapzgh-portrait.avif",
    },
    {
      name: "TQC Stand Up Sessions",
      title1: "TQC, Viman Nagar: pune",
      title2: "Stand up Comedy",
      description: "FREE",
      src: "Events/et00358544-xplggwmgts-portrait.avif",
    },
    {
      name: "RajKumari by Nayab Midha- A Poetry Special",
      title1: "Venue To BE Announced",
      isTitle1Slice: false,
      title2: "Stand up Comedy",
      description: "₹ 499 onwards",
      src: "Events/et00382149-mxyruunmuq-portrait.avif",
    },
    {
      name: "HATKE Sampurna GeetRamayan",
      title1: "MES Bhave Primary School",
      title2: "Education",
      isTitle1Slice: false,
      description: "Free",
      src: "Events/et00391300-kawbpacdtw-portrait.avif",
    },
    {
        name: "The Rahul Deshpande Collective -pune ",
        title1: "Pandit Farms: pune",
        title2: "Concerts",
        description: "₹ 500 onwards",
        src: "Events/et00387665-qrlbsjzeum-portrait.avif",
      },
      {
        name: "Kal Ki Chinta Nahi Karta Ft. Ravi Gupta",
        title1: "The KOPA Pune comedy shows",
        title2: "Education",
        description: "₹ 499 onwards",
        src: "Events/et00329412-qlfczlezbk-portrait.avif",
      },
      {
        name: "Sankarshan via Spruha ",
        title1: "Yashwantrao Chavan",
        title2: "Poetry",
        isNameSlice: false,
        description: "₹ 300 onwards",
        src: "Events/et00371175-kxqkbpnxby-portrait.avif",
      },
      {
        name: "BMW Joytown 2024",
        title1: "Mhalaxmi Race Course",
        title2: "Concerrts",
        isNameSlice: false,
        description: "₹ 4999 onwards",
        src: "Events/et00386991-anltfykwss-portrait.avif",
      },
    
  ];
export const Events = () => {
  return (
         <section className='mt-5'>

            <div className='container mt-4 '>
                <div className='row'>
                    <div className='col-12 col-md-3 border-1 g_sticky ps-0'>
                        <h5>Fillater</h5>
                        {data.map((value)=>{
                       return <Fillter  key={value.title} buttons={value.buttons} title={value.title}/>
                
                        })}
                    </div>
                    <div className='col-12 col-md-9'>
                        <div>
                            <AppliedFill title={"Movies in Pune"} buttons={["Hindi","Marathi","English"]}/>
                        </div>
                        <div className="row py-3">
                                {moviesData.map(value => <div key={value.movieName} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3">
                                    <MyCard {...value} />
                                </div>)}
                            </div>


                        </div>

                    </div>

                </div>

         </section>
  )
}
