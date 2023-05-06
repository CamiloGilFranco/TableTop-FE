import { useDispatch } from "react-redux";
import {
  CartIncrementAction,
  addSubtotalAction,
} from "../../store/actions/cart.action.js";
const IndividualDish = ({ title, description, price, id, id_restaurant }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(CartIncrementAction(title, price, id, id_restaurant));
    dispatch(addSubtotalAction(price));
  };
  return (
    <div className="restaurant-view-individual-dish">
      <div className="restaurant-view-individual-dish-main-line">
        <span className="restaurant-view-individual-dish-main-line-title">
          {title}
        </span>
        <button
          data-cy="button-add-food"
          className="restaurant-view-individual-dish-main-line-button"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      <p className="restaurant-view-individual-dish-description">
        {description}
      </p>
      <span className="restaurant-view-individual-dish-price">
        ${price.toLocaleString()}
      </span>
    </div>
  );
};

export default IndividualDish;
