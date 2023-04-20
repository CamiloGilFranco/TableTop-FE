import { useState } from "react";
import "./Overview.css";
import VenuesModal from "./VenuesModal";

const Overview = ({ venues }) => {
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  const handleClick = (info) => {
    setShowModal(true);
    setInfoModal(info);
  };

  return (
    <div className="venues-component">
      {venues &&
        venues.map((venue) => {
          return (
            <div
              className="venues-component-card"
              key={venue.id_restaurant_venue}
              onClick={() => handleClick(venue)}
            >
              <div className="venues-component-card-image-container">
                <img
                  src={venue.venue_photo}
                  alt=""
                  className="venues-component-card-image"
                />
              </div>
              <p className="venues-component-card-title">{venue.name_venue}</p>
              <p className="venues-component-card-city">{venue.city}</p>
            </div>
          );
        })}
      {showModal ? (
        <VenuesModal setShowModal={setShowModal} infoModal={infoModal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Overview;
