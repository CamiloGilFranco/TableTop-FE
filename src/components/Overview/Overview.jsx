import "./Overview.css";

const Overview = ({ hiddenOverview }) => {
  return (
    <div className={`restaurant-view-overview ${hiddenOverview}`}>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          Phone Number: 1234567890
        </span>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">Cuisine</span>
        <ul className="restaurant-view-overview-category-items">
          <li>Fast Food</li>
          <li>Café</li>
          <li>Italian</li>
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          Opening Hours
        </span>
        <ul className="restaurant-view-overview-category-items">
          <li>Monday To Friday: 11:00AM To 11:00PM</li>
          <li>Saturday & Sunday: 10:00 To 12:00PM</li>
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">Address</span>
        <ul className="restaurant-view-overview-category-items">
          <li>Fake-St 123</li>
          <li>real-St 321</li>
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          Facility
        </span>
        <ul className="restaurant-view-overview-category-items">
          <li>card Accepted</li>
          <li>Parking Available</li>
          <li>Banquet Area</li>
          <li>Home Delivery</li>
          <li>Table Booking</li>
          <li>Available For Events</li>
          <li>Game Zone</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
