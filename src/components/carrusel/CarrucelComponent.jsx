import "./CarrucelComponent.css";
import foodTypes from "../../assets/cuisines.json";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const CarrucelComponent = () => {
  const [numVisibleSlides, setNumVisibleSlides] = useState(6);
  const data = foodTypes;
  const keys = Object.keys(data);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setNumVisibleSlides(5);
      } else if (window.innerWidth >= 1000) {
        setNumVisibleSlides(4);
      } else if (window.innerWidth >= 850) {
        setNumVisibleSlides(3);
      } else if (window.innerWidth >= 525) {
        setNumVisibleSlides(2);
      } else {
        setNumVisibleSlides(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: numVisibleSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <main className="home-carousel-component">
      <section className="home-carousel-container">
        <Slider {...settings} className="home-carousel-main">
          {keys.map((element) => {
            return (
              <div className="home-carousel-single-item">
                <div className="home-carousel-single-item-image-container">
                  <img
                    src={data[element]}
                    alt=""
                    className="home-carousel-single-item-image"
                  ></img>
                </div>
                <h3 className="home-carousel-single-item-title">{element}</h3>
                <p className="home-carousel-single-item-quantity">
                  23 Restaurants
                </p>
              </div>
            );
          })}
        </Slider>
      </section>
    </main>
  );
};

export { CarrucelComponent };
