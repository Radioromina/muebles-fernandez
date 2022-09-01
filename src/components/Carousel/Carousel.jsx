import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/img/imagen1.jpg"
import img2 from "../../assets/img/imagen2 1.jpg"
import img3 from "../../assets/img/imagen3.jpg"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
