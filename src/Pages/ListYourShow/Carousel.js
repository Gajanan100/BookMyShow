import Flickity from 'react-flickity-component'
import { BannerCard } from './BannerCard'
import './Carouse.css'

const flickityOptions = {
    initialIndex: 2
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
        <BannerCard />
        <BannerCard />
        <BannerCard />

    </Flickity>
  )
}
