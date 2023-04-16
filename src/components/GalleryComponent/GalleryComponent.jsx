import "./GalleryComponent.css";
import { useState, useEffect } from "react";

const GalleryComponent = ({ photos, setCarousel, setPictureNumber }) => {
  const [photosList, setPhotosList] = useState([]);

  useEffect(() => {
    if (photos) {
      setPhotosList(photos);
    }
  }, [photos]);

  return (
    <div className="gallery-component-container">
      {photosList.map((element, index) => {
        return (
          <img
            key={index}
            src={element.photo_link}
            alt=""
            id={element.id_restaurant_photo}
            className="gallery-component-prev-photo"
            onClick={() => {
              setCarousel(true);
              setPictureNumber(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default GalleryComponent;
