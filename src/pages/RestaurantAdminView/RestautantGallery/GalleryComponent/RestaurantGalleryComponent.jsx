import "./RestaurantGalleryComponent.css";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";

const RestaurantGalleryComponent = ({
  photos,
  setCarousel,
  setPictureNumber,
  handleDeletePhoto,
}) => {
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
          <div key={index} className="gallery-component-photo-wrapper">
            <img
              src={element.photo_link}
              alt=""
              id={element.id_restaurant_photo}
              className="gallery-component-prev-photo"
              onClick={() => {
                setCarousel(true);
                setPictureNumber(index);
              }}
            />
            <button
              className="gallery-component-delete-button"
              onClick={handleDeletePhoto}
            >
              <AiFillDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantGalleryComponent;
