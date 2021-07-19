import React from 'react';
import {Carousel} from 'react-bootstrap';
import {CarouselData} from './CarouselData';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousels() {
    return (
        <div>
<Carousel>

{CarouselData.map((Data) => {
        return(
  <Carousel.Item key={Data.id} >
  

    <img
    
      className={Data.className}
      height="700px"
      src={Data.srcimg}
      alt={Data.alt}
      
    />
    
    <Carousel.Caption>
    
      <h3>{Data.header}</h3>
      <p>
        {Data.paragraph}
      </p>
    </Carousel.Caption>
 
       
      </Carousel.Item>
      );
      })}
</Carousel>

        </div>
    )
}
