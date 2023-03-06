import "./RestaurantInfoBanner.css";

const RestaurantInfoBanner = ({ logo, restaurantName, rating, categories }) => {
  return (
    <article className="restaurantInfoBanner__container">
      <picture>
        <img
          src={logo}
          alt="restaurant logo"
          className="restaurantInfoBanner__logo"
        />
      </picture>
      <section className="restaurantInfoBanner__text">
        <h3>{restaurantName}</h3>
        <span>
          {categories.map((element) => ` ${element} |`)} Rating: {rating}
        </span>
      </section>
    </article>
  );
};
export default RestaurantInfoBanner;
