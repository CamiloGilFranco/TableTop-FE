import { useState } from "react";
import "./ReviewsComponent.css";
import SingleReviewComponent from "./SingleReviewComponent.jsx";
import star1 from "./assets/star1.png";
import star2 from "./assets/star2.png";
import star3 from "./assets/star3.png";
import star4 from "./assets/star4.png";
import star5 from "./assets/star5.png";

const ReviewsComponent = ({ reviews }) => {
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
      console.log("comentario enviado");
      setNewReview({
        stars: "",
        title: "",
        comments: "",
      });
    }
  };

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
      <span className="reviews-component-new-review-title">
        Déjanos tus opinion
      </span>
      <form className="reviews-component-new-review">
        <div className="reviews-component-new-review-stars-container">
          <span className="reviews-component-new-review-label reviews-component-new-review-label-rating">
            Calificación:
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
          {starsError ? "* Debes dar una calificación" : ""}
        </span>
        <label htmlFor="" className="reviews-component-new-review-label">
          Titulo:
        </label>
        <input
          type="text"
          value={newReview.title}
          placeholder="Titulo"
          className="reviews-component-new-review-title-input"
          onChange={(event) =>
            setNewReview({ ...newReview, title: event.target.value })
          }
        />
        <span className="reviews-component-new-review-error-message">
          {titleError
            ? "* Debes escribir un titulo y este no puede tener mas de 40 caracteres"
            : ""}
        </span>
        <label htmlFor="" className="reviews-component-new-review-label">
          Comentarios:
        </label>
        <textarea
          value={newReview.comments}
          placeholder="Comentarios..."
          className="reviews-component-new-review-comments-textarea"
          rows={5}
          resize="none"
          onChange={(event) =>
            setNewReview({ ...newReview, comments: event.target.value })
          }
        />
        <span className="reviews-component-new-review-error-message">
          {commentsError
            ? "* Debes escribir tus comentarios y estos no pueden tener mas de 255 caracteres"
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
