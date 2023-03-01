import "./RestaurantView.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.jsx";
import RestaurantInfoBanner from "../../components/RestaurantInfoBanner/RestaurantInfoBanner";
import RestauranOptions from "../../components/RestaurantOptions/RestauranOptions";
import Recommended from "../../components/Recommended/Recommended";
import OrderOnline from "../../components/OrderOnline/OrderOnline";
import Overview from "../../components/Overview/Overview";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";
import LocationComponent from "../../components/LocationComponent/LocationComponent";
import ReserveForm from "../../components/ReserveForm/ReserveForm";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import Footer from "../../components/Footer/Footer";

const RestaurantView = () => {
  return (
    <div className="restaurant-view">
      <div className="restaurant-view-header-component">
        <HeaderComponent />
      </div>
      <div className="restaurant-view-restaurant-info-banner">
        <RestaurantInfoBanner />
      </div>
      <div className="restaurant-view-content-container">
        <div className="restaurant-view-body-container">
          <div className="restaurant-view-body-options-bar">
            <RestauranOptions />
          </div>
          <div className="restaurant-view-body-main-content">
            <OrderOnline />
            <Overview />
            <GalleryComponent />
            <LocationComponent />
            <ReserveForm />
            <ReviewsComponent />
          </div>
          <div className="restaurant-view-body-recommended-places">
            <Recommended />
          </div>
        </div>
        <div className="restaurant-view-lateral-column-container"></div>
      </div>
      <div className="restaurant-view-footer">
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantView;
