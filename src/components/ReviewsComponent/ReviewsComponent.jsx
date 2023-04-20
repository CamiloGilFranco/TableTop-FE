import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ReviewsComponent.css";
import SingleReviewComponent from "./SingleReviewComponent.jsx";
import star1 from "./assets/star1.png";
import star2 from "./assets/star2.png";
import star3 from "./assets/star3.png";
import star4 from "./assets/star4.png";
import star5 from "./assets/star5.png";
import languageSelector from "../../assets/languages/languageSelector";

const ReviewsComponent = ({ reviews, handleNewReview }) => {
  const language = useSelector(state => state.languageReducer);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    if (reviews) {
      setReviewsList(reviews);
    }
  }, [reviews]);

  const [newReview, setNewReview] = useState({
    stars: "",
    title: "",
    comments: "",
  });

  const [starsError, setStarsError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [commentsError, setCommentsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isOk = true;

    if (!newReview.stars) {
      setStarsError(true);
      isOk = false;
    } else {
      setStarsError(false);
    }

    if (!newReview.title) {
      setTitleError(true);
      isOk = false;
    } else {
      setTitleError(false);
    }

    if (!newReview.comments || newReview.title.length > 255) {
      setCommentsError(true);
      isOk = false;
    } else {
      setCommentsError(false);
    }

    if (isOk) {
      handleNewReview(newReview);

      setNewReview({
        stars: "",
        title: "",
        comments: "",
      });
    }
  };

  return (
    <div className="reviews-component-container">
      {reviewsList.map((element, index) => {
        const createdAtText = new Date(element.createdAt);
        return (
          <SingleReviewComponent
            key={index}
            rating={element.rating}
            title={element.title}
            date={createdAtText.toDateString()}
            description={element.comment}
          />
        );
      })}
      <span className="reviews-component-new-review-title">
        {languageSelector(language, 'reviewsTitle')}
      </span>
      <form className="reviews-component-new-review">
        <div className="reviews-component-new-review-stars-container">
          <span className="reviews-component-new-review-label reviews-component-new-review-label-rating">
          {languageSelector(language, 'rating')}:
          </span>
          <label
            htmlFor="radio-star-1"
            className={`reviews-component-new-review-star-button ${
              newReview.stars === "1"
                ? "reviews-component-new-review-star-button-active"
                : ""
            }`}
          >
            <img
              src={star1}
              alt=""
              className="reviews-component-new-review-star-img"
            />
          </label>
          <input
            type="radio"
            id="radio-star-1"
            name="radio-star"
            value={1}
            checked={newReview.stars === "1"}
            className="star-radio-input"
            onChange={(event) =>
              setNewReview({ ...newReview, stars: event.target.value })
            }
          />
          <label
            htmlFor="radio-star-2"
            className={`reviews-component-new-review-star-button ${
              newReview.stars === "2"
                ? "reviews-component-new-review-star-button-active"
                : ""
            }`}
          >
            <img
              src={star2}
              alt=""
              className="reviews-component-new-review-star-img"
            />
          </label>
          <input
            type="radio"
            id="radio-star-2"
            name="radio-star"
            value={2}
            checked={newReview.stars === "2"}
            className="star-radio-input"
            onChange={(event) =>
              setNewReview({ ...newReview, stars: event.target.value })
            }
          />
          <label
            htmlFor="radio-star-3"
            className={`reviews-component-new-review-star-button ${
              newReview.stars === "3"
                ? "reviews-component-new-review-star-button-active"
                : ""
            }`}
          >
            <img
              src={star3}
              alt=""
              className="reviews-component-new-review-star-img"
            />
          </label>
          <input
            type="radio"
            id="radio-star-3"
            name="radio-star"
            value={3}
            checked={newReview.stars === "3"}
            className="star-radio-input"
            onChange={(event) =>
              setNewReview({ ...newReview, stars: event.target.value })
            }
          />
          <label
            htmlFor="radio-star-4"
            className={`reviews-component-new-review-star-button ${
              newReview.stars === "4"
                ? "reviews-component-new-review-star-button-active"
                : ""
            }`}
          >
            <img
              src={star4}
              alt=""
              className="reviews-component-new-review-star-img"
            />
          </label>
          <input
            type="radio"
            id="radio-star-4"
            name="radio-star"
            value={4}
            checked={newReview.stars === "4"}
            className="star-radio-input"
            onChange={(event) =>
              setNewReview({ ...newReview, stars: event.target.value })
            }
          />
          <label
            htmlFor="radio-star-5"
            className={`reviews-component-new-review-star-button ${
              newReview.stars === "5"
                ? "reviews-component-new-review-star-button-active"
                : ""
            }`}
          >
            <img
              src={star5}
              alt=""
              className="reviews-component-new-review-star-img"
            />
          </label>
          <input
            type="radio"
            id="radio-star-5"
            name="radio-star"
            value={5}
            checked={newReview.stars === "5"}
            className="star-radio-input"
            onChange={(event) =>
              setNewReview({ ...newReview, stars: event.target.value })
            }
          />
        </div>
        <span className="reviews-component-new-review-error-message">
          {starsError ? languageSelector(language, 'reviewStarsError') : ""}
        </span>
        <label htmlFor="" className="reviews-component-new-review-label">
          {languageSelector(language, 'reviewFormTitle')}:
        </label>
        <input
          type="text"
          value={newReview.title}
          placeholder={languageSelector(language, 'reviewFormTitle')}
          className="reviews-component-new-review-title-input"
          onChange={(event) =>
            setNewReview({ ...newReview, title: event.target.value })
          }
        />
        <span className="reviews-component-new-review-error-message">
          {titleError
            ? languageSelector(language, 'reviewsTitleError')
            : ""}
        </span>
        <label htmlFor="" className="reviews-component-new-review-label">
          {languageSelector(language, 'reviewFormComments')}:
        </label>
        <textarea
          value={newReview.comments}
          placeholder={`${languageSelector(language, 'reviewFormComments')}...`}
          className="reviews-component-new-review-comments-textarea"
          rows={5}
          resize="none"
          onChange={(event) =>
            setNewReview({ ...newReview, comments: event.target.value })
          }
        />
        <span className="reviews-component-new-review-error-message">
          {commentsError
            ? languageSelector(language, 'commentsError')
            : ""}
        </span>
        <input
          type="submit"
          className="reviews-component-new-review-submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default ReviewsComponent;
