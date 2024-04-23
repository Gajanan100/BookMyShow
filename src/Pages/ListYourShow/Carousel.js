import React  from 'react'
import Flickity from 'react-flickity-component'
import BannerCard from './BannerCard'
import './Carouse.css'

const flickityOptions = {
    initialIndex: 2
}

export const Carousel = () => {
  return (
    <Flickity 
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={{ ...flickityOptions, wrapAround:true ,pageDots:false}} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false

    >
      <BannerCard title={"Ticket scanning made easy"} imgPath={"ListShow/sli-o2.avif"} description={"Experience the ease of managing entry at an event."} />
      <BannerCard background='#516C7A'  imgPath={"ListShow/des-lap-sli-six.avif"} title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"} />
      <BannerCard  background='#385434'  imgPath={"ListShow/sli-o2.avif"} title={"Empower the artist within you"} description={"List your own performances, gigs and more with BookMyShow"} />
      <BannerCard  background='#516C7A'  imgPath={"ListShow/des-sli-th4.avif"} title={"Conduct workshops and much more"} description={"Share your skills with people around the world - from home!"} />
      <BannerCard  background='#9E6D4C'  imgPath={"ListShow/des-sli-f.avif"} title={"Take advantage of our M-ticket feature"} description={"Lets your audience skip the box office queue and head straight to the gate."} />

    </Flickity>
  )
}
