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
import ControlledCarousel from "../../components/GalleryComponent/GalleryCarouselComponent";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import db from "../../assets/dat.json";

const RestaurantView = () => {
  const [selected, setSelected] = useState("ORDER ONLINE");
  const [carousel, setCarousel] = useState(false);
  const [pictureNumber, setPictureNumber] = useState(null);
  const params = useParams();

  const data = db;

  let pathname = useLocation().pathname;
  pathname = pathname.replace("/restaurants/", "");

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const restaurantData = data.find(
    (element) => params.restaurantPath === element.restaurantPath
  );

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

  const showComponent = () => {
    switch (selected) {
      case "ORDER ONLINE":
        return <OrderOnline menu={restaurantData.menu} />;
      case "OVERVIEW":
        return (
          <Overview
            phoneNumber={restaurantData.phoneNumber}
            categories={restaurantData.categories}
            schedule={restaurantData.schedule}
            address={restaurantData.address}
            facilities={restaurantData.facilities}
          />
        );
      case "GALLERY":
        return (
          <GalleryComponent
            photos={restaurantData.photos}
            setCarousel={setCarousel}
            setPictureNumber={setPictureNumber}
          />
        );
      case "LOCATION":
        return (
          <LocationComponent restaurantName={restaurantData.restaurantName} />
        );
      case "BOOK A TABLE":
        return <ReserveForm />;
      case "REVIEWS":
        return <ReviewsComponent reviews={restaurantData.reviews} />;
      default:
        break;
    }
  };

  return (
    <div className="restaurant-view">
      <div className="restaurant-view-header-component">
        <HeaderComponent />
      </div>
      <div className="restaurant-view-restaurant-info-banner">
        <RestaurantInfoBanner
          logo={restaurantData.logo}
          restaurantName={restaurantData.restaurantName}
          rating={restaurantData.rating}
          categories={restaurantData.categories}
        />
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
            {showComponent()}
          </div>
          <div className="restaurant-view-body-recommended-places">
            <Recommended />
          </div>
        </div>
        <div className="restaurant-view-lateral-column-container">
          <CartItem />
        </div>
      </div>
      <div className="restaurant-view-footer">
        <Footer />
      </div>
      {carousel ? (
        <div className="restaurant-view-carousel">
          <div
            className="restaurant-view-carousel-background"
            onClick={() => setCarousel(false)}
          ></div>
          <ControlledCarousel
            photos={restaurantData.photos}
            pictureNumber={pictureNumber}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantView;
