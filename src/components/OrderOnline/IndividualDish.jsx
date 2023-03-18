const IndividualDish = ({ title, description, price }) => {
  return (
    <div className="restaurant-view-individual-dish">
      <div className="restaurant-view-individual-dish-main-line">
        <span className="restaurant-view-individual-dish-main-line-title">
          {title}
        </span>
        <button className="restaurant-view-individual-dish-main-line-button">
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
