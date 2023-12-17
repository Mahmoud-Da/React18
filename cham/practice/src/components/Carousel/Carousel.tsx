import styles from "./Carousel.module.css";
import autumn from "../../assets/autumn.jpg";
import spring from "../../assets/spring.jpg";
import summer from "../../assets/summer.jpg";
import winter from "../../assets/winter.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="carousel-item ">
          <img src={spring} className={styles.imgSize} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={summer} className={styles.imgSize} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={autumn} className={styles.imgSize} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={winter} className={styles.imgSize} alt="..." />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
