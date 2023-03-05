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
import CartItem from "../../components/CartItem/CartItem";
import AlwaysFirstComponent from "../../components/AlwaysFirstComponent/AlwaysFirstComponent";
import { useState } from "react";

const RestaurantView = () => {
  const [selected, setSelected] = useState("ORDER ONLINE");

  const classOrderOnline =
    selected === "ORDER ONLINE" ? "restaurant-options-option-selected" : "";
  const classOverview =
    selected === "OVERVIEW" ? "restaurant-options-option-selected" : "";
  const classGallery =
    selected === "GALLERY" ? "restaurant-options-option-selected" : "";
  const classLocation =
    selected === "LOCATION" ? "restaurant-options-option-selected" : "";
  const classBookATable =
    selected === "BOOK A TABLE" ? "restaurant-options-option-selected" : "";
  const classReviews =
    selected === "REVIEWS" ? "restaurant-options-option-selected" : "";

  const hiddenOrderOnline =
    selected !== "ORDER ONLINE" ? "restaurant-view-hidden-component" : "";
  const hiddenOverview =
    selected !== "OVERVIEW" ? "restaurant-view-hidden-component" : "";
  const hiddenGallery =
    selected !== "GALLERY" ? "restaurant-view-hidden-component" : "";
  const hiddenLocation =
    selected !== "LOCATION" ? "restaurant-view-hidden-component" : "";
  const hiddenBookATable =
    selected !== "BOOK A TABLE" ? "restaurant-view-hidden-component" : "";
  const hiddenReviews =
    selected !== "REVIEWS" ? "restaurant-view-hidden-component" : "";

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
            <RestauranOptions
              setSelected={setSelected}
              selected={selected}
              classOrderOnline={classOrderOnline}
              classOverview={classOverview}
              classGallery={classGallery}
              classLocation={classLocation}
              classBookATable={classBookATable}
              classReviews={classReviews}
            />
          </div>
          <div className="restaurant-view-body-main-content">
            <OrderOnline hiddenOrderOnline={hiddenOrderOnline} />
            <Overview hiddenOverview={hiddenOverview} />
            <GalleryComponent hiddenGallery={hiddenGallery} />
            <LocationComponent hiddenLocation={hiddenLocation} />
            <ReserveForm hiddenBookATable={hiddenBookATable} />
            <ReviewsComponent hiddenReviews={hiddenReviews} />
          </div>
          <div className="restaurant-view-body-recommended-places">
            {/* <Recommended /> */}
          </div>
        </div>
        <div className="restaurant-view-lateral-column-container">
          <CartItem />
          <AlwaysFirstComponent />
        </div>
      </div>
      <div className="restaurant-view-footer">
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantView;
