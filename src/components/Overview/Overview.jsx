import "./Overview.css";

const Overview = ({
  phoneNumber,
  categories,
  schedule,
  address,
  facilities,
}) => {
  return (
    <div className="restaurant-view-overview">
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          Phone Number:
        </span>
        <ul className="restaurant-view-overview-category-items">
          {phoneNumber.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">Cuisine</span>
        <ul className="restaurant-view-overview-category-items">
          {categories.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          Opening Hours
        </span>
        <ul className="restaurant-view-overview-category-items">
          {schedule.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">Address</span>
        <ul className="restaurant-view-overview-category-items">
          {address.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          Facility
        </span>
        <ul className="restaurant-view-overview-category-items">
          {facilities.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
