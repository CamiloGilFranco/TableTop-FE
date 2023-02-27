import React from "react";
import "./PopularRestaurant.css";
import restaurant1 from "./assets/restaurante1.jpg";
import restaurant2 from "./assets/restaurante2.jpg";
import restaurant3 from "./assets/restaurante3.jpg";
import restaurant4 from "./assets/restaurante4.jpg";
import restaurant5 from "./assets/restaurante5.jpg";
import restaurant6 from "./assets/restaurante6.jpg";
import restaurant7 from "./assets/restaurante7.jpg";
import restaurant8 from "./assets/restaurante8.jpg";

const PopularRestaurant = () => {
  return (
    <div className="popular-restaurant">
      <header className="popular-restaurant-header">
        <span className="popular-restaurant-title">Popular Restaurant</span>
        <div className="popular-restaurants-buttons">
          <p className="popular-restaurants-buttons-text popular-restaurants-buttons-text-selected">
            All
          </p>
          <p className="popular-restaurants-buttons-text">Popular</p>
          <p className="popular-restaurants-buttons-text">Latest</p>
          <p className="popular-restaurants-buttons-text">Trend</p>
        </div>
      </header>
      <main className="popular-restaurant-main">
        <figure className="popular-restaurant-card">
          <div className="popular-restaurant-card-image-container">
            <img
              src={restaurant1}
              alt=""
              className="popular-restaurant-card-image"
            />
          </div>
          <figcaption className="popular-restaurant-card-info">
            <div className="popular-restaurant-card-info-first-line">
              <span className="popular-restaurant-card-title">
                Italian Restro
              </span>
              <span className="popular-restaurant-card-rating">4.5 ⭐</span>
            </div>
            <ul className="popular-restaurant-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="popular-restaurant-card">
          <div className="popular-restaurant-card-image-container">
            <img
              src={restaurant2}
              alt=""
              className="popular-restaurant-card-image"
            />
          </div>
          <figcaption className="popular-restaurant-card-info">
            <div className="popular-restaurant-card-info-first-line">
              <span className="popular-restaurant-card-title">
                Italian Restro
              </span>
              <span className="popular-restaurant-card-rating">4.5 ⭐</span>
            </div>
            <ul className="popular-restaurant-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="popular-restaurant-card">
          <div className="popular-restaurant-card-image-container">
            <img
              src={restaurant3}
              alt=""
              className="popular-restaurant-card-image"
            />
          </div>
          <figcaption className="popular-restaurant-card-info">
            <div className="popular-restaurant-card-info-first-line">
              <span className="popular-restaurant-card-title">
                Italian Restro
              </span>
              <span className="popular-restaurant-card-rating">4.5 ⭐</span>
            </div>
            <ul className="popular-restaurant-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="popular-restaurant-card">
          <div className="popular-restaurant-card-image-container">
            <img
              src={restaurant4}
              alt=""
              className="popular-restaurant-card-image"
            />
          </div>
          <figcaption className="popular-restaurant-card-info">
            <div className="popular-restaurant-card-info-first-line">
              <span className="popular-restaurant-card-title">
                Italian Restro
              </span>
              <span className="popular-restaurant-card-rating">4.5 ⭐</span>
            </div>
            <ul className="popular-restaurant-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="popular-restaurant-card">
          <div className="popular-restaurant-card-image-container">
            <img
              src={restaurant5}
              alt=""
              className="popular-restaurant-card-image"
            />
          </div>
          <figcaption className="popular-restaurant-card-info">
            <div className="popular-restaurant-card-info-first-line">
              <span className="popular-restaurant-card-title">
                Italian Restro
              </span>
              <span className="popular-restaurant-card-rating">4.5 ⭐</span>
            </div>
            <ul className="popular-restaurant-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="popular-restaurant-card">
          <div className="popular-restaurant-card-image-container">
            <img
              src={restaurant6}
              alt=""
              className="popular-restaurant-card-image"
            />
          </div>
          <figcaption className="popular-restaurant-card-info">
            <div className="popular-restaurant-card-info-first-line">
              <span className="popular-restaurant-card-title">
                Italian Restro
              </span>
              <span className="popular-restaurant-card-rating">4.5 ⭐</span>
            </div>
            <ul className="popular-restaurant-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="popular-restaurant-card">
          <div className="popular-restaurant-card-image-container">
            <img
              src={restaurant7}
              alt=""
              className="popular-restaurant-card-image"
            />
          </div>
          <figcaption className="popular-restaurant-card-info">
            <div className="popular-restaurant-card-info-first-line">
              <span className="popular-restaurant-card-title">
                Italian Restro
              </span>
              <span className="popular-restaurant-card-rating">4.5 ⭐</span>
            </div>
            <ul className="popular-restaurant-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
        <figure className="popular-restaurant-card">
          <div className="popular-restaurant-card-image-container">
            <img
              src={restaurant8}
              alt=""
              className="popular-restaurant-card-image"
            />
          </div>
          <figcaption className="popular-restaurant-card-info">
            <div className="popular-restaurant-card-info-first-line">
              <span className="popular-restaurant-card-title">
                Italian Restro
              </span>
              <span className="popular-restaurant-card-rating">4.5 ⭐</span>
            </div>
            <ul className="popular-restaurant-card-info-list">
              <li>Fast Food, Cafe, Italian</li>
              <li>11:30am - 11:30pm (Mon-Sun)</li>
              <li>Cost $25 For Two</li>
            </ul>
          </figcaption>
        </figure>
      </main>
    </div>
  );
};

export default PopularRestaurant;
