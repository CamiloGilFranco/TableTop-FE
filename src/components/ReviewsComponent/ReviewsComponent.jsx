import "./ReviewsComponent.css";
import SingleReviewComponent from "./SingleReviewComponent.jsx";

const ReviewsComponent = () => {
  return (
    <div className="reviews-component-container">
      <SingleReviewComponent />
      <SingleReviewComponent />
      <SingleReviewComponent />
    </div>
  );
};

export default ReviewsComponent;
