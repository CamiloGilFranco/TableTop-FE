import "./CarrucelComponent.css";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../../constants/apiUrl";
import routePaths from "../../constants/routePaths";

const CarrucelComponent = () => {
  const [numVisibleSlides, setNumVisibleSlides] = useState(6);
  const [cuisinesList, setCuisinesList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/cuisine-categories`)
      .then((res) => {
        setCuisinesList(res.data.data);
      })
      .catch((err) => {
<<<<<<< HEAD
        navigate("/something-went-wrong");
=======
        navigate(routePaths.somethingWentWrong);
        setCuisinesList([]);
>>>>>>> 247bd9f1c9d734fdeaf4a9efdf231b7ea29dac35
      });
  }, []);

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
<<<<<<< HEAD
          {!!cuisinesList &&
            cuisinesList.length > 0 &&
            cuisinesList.map((element, index) => {
              return (
                <div
                  key={index}
                  className="home-carousel-single-item"
                  onClick={() =>
                    navigate(`/restaurants?${element.cuisine_category}=true`)
                  }
                >
                  <div className="home-carousel-single-item-image-container">
                    <img
                      src={element.cuisine_photo}
                      alt=""
                      className="home-carousel-single-item-image"
                    ></img>
                  </div>
                  <h3 className="home-carousel-single-item-title">
                    {element.cuisine_category}
                  </h3>
                  <p className="home-carousel-single-item-quantity">
                    23 Restaurants
                  </p>
=======
          {cuisinesList.map((element, index) => {
            return (
              <div
                key={index}
                className="home-carousel-single-item"
                onClick={() =>
                  navigate(`${routePaths.restaurants}?${element.cuisine_category}=true`)
                }
              >
                <div className="home-carousel-single-item-image-container">
                  <img
                    src={element.cuisine_photo}
                    alt=""
                    className="home-carousel-single-item-image"
                  ></img>
>>>>>>> 247bd9f1c9d734fdeaf4a9efdf231b7ea29dac35
                </div>
              );
            })}
        </Slider>
      </section>
    </main>
  );
};

export { CarrucelComponent };
