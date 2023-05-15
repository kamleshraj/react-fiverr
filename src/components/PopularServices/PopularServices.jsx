import React from 'react'
import '../PopularServices/popularServices.scss'
import SectionTitle from '../SectionTitle'
import Card from '../catCard/Card'
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import { popularService } from '../../data/data';
const PopularServices = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className='popular-wrapper'>
        <div className='container'>
        <SectionTitle title="Popular services"/>
        <Carousel
        responsive={responsive} 
        infinite={true}
        >
          {popularService.map((item)=>{
           return <Card key={item.id} subTitle={item.subTitle} title={item.title} imgUrl={item.image}/>
          })}
        </Carousel>;
        </div>
      </div>
    </>
  )
}

export default PopularServices