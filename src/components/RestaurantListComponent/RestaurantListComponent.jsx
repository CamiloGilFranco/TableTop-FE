import './RestaurantListComponent.css';

const RestaurantListComponent = () =>{
    return(
    <header className="restaurantList__container">
            <div className="restaurantList__buttons-container">
                <button className="restaurantList__buttons">
                    All
                </button>
                <button className="restaurantList__buttons">Popular</button>
                <button className="restaurantList__buttons">Latest</button>
                <button className="restaurantList__buttons">Trend</button>
            </div>
      </header>
    )
}

export default RestaurantListComponent;