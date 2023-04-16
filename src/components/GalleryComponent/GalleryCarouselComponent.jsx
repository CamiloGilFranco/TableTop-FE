import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ControlledCarousel = ({ photos, pictureNumber }) => {
  const [index, setIndex] = useState(pictureNumber);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="gallery-carouse-component-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {photos.map((element, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="gallery-carouse-component-container-container">
                <img
                  src={element.photo_link}
                  alt=""
                  className="gallery-carouse-component-container-image"
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;
