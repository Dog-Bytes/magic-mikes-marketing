import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import { CarouselImage }  from "../styling/globalStyleComponents";


const ImageCarousel = (props) => {
    console.log(props);
  return (
    <>
      <ScrollCarousel
        autoplay={true}
        autoplaySpeed={0}
        speed={0}
        onReady={()=>{}}
        margin={20}
      >
        {props.images.map((item) => (
            <CarouselImage src={item} alt="Magic Mikes clearance before and afters" />
        ))}
      </ScrollCarousel>
    </>
  );
};

export default ImageCarousel;