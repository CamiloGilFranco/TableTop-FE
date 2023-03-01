import "./GalleryComponent.css";
const GalleryComponent = ({ hiddenGallery }) => {
  return <div className={`gallery-component-container ${hiddenGallery}`}></div>;
};

export default GalleryComponent;
