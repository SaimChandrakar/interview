import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/images/banner.png';
import ban2 from '../assets/images/ban2.png';
import ban3 from '../assets/images/ban3.png';
import { Container } from 'react-bootstrap';

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
   <Container fluid className='p-0'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src={banner} className='img-fluid'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ban2} className='img-fluid'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ban3} className='img-fluid'/>
            </Carousel.Item>
        </Carousel>
   </Container>
  );
}
