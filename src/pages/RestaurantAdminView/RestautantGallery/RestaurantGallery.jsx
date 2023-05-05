import React, { useState } from "react";
import "./RestaurantGallery.css";
import GalleryComponent from "../../../components/GalleryComponent/GalleryCarouselComponent";
import { AiOutlineFileAdd, AiFillDelete } from "react-icons/ai";
import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../../constants/apiUrl";

const RestaurantGallery = ({
  language,
  languageSelector,
  restaurant = {},
  onPhotoUpdate,
}) => {
  const [pictureNumber, setPictureNumber] = useState(0);
  const [adding, setAdding] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const { photos } = restaurant;
  const handleAddPhoto = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo_link", selectedFile);
      formData.append("restaurant_id", restaurant.id_restaurant);
      try {
        const response = await axios.post(
          `${API_URL}/photos-restaurant`,
          formData,
          config
        );

        if (response.status === 200 || response.status === 201) {
          toast.success(languageSelector(language, "restaurantPhotoAddSucces"));
          setSelectedFile(null);
          setAdding(false);
          onPhotoUpdate();
        } else {
          toast.error(languageSelector(language, "restaurantPhotoAddFailure"));
        }
      } catch (error) {
        toast.error(languageSelector(language, "restaurantPhotoAddFailure"));
      }
    } else {
      toast.error(languageSelector(language, "imageNotProvided"));
    }
  };

  const handleDeletePhoto = async () => {
    const photoToDelete = photos[pictureNumber];

    if (
      photoToDelete &&
      window.confirm(languageSelector(language, "deletePhotoWarning"))
    ) {
      try {
        const response = await axios.delete(
          `${API_URL}/photos-restaurant/${photoToDelete.id_restaurant_photo}`,
          config
        );
        if (response.status === 200 || response.status === 204) {
          toast.success(
            languageSelector(language, "restaurantPhotoDeleteSuccess")
          );
          onPhotoUpdate();
          setAdding(false);
          onPhotoUpdate();
        } else {
          toast.error(
            languageSelector(language, "restaurantPhotoDeleteFailure")
          );
        }
      } catch (error) {
        toast.error(languageSelector(language, "restaurantPhotoDeleteFailure"));
      }
    }
  };

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <div className="restaurant-gallery">
        <div className="gallery-header">
          <h2>{languageSelector(language, "restaurantGalleryTitle")}</h2>
          <div className="gallery-header-icons">
            <button onClick={() => setAdding(true)}>
              <AiOutlineFileAdd />
            </button>
            <button onClick={handleDeletePhoto}>
              <AiFillDelete />
            </button>
          </div>
        </div>
        <p>{languageSelector(language, 'restaurantPhotosText')}</p>
        {adding ? (
          <div className="gallery-form">
            <form>
              <label htmlFor="photo">
                {languageSelector(language, "restaurantGalleryAddPhoto")}:
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={handleFileInputChange}
              />
              <button type="submit" onClick={handleAddPhoto}>
                {languageSelector(language, "restaurantGalleryAddButton")}
              </button>
              <button type="button" onClick={() => setAdding(false)}>
                {languageSelector(language, "restaurantGalleryAddCancel")}
              </button>
            </form>
          </div>
        ) : (
          <GalleryComponent
            photos={photos}
            setPictureNumber={setPictureNumber}
          />
        )}
      </div>
    </>
  );
};

export default RestaurantGallery;
