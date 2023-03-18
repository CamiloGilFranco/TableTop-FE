import { useDispatch } from "react-redux";
import { CartIncrementAction } from "../../store/actions/cart.action.js";
const IndividualDish = ({ title, description, price }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(CartIncrementAction(title, price));
  };
  return (
    <div className="restaurant-view-individual-dish">
      <div className="restaurant-view-individual-dish-main-line">
        <span className="restaurant-view-individual-dish-main-line-title">
          {title}
        </span>
        <button
          className="restaurant-view-individual-dish-main-line-button"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      <p className="restaurant-view-individual-dish-description">
        {description}
      </p>
      <span className="restaurant-view-individual-dish-price">${price}</span>
    </div>
  );
};

export default IndividualDish;
