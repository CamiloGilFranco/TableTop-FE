import "./RestaurantView.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent.jsx";
import RestaurantInfoBanner from "../../components/RestaurantInfoBanner/RestaurantInfoBanner";
import RestauranOptions from "../../components/RestaurantOptions/RestauranOptions";
import OrderOnline from "../../components/OrderOnline/OrderOnline";
import Overview from "../../components/Overview/Overview";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";
import LocationComponent from "../../components/LocationComponent/LocationComponent";
import ReserveForm from "../../components/ReserveForm/ReserveForm";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent";
import Footer from "../../components/Footer/Footer";
import CartItem from "../../components/CartItem/CartItem";
import ControlledCarousel from "../../components/GalleryComponent/GalleryCarouselComponent";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PopularRestaurant from "../../components/6 Popular Restaurant/PopularRestaurant";

const RestaurantView = () => {
  const [selected, setSelected] = useState("ORDER ONLINE");
  const [carousel, setCarousel] = useState(false);
  const [pictureNumber, setPictureNumber] = useState(null);
  const [restaurantData, setRestaurantData] = useState({});
  const params = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/restaurants/path/${params.restaurantPath}`)
      .then((res) => {
        setRestaurantData(res.data.data);
      })
      .catch(() => {
        navigate("/something-went-wrong");
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

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

  const handleNewReview = (newReviewData) => {
    setRestaurantData({
      ...restaurantData,
      reviews: [
        ...restaurantData.reviews,
        {
          rating: parseInt(newReviewData.stars),
          title: newReviewData.title,
          description: newReviewData.comments,
        },
      ],
    });
  };

  const showComponent = () => {
    switch (selected) {
      case "ORDER ONLINE":
        return <OrderOnline menu={restaurantData.dishes_categories} />;
      case "OVERVIEW":
        return <Overview venues={restaurantData.venues} />;
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
          <LocationComponent restaurantName={restaurantData.restaurant_name} />
        );
      case "BOOK A TABLE":
        return <ReserveForm />;
      case "REVIEWS":
        return (
          <ReviewsComponent
            reviews={restaurantData.reviews}
            handleNewReview={handleNewReview}
          />
        );
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
          restaurantName={restaurantData.restaurant_name}
          rating={restaurantData.rating}
          categories={restaurantData.cuisines}
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
        </div>
        <div className="restaurant-view-lateral-column-container">
          <CartItem />
        </div>
      </div>
      <div className="restaurant-view-body-recommended-places">
        <PopularRestaurant />
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
