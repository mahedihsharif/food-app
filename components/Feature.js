import styles from "../styles/Feature.module.css";
import { Carousel } from "react-bootstrap";
const Feature = () => {
  return (
    <>
      <div className={styles.container}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/featured.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/featured2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/featured3.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Feature;
