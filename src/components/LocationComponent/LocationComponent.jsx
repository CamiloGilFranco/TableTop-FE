import "./LocationComponent.css";

const LocationComponent = ({ hiddenLocation }) => {
  return (
    <div className={`restaurant-view-location-map-container ${hiddenLocation}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39281029764!2d-74.24789188291706!3d4.648625933239766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1677628873787!5m2!1ses!2sco"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="restaurant-location-map"
        className="restaurant-view-location-map"
      />
    </div>
  );
};

export default LocationComponent;
