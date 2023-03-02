import "./ReviewsComponent.css";
import SingleReviewComponent from "./SingleReviewComponent.jsx";

const ReviewsComponent = ({ hiddenReviews }) => {
  return (
    <div className={`reviews-component-container ${hiddenReviews}`}>
      <SingleReviewComponent />
      <SingleReviewComponent />
      <SingleReviewComponent />
    </div>
  );
};

export default ReviewsComponent;
