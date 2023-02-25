import "./Recommended.css";
import restaurant1 from "./assets/restaurante1.jpg";
import restaurant2 from "./assets/restaurante2.jpg";
import restaurant3 from "./assets/restaurante3.jpg";

const Recommended = () => {
  return (
    <div className="recommended">
      <div className="recommended-header">
        <span className="recommended-title">Recommended</span>
      </div>
      <div className="recommended-cards-container">
        <figure className="recommended-card">
          <div className="recommended-card-image-container">
            <img src={restaurant1} alt="" className="recommended-card-image" />
          </div>
          <figcaption className="recommended-card-info">
            <div className="recommended-card-info-first-line">
              <span className="recommended-card-title">Italian Restro</span>
              <span className="recommended-card-rating">4.5 ⭐</span>
            </div>
            <ul className="recommended-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="recommended-card">
          <div className="recommended-card-image-container">
            <img src={restaurant2} alt="" className="recommended-card-image" />
          </div>
          <figcaption className="recommended-card-info">
            <div className="recommended-card-info-first-line">
              <span className="recommended-card-title">Italian Restro</span>
              <span className="recommended-card-rating">4.5 ⭐</span>
            </div>
            <ul className="recommended-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="recommended-card">
          <div className="recommended-card-image-container">
            <img src={restaurant3} alt="" className="recommended-card-image" />
          </div>
          <figcaption className="recommended-card-info">
            <div className="recommended-card-info-first-line">
              <span className="recommended-card-title">Italian Restro</span>
              <span className="recommended-card-rating">4.5 ⭐</span>
            </div>
            <ul className="recommended-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Recommended;
