import "./Recommended.css";
import restaurant1 from "./assets/restaurante1.jpg";
import restaurant2 from "./assets/restaurante2.jpg";
import restaurant3 from "./assets/restaurante3.jpg";

const Recommended = () => {
  return (
    <div className="restaurant-view-recommended">
      <div className="restaurant-view-recommended-header">
        <span className="restaurant-view-recommended-title">Recommended</span>
      </div>
      <div className="restaurant-view-recommended-cards-container">
        <figure className="restaurant-view-recommended-card">
          <div className="restaurant-view-recommended-card-image-container">
            <img
              src={restaurant1}
              alt=""
              className="restaurant-view-recommended-card-image"
            />
          </div>
          <figcaption className="restaurant-view-recommended-card-info">
            <div className="restaurant-view-recommended-card-info-first-line">
              <span className="restaurant-view-recommended-card-title">
                Italian Restro
              </span>
              <span className="restaurant-view-recommended-card-rating">
                4.5 ⭐
              </span>
            </div>
            <div className="restaurant-view-recommended-card-info-list">
              <p>- Fast Food, Cafe, Italian</p>
              <p>- 11:30am - 11:30pm</p>
              <p>- (Mon-Sun)</p>
              <p>- Cost $25 For Two</p>
            </div>
          </figcaption>
        </figure>
        <figure className="restaurant-view-recommended-card">
          <div className="restaurant-view-recommended-card-image-container">
            <img
              src={restaurant2}
              alt=""
              className="restaurant-view-recommended-card-image"
            />
          </div>
          <figcaption className="restaurant-view-recommended-card-info">
            <div className="restaurant-view-recommended-card-info-first-line">
              <span className="restaurant-view-recommended-card-title">
                Italian Restro
              </span>
              <span className="restaurant-view-recommended-card-rating">
                4.5 ⭐
              </span>
            </div>
            <div className="restaurant-view-recommended-card-info-list">
              <p>- Fast Food, Cafe, Italian</p>
              <p>- 11:30am - 11:30pm</p>
              <p>- (Mon-Sun)</p>
              <p>- Cost $25 For Two</p>
            </div>
          </figcaption>
        </figure>
        <figure className="restaurant-view-recommended-card">
          <div className="restaurant-view-recommended-card-image-container">
            <img
              src={restaurant3}
              alt=""
              className="restaurant-view-recommended-card-image"
            />
          </div>
          <figcaption className="restaurant-view-recommended-card-info">
            <div className="restaurant-view-recommended-card-info-first-line">
              <span className="restaurant-view-recommended-card-title">
                Italian Restro
              </span>
              <span className="restaurant-view-recommended-card-rating">
                4.5 ⭐
              </span>
            </div>
            <div className="restaurant-view-recommended-card-info-list">
              <p>- Fast Food, Cafe, Italian</p>
              <p>- 11:30am - 11:30pm</p>
              <p>- (Mon-Sun)</p>
              <p>- Cost $25 For Two</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Recommended;
