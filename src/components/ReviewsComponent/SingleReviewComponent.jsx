import { useSelector } from 'react-redux';

import emptyStar from "./assets/star-svgrepo-com.svg";
import fillStar from "./assets/star-fill-svgrepo-com.svg";
import languageSelector from '../../assets/languages/languageSelector';

const SingleReviewComponent = ({
  rating,
  title,
  author,
  date,
  description,
}) => {
  const language = useSelector(state=> state.languageReducer);
  const stars = (rating) => {
    const starsArray = [];
    const starEmpty = <img src={emptyStar} alt="" className="star-icon" />;
    const starFill = <img src={fillStar} alt="" className="star-icon" />;

    for (let i = 0; i < rating; i++) {
      starsArray.push(starFill);
    }

    for (let i = 0; i < 5 - rating; i++) {
      starsArray.push(starEmpty);
    }

    return starsArray.map((element) => element);
  };

  return (
    <div className="single-review-component">
      <span className="single-review-component-main-message">
        {stars(rating)} {title}
      </span>
      <span className="single-review-component-user-data">
        {languageSelector(language, 'reviewBy')} {author}, {date}
      </span>
      <span className="single-review-component-paragraph">{description}</span>
    </div>
  );
};

export default SingleReviewComponent;
