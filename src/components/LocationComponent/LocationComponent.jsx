import "./LocationComponent.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const LocationComponent = () => {
  const libraries = ["places"];

  const [center, setCenter] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "TU_CLAVE_API",
    libraries,
  });

  useEffect(() => {
    /*     const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { address: "Tu dirección o lugar de interés" },
      (results, status) => {
        if (status === "OK") {
          setCenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        }
      }
    ); */
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  if (loadError) return "Error al cargar el mapa";
  if (!isLoaded) return "Cargando mapa...";

  return (
    <div className="restaurant-view-location-map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default LocationComponent;

//token:AIzaSyAtNfgwaRlQyx9i8Jnoa3pBbtF8U7hBWEI
