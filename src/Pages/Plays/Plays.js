
import React from 'react'
import { Fillter } from '../../Component/Fillter/Fillter'
import { AppliedFill } from '../../Component/Fillter/AppliedFill';
import { MyCard } from '../../Component/Card/MyCard';
const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomorrow", "This Weekend"],
    },
    {
      title: "Languages",
      buttons: ["Marathi", "Hindi", "English", "Hindustani",'Urdu'],
    },
    {
      title: "Categories",
      buttons: ["Theatre", "Storytelling", "Experimental"],
    },
    {
      title: "Genres",
      buttons: ["Drama","Comdey","Adaptation","Classic","Musical","Adult","Adventure","Contemporary","Fantasy","Histrorical","Horror","Mystery","Period","Romantic",'Thriller'],
    },
    {
        title: "More Filters",
        buttons: ["Outdoor Events", "Fast Filling", "Must Attend", "Kids Allowed"],
      },
    {
      title: "Price",
      buttons: ["Free", "0-500", "501-2000", "Above 2000"],
    },
  ];
  
  const moviesData = [
    {
      name:"Tu mhanshil Tasa",
      title1:'Bal Gandharva rang Mandi',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 400 onwards',
      src:'Plays/et00118976-lqhvrlkgrg-portrait.avif',
    },
    {
      name:"jar ar Chi Goshta",
      title1:'Ram Krishana More',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 400 onwards',
      src:'Plays/et00364523-puwhffyfvg-portrait.avif',
    },
    {
      name:"Charchaugi",
      title1:'Ram Krishna more',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00338953-qnxnczfqpx-portrait.avif',
    },    
    {
      name:"Murderwale Kulkarni",
      title1:'Bal Gandharva Rang Mandi',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00375776-eatafqrlta-portrait.avif',
    },
    {
      name:"NiYAM V ATI LAGU",
      title1:'Ram Krishna more',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00353823-yrzjzhsvgj-portrait.avif',
    },
    {
      name:"IVALESE ROP",
      title1:'Bal Gandharva Rang Mandi',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 500 onwards',
      src:'Plays/et00388332-njdartrjhe-portrait (1).avif',
    },
    {
      name:"Albattya Galbattya",
      title1:'Bal Gandharva Rang Mandi',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00075160-neatantqyx-portrait.avif',
    },
    {
      name:"Galib Marathi Play",
      title1:'Yashwanrao chavan',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00374447-pmdhnjbmcy-portrait.avif',
    },    

    {
      name:"Koni Mhanata takka Dila-Marahi Play",
      title1:'Ram Krishna more',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00390632-nulyqmckus-portrait.avif',
    },
    {
      name:"MASTERMIND",
      title1:'Bal Gandharva Rang Mandi',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00384905-ygvtfjfehx-portrait (1).avif',
    },
    {
      name:"Haravlelya Pattyancha Banglla",
      title1:'Bhara Natya Rang Mandir',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00118818-zludffcmcr-portrait.avif',
    },
    {
      name:"KABEER-MUSICAL MONOACT PLAY",
      title1:'MES Auditorium:Pune',
      title2:'Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00342238-azyhprpdkd-portrait.avif',
    },

    {
      name:"Tujhe Aahe Tujpashi",
      title1:'Anna Bhau Sathe',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00376737-nvfrcbvjmb-portrait.avif',
    },
    {
      name:"Chala Goshti Aiku ya - Stories odf Birbal",
      title1:'The Box Pune',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 100 onwards',
      src:'Plays/et00391572-xjdvzyyfyn-portrait.avif',
    },
    {
      name:"Chanakya - Marathi Play",
      title1:'Ram Krishna More',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00366445-kdutywdwpm-portrait.avif',
    },
    {
      name:"Taj Mahal Ka Tender",
      title1:'Pandit Jawaharlal Nehru',
      title2:'Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 399 onwards',
      src:'Plays/et00389721-zacyyhwfur-portrait.avif',
    },

    {
      name:"An Evening With Chekhov",
      title1:'Pandit Jawaharlal Nehru',
      title2:'Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 299 onwards',
      src:'Plays/et00389724-fgsfphscxl-portrait.avif',
    },
    {
      name:"Chitra_Mitra",
      title1:'Sudarshan Rangmanch',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 100 onwards',
      src:'Plays/et00382111-ftzbxxfrvg-portrait.avif',
    },
    {
      name:"Panchhi Aise Aate Hain",
      title1:'Pandit Jawaharlal Nehru',
      title2:'Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 299 onwards',
      src:'Plays/et00390620-wqrswzscyk-portrait.avif',
    },
    
    {
      name:"KURRR",
      title1:'Bal Gandharva Rang Mandi',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00318509-awuwnphcds-portrait.avif',
    },

    {
      name:"217 PAdmini Dham",
      title1:'Yashwantrao Chavan',
      title2:'Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 500 onwards',
      src:'Plays/et00376787-ldldqhcecs-portrait.avif',
    },
    {
      name:"Shakespeares Twelfth Night",
      title1:'Symbiosis Auditorium:Pune',
      title2:'English',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 500 onwards',
      src:'Plays/et00361922-usvrftlacv-portrait.jpg',
    },
    {
      name:"Sifar presents- Two Absurd and with Plays",
      title1:'The Box:Pune',
      title2:'Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 300 onwards',
      src:'Plays/et00391402-qwfltgaqec-portrait.avif',
    },
    
    {
      name:"Malgudi Days- Drama For Children",
      title1:'Pandit Jawaharlal Nehru',
      title2:'Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 299 onwards',
      src:'Plays/et00389886-lyjjgudyls-portrait.avif',
    },

    {
      name:"Jashn-e-Qalam presents 'Meri Maut'",
      title1:'The Box:Pune',
      title2:'Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 400 onwards',
      src:'Plays/et00389850-lkyvtulkxe-portrait.avif',
    },
    {
      name:"Spectacles",
      title1:'Raah- Literacy and Cultura',
      title2:'English/Hindi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 500 onwards',
      src:'Plays/et00392467-mnylykldjh-portrait.avif',
    },
    {
      name:"Chhota Bhim Maharaja Sinwh",
      title1:'Natsamara Nilu Phule Ran',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 200 onwards',
      src:'Plays/et00074193-vtumtlfgcq-portrait.avif',
    },
    {
      name:"Yada Kadachit Returns",
      title1:'Bal Gandharva Rang Mandi',
      title2:'Marathi',
      istitleslice: false,
      isNameSlice:true,
      description:'₹ 500 onwards',
      src:'Plays/et00358841-mucnrsnwxn-portrait.avif',
    },


    
  ];
export const Plays = () => {
  return (
         <section className='mt-5'>

            <div className='container mt-4 '>
                <div className='row'>
                    <div className='col-12 col-md-3 border-1 g_sticky ps-0'>
                        <h5>Fillater</h5>
                        {data.map((value)=>{
                       return <Fillter key={value.title} buttons={value.buttons} title={value.title}/>
                
                        })}
                    </div>
                    <div className='col-12 col-md-9'>
                        <div>
                            <AppliedFill title={"Movies in Pune"} buttons={["Theatre", "Storytelling", "Experimental"]}/>
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
