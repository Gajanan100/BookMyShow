
import React from 'react'
import "./Movies.css"
import { Carousel } from 'react-responsive-carousel'
import { Fillter } from '../../Component/Fillter/Fillter'
import { AppliedFill } from '../../Component/Fillter/AppliedFill';
import { HeadingBanner } from '../../Component/Banner/HeadingBanner';
import { MyCard } from '../../Component/Card/MyCard';
// import { Carousel } from 'react-responsive-carousel';
const data = [
    {
        title: "Languages",
        buttons: ["Marathi", "Hindi"],
    },
    {
        title: "Genres",
        buttons: ["Thriller", "Action", "Drama", "Romantic", "Supernatural"],
    },
    {
        title: "Format",
        buttons: ["2D"],
    },
       
];
const moviesData = [
    {
        name: "Swatantrya Veer Savarkar",
        title1: "UA",
        description: "Hindi, Marathi",
        src: "MoviesCards/et00330062-ygqvhscxbj-portrait.avif",
    },
    {
        name: "Shaitaan",
        title1: "UA",
        description: "Hindi",
        src: "MoviesCards/et00384234-namrszxlsp-portrait.avif",
    },

    {
        name: "Madgaon Express",
        title1: "UA",
        description: "Hindi",
        src: "MoviesCards/et00341317-tfhyqcxzpt-portrait.avif",
    },
    {
        name: "Kung Fu Panda 4",
        title1: "U",
        description: "English, Hindi, Tamil, Telugu",
        src: "MoviesCards/et00379741-elmpsgwwlv-portrait.avif",
    },
    {
        name: "Godzilla x Kong The New Empire",
        title1: "UA",
        description: "English, Hindi, Tamil, Telugu",
        src: "MoviesCards/et00358147-ualvbgjhsh-portrait.avif",
    },
    {
        name: "Yodha",
        title1: "UA",
        description: "Hindi",
        src: "MoviesCards/et00318073-yprrbdltbp-portrait.avif",
    },

    {
        name: "Article 370",
        title1: "UA",
        description: "Hindi",
        src: "MoviesCards/et00384444-ddrheqdnqs-portrait.avif",
    },
    {
        name: "Laapataa Ladies",
        title1: "UA",
        description: "Marathi",
        src: "MoviesCards/et00351955-wdpydksvqj-portrait.avif",
    },

    {
        name: "Dune: Part Two",
        title1: "UA",
        description: "English, Hindi",
        src: "MoviesCards/et00331567-bhgpebuawe-portrait.avif",
    },
    {
        name: "Imaginary",
        title1: "A",
        description: "English",
        src: "MoviesCards/et00387410-nquqfqhgmn-portrait.avif",
    },

    {
        name: "Janma Runna",
        title1: "U",
        description: "Marathi",
        src: "MoviesCards/et00391898-aarsvqdsvk-portrait.avif",
    },
    {
        name: "Arthur The King",
        title1: "U",
        description: "English",
        src: "MoviesCards/et00389714-gywaqnyjbs-portrait.avif",
    },

    {
        name: "What A Kismat",
        title1: "UA",
        description: "Hindi",
        src: "MoviesCards/et00389814-wpltvhrkfn-portrait.avif",
    },
    {
        name: "Bastar: The Naxal Story",
        title1: "A",
        description: "Hindi, Telugu",
        src: "MoviesCards/et00383786-pgrdvvljfq-portrait.avif",
    },

    {
        name: "Manjummel Boys",
        title1: "U",
        description: "Malayalam",
        src: "MoviesCards/et00386670-rybevyurtd-portrait.avif",
    },
    {
        name: "Trailers Screening Show",
        title1: "UA",
        description: "Multi Languages",
        src: "MoviesCards/et00357595-vcryzkfcrg-portrait.avif",
    },


];


const carouselData=["carousel_first.avif","carousel_second.avif","carousel_third.avif","carousel_four.avif"]

export const Movies = () => {
  return (
         <section>
            <Carousel interval={3000} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
                {carouselData.map((value,index)=>{
                    return(
                        <div key={index} style={{width:"100%",height:280}} className='p-1'>
                        <img width={"100%"} height={"100%"} src={value} alt='first' className='rounded-3'/>
                    </div>
    
                    )
                })}
            </Carousel>

            <div className='container mt-4 '>
                <div className='row'>
                    <div className='col-12 col-md-3 border-1  ps-0'>
                        <h5>Fillater</h5>
                        {data.map((value)=>{
                       return <Fillter  key={value.title} buttons={value.buttons} title={value.title}/>
                
                        })}
                    </div>
                    <div className='col-12 col-md-9'>
                        <div>
                            <AppliedFill title={"Movies in Pune"} buttons={["Hindi","Marathi","English"]}/>
                        </div>

                        <div className='my-4'>

                          <HeadingBanner
                           title1="Coming Movies"
                           title2='Expore Upcoming Movies'
                          />
                        </div>
                        <div className="row py-3">
                                {moviesData.map(value => <div key={value.name} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3">
                                    <MyCard {...value} />
                                </div>)}
                            </div>


                        </div>

                    </div>

                </div>

         </section>
  )
}
