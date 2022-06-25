import { Carousel } from 'react-bootstrap';

import img1 from './images/img1.jpg';


import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';

export default function Slider() {
  return (
    <>

      <Carousel controls={false} fade={true} pause={false}>
        <Carousel.Item interval={3000}>
          <img width={900} height={730}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={3000}>
          <img width={900} height={730}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img width={900} height={730}
            className="d-block w-100"
            src={img4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img width={900} height={730}
            className="d-block w-100"
            src={img5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img width={900} height={730}
            className="d-block w-100"
            src={img6}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img width={900} height={730}
            className="d-block w-100"
            src={img7}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img width={900} height={730}
            className="d-block w-100"
            src={img8}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      
    </>
  )
}
