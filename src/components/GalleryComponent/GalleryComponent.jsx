import "./GalleryComponent.css";

const GalleryComponent = ({ photos, setCarousel, setPictureNumber }) => {
  return (
    <div className="gallery-component-container">
      {photos.map((element, index) => {
        return (
          <img
            src={element}
            alt=""
            key={index}
            id={index}
            className="gallery-component-prev-photo"
            onClick={(event) => {
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
