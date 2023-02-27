import restaurant1 from "./assets/restaurante1.jpg";
import restaurant2 from "./assets/restaurante2.jpg";
import restaurant3 from "./assets/restaurante3.jpg";
import restaurant4 from "./assets/restaurante4.jpg";
import restaurant5 from "./assets/restaurante5.jpg";
import restaurant6 from "./assets/restaurante6.jpg";
import restaurant7 from "./assets/restaurante7.jpg";
import restaurant8 from "./assets/restaurante8.jpg";
import restaurant9 from "./assets/restaurante9.jpg";
import restaurant10 from "./assets/restaurante10.jpg";
import restaurant11 from "./assets/restaurante11.jpg";
import restaurant12 from "./assets/restaurante12.jpg";
import previous from "./assets/previous.svg";
import next from "./assets/next.svg";
import "./RestaurantList.css";

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      <header className="restaurant-list-header">
        <div className="restaurant-list-buttons">
          <p className="restaurant-list-buttons-text restaurant-list-buttons-text-selected">
            All
          </p>
          <p className="restaurant-list-buttons-text">Popular</p>
          <p className="restaurant-list-buttons-text">Latest</p>
          <p className="restaurant-list-buttons-text">Trend</p>
        </div>
      </header>
      <main className="restaurant-list-main">
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant1}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant2}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant3}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant4}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant5}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant6}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant7}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant8}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant9}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant10}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant11}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="restaurant-list-card">
          <div className="restaurant-list-card-image-container">
            <img
              src={restaurant12}
              alt=""
              className="restaurant-list-card-image"
            />
          </div>
          <figcaption className="restaurant-list-card-info">
            <div className="restaurant-list-card-info-first-line">
              <span className="restaurant-list-card-title">Italian Restro</span>
              <span className="restaurant-list-card-rating">4.5 ⭐</span>
            </div>
            <ul className="restaurant-list-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
      </main>
      <footer className="restaurant-list-footer">
        <div className="restaurant-list-footer-page-button">
          <img
            src={previous}
            alt=""
            className="restaurant-list-footer-button-icon"
          />
        </div>
        <div className="restaurant-list-footer-page-button restaurant-list-footer-page-button-selected">
          <span className="restaurant-list-footer-page-button-text">1</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <span className="restaurant-list-footer-page-button-text">2</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <span className="restaurant-list-footer-page-button-text">3</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <img
            src={next}
            alt=""
            className="restaurant-list-footer-button-icon"
          />
        </div>
      </footer>
    </div>
  );
};

export default RestaurantList;
