import "./ReviewsComponent.css";
import SingleReviewComponent from "./SingleReviewComponent.jsx";

const ReviewsComponent = ({ reviews }) => {
  return (
    <div className="reviews-component-container">
      {reviews.map((element, index) => {
        return (
          <SingleReviewComponent
            key={index}
            rating={element.rating}
            title={element.title}
            author={element.author}
            date={element.date}
            description={element.description}
          />
        );
      })}
      {/* <SingleReviewComponent />
      <SingleReviewComponent />
      <SingleReviewComponent /> */}
    </div>
  );
};

export default ReviewsComponent;
