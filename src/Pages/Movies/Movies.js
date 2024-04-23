
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
        name: "Maidaan",
        title1: "UA",
        description: "Hindi",
        movieDetails: {
            rating: 7.4,
            lastDate: "2024-04-26",
            poster:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maidaan-et00109952-1712742201.jpg",
            votes: "14.6K",
            description: `A journey undertaken by a single man over a span of 10 years in the pursuit of making a name for the nation.Maidaan, a true story of India s greatest football coach, Syed Abdul Rahim -a story of the Golden Era of Indian Football, a story of true grit and unfathomable passion.`,
            screens: ["2D", "ICE", "IMAX 2D"],
            languages: ["Hindi"],
            slugInfo: {
                duration: "3h 1m",
                category: ["Biography", "Drama", "Sports"],
                certification: "UA",
                releaseDate: "10 Apr, 2024",
            },
            bannerImgUrl:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/maidaan-et00109952-1712742201.jpg",
        },
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAxNC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00109952-dvtsxjqfwd-portrait.jpg",
    },


    {
        name: "Bade Miyan Chote Miyan",
        title1: "UA",
        description: "Hindi",
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAxOS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00322647-culnhhlxyd-portrait.jpg",
        movieDetails: {
            rating: 6.4,
            lastDate: "2024-04-26",
            casts: [
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-1681713982.jpg",
                    name: "Akshay Kumar",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tiger_shroff_37437_27-07-2016_11-49-08.jpg",
                    name: "Tiger Shroff",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg",
                    name: "Prithviraj Sukumaran",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sonakshi_sinha_18494_21-07-2016_01-34-34.jpg",
                    name: "Sonakshi Sinha",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manushi-chhillar-2015213-15-11-2021-04-17-52.jpg",
                    name: "Manushi Chhillar",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/alaya-f-2006134-1672835082.jpg",
                    name: "Alaya F",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ronit-roy-18087-24-03-2017-12-31-01.jpg",
                    name: "Ronit Roy",
                    profession: ["Actor"],
                },
            ],
            crewData: [
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ali-abbas-zafar-21198-26-10-2018-11-53-38.jpg",
                    name: "Ali Abbas Zafar",
                    profession: ["Director", "Producer", "Writer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vashu-bhagnani-iein004098-24-03-2017-12-54-16.jpg",
                    name: "Vashu Bhagnani",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jackky-bhagnani-10549-24-03-2017-14-04-58.jpg",
                    name: "Jackky Bhagnani",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepshikha-deshmukh-1090922-05-03-2018-11-02-09.jpg",
                    name: "Deepshikha Deshmukh",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/himanshu-kishan-mehra-2033841-1706081400.jpg",
                    name: "Himanshu Kishan Mehra",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vishal-mishra-1060511-1709811710.jpg",
                    name: "Vishal Mishra",
                    profession: ["Musician"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bosco-caeser-iein104452-03-08-2017-16-18-23.jpg",
                    name: "Bosco Caeser",
                    profession: ["Choreographer"],
                },
            ],
            poster:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bade-miyan-chote-miyan-et00322647-1706081707.jpg",
            votes: "20.5K",
            description: `When a masked enemy rises within the nation, mercilessly targeting the military by stealing the countrys most dangerous weapon, Colonel Azad sends his best officer to unearth two legendary from his unit for the mission: Brooding Bade Miyan and cocky Chote Miyan.`,
            screens: ["2D", "IMAX 3D", "3D", "IMAX 2D"],
            languages: ["Hindi", "Kannada", "Malayalam", "Telugu", "Tamil"],
            slugInfo: {
                duration: "2h 43m",
                category: ["Action", "Comedy", "Thriler"],
                certification: "UA",
                releaseDate: "11 Apr, 2024",
                
            },
            bannerImgUrl:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bade-miyan-chote-miyan-et00322647-1706081707.jpg",
        },
    },

    
    {
        name: "Swatantrya Veer Savarkar",
        title1: "UA",
        description: "Hindi, Marathi",
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNjYuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00330062-afywqbrlrl-portrait.jpg",
        movieDetails: {
            rating: 9,
            lastDate: "2024-04-26",
            casts: [
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-1681713982.jpg",
                    name: "Akshay Kumar",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tiger_shroff_37437_27-07-2016_11-49-08.jpg",
                    name: "Tiger Shroff",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg",
                    name: "Prithviraj Sukumaran",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sonakshi_sinha_18494_21-07-2016_01-34-34.jpg",
                    name: "Sonakshi Sinha",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manushi-chhillar-2015213-15-11-2021-04-17-52.jpg",
                    name: "Manushi Chhillar",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/alaya-f-2006134-1672835082.jpg",
                    name: "Alaya F",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ronit-roy-18087-24-03-2017-12-31-01.jpg",
                    name: "Ronit Roy",
                    profession: ["Actor"],
                },
            ],
            crewData: [
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ali-abbas-zafar-21198-26-10-2018-11-53-38.jpg",
                    name: "Ali Abbas Zafar",
                    profession: ["Director", "Producer", "Writer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vashu-bhagnani-iein004098-24-03-2017-12-54-16.jpg",
                    name: "Vashu Bhagnani",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jackky-bhagnani-10549-24-03-2017-14-04-58.jpg",
                    name: "Jackky Bhagnani",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepshikha-deshmukh-1090922-05-03-2018-11-02-09.jpg",
                    name: "Deepshikha Deshmukh",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/himanshu-kishan-mehra-2033841-1706081400.jpg",
                    name: "Himanshu Kishan Mehra",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vishal-mishra-1060511-1709811710.jpg",
                    name: "Vishal Mishra",
                    profession: ["Musician"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bosco-caeser-iein104452-03-08-2017-16-18-23.jpg",
                    name: "Bosco Caeser",
                    profession: ["Choreographer"],
                },
            ],
            poster:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/swatantra-veer-savarkar-et00330062-1709646313.jpg",
            votes: "20.5K",
            description: `When a masked enemy rises within the nation, mercilessly targeting the military by stealing the countrys most dangerous weapon, Colonel Azad sends his best officer to unearth two legendary from his unit for the mission: Brooding Bade Miyan and cocky Chote Miyan.`,
            screens: ["2D"],
            languages: ["Hindi", "Marathi"],
            slugInfo: {
                duration: "2h 58m",
                category: ["Biography","Drama"],
                certification: "UA",
                releaseDate: "22 Mar, 2024",
            },
            bannerImgUrl:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/swatantra-veer-savarkar-et00330062-1709646313.jpg",
        },
    },

    {
        name: "Madgaon Express",
        title1: "UA",
        description: "Hindi",
        src: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/madgaon-express-et00341317-1711080867.jpg",
        movieDetails: {
            rating: 9,
            lastDate: "2024-04-26",
            casts: [
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-1681713982.jpg",
                    name: "Akshay Kumar",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tiger_shroff_37437_27-07-2016_11-49-08.jpg",
                    name: "Tiger Shroff",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg",
                    name: "Prithviraj Sukumaran",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sonakshi_sinha_18494_21-07-2016_01-34-34.jpg",
                    name: "Sonakshi Sinha",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manushi-chhillar-2015213-15-11-2021-04-17-52.jpg",
                    name: "Manushi Chhillar",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/alaya-f-2006134-1672835082.jpg",
                    name: "Alaya F",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ronit-roy-18087-24-03-2017-12-31-01.jpg",
                    name: "Ronit Roy",
                    profession: ["Actor"],
                },
            ],
            crewData: [
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ali-abbas-zafar-21198-26-10-2018-11-53-38.jpg",
                    name: "Ali Abbas Zafar",
                    profession: ["Director", "Producer", "Writer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vashu-bhagnani-iein004098-24-03-2017-12-54-16.jpg",
                    name: "Vashu Bhagnani",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jackky-bhagnani-10549-24-03-2017-14-04-58.jpg",
                    name: "Jackky Bhagnani",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepshikha-deshmukh-1090922-05-03-2018-11-02-09.jpg",
                    name: "Deepshikha Deshmukh",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/himanshu-kishan-mehra-2033841-1706081400.jpg",
                    name: "Himanshu Kishan Mehra",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vishal-mishra-1060511-1709811710.jpg",
                    name: "Vishal Mishra",
                    profession: ["Musician"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bosco-caeser-iein104452-03-08-2017-16-18-23.jpg",
                    name: "Bosco Caeser",
                    profession: ["Choreographer"],
                },
            ],
            poster:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/madgaon-express-et00341317-1711080867.jpg",
            votes: "33.5K",
            description: `When a masked enemy rises within the nation, mercilessly targeting the military by stealing the countrys most dangerous weapon, Colonel Azad sends his best officer to unearth two legendary from his unit for the mission: Brooding Bade Miyan and cocky Chote Miyan.`,
            screens: ["2D"],
            languages: ["Hindi"],
            slugInfo: {
                duration: "2h 25m",
                category: ["Comdey","Drama"],
                certification: "UA",
                releaseDate: "22 Mar, 2024",
            },
            bannerImgUrl:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/madgaon-express-et00341317-1711080867.jpg",
        },
    },



    {
        name: "Bade Miyan Chote Miyan",
        title1: "UA",
        description: "Hindi",
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni40LzEwICAxOS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00322647-culnhhlxyd-portrait.jpg",
        movieDetails: {
            rating: 6.4,
            lastDate: "2024-04-17",
            casts: [
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-1681713982.jpg",
                    name: "Akshay Kumar",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tiger_shroff_37437_27-07-2016_11-49-08.jpg",
                    name: "Tiger Shroff",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg",
                    name: "Prithviraj Sukumaran",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sonakshi_sinha_18494_21-07-2016_01-34-34.jpg",
                    name: "Sonakshi Sinha",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manushi-chhillar-2015213-15-11-2021-04-17-52.jpg",
                    name: "Manushi Chhillar",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/alaya-f-2006134-1672835082.jpg",
                    name: "Alaya F",
                    profession: ["Actor"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ronit-roy-18087-24-03-2017-12-31-01.jpg",
                    name: "Ronit Roy",
                    profession: ["Actor"],
                },
            ],
            crewData: [
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ali-abbas-zafar-21198-26-10-2018-11-53-38.jpg",
                    name: "Ali Abbas Zafar",
                    profession: ["Director", "Producer", "Writer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vashu-bhagnani-iein004098-24-03-2017-12-54-16.jpg",
                    name: "Vashu Bhagnani",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jackky-bhagnani-10549-24-03-2017-14-04-58.jpg",
                    name: "Jackky Bhagnani",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepshikha-deshmukh-1090922-05-03-2018-11-02-09.jpg",
                    name: "Deepshikha Deshmukh",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/himanshu-kishan-mehra-2033841-1706081400.jpg",
                    name: "Himanshu Kishan Mehra",
                    profession: ["Producer"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vishal-mishra-1060511-1709811710.jpg",
                    name: "Vishal Mishra",
                    profession: ["Musician"],
                },
                {
                    imgPath:
                        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bosco-caeser-iein104452-03-08-2017-16-18-23.jpg",
                    name: "Bosco Caeser",
                    profession: ["Choreographer"],
                },
            ],
            poster:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bade-miyan-chote-miyan-et00322647-1706081707.jpg",
            votes: "20.5K",
            description: `When a masked enemy rises within the nation, mercilessly targeting the military by stealing the countrys most dangerous weapon, Colonel Azad sends his best officer to unearth two legendary from his unit for the mission: Brooding Bade Miyan and cocky Chote Miyan.`,
            screens: ["2D", "IMAX 3D", "3D", "IMAX 2D"],
            languages: ["Hindi", "Kannada", "Malayalam", "Telugu", "Tamil"],
            slugInfo: {
                duration: "2h 43m",
                category: ["Action", "Comedy", "Thriler"],
                certification: "UA",
                releaseDate: "11 Apr, 2024",
            },
            bannerImgUrl:
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bade-miyan-chote-miyan-et00322647-1706081707.jpg",
        },
    },
   
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
