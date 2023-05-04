import React, { useState } from 'react';
import './RestaurantOverview.css';

const RestaurantOverview = ({ restaurant, language, languageSelector }) => {
  const [activeOrderId, setActiveOrderId] = useState(null);

  const { order_details } = restaurant;

  const ordersGrouped = order_details.reduce((acc, order) => {
    if (!acc[order.ordersId_order]) {
      acc[order.ordersId_order] = {
        id: order.ordersId_order,
        date: order.orders.createdAt,
        totalAmount: order.orders.price,
        dishes: [],
      };
    }

    acc[order.ordersId_order].dishes.push({
      id: order.id_order_detail,
      title: order.dishes.title,
      price: order.dishes.price,
      quantity: order.quantity,
    });

    return acc;
  }, {});

  const orders = Object.values(ordersGrouped);

  const handleOrderClick = (orderId) => {
    setActiveOrderId(activeOrderId === orderId ? null : orderId);
  };

  return (
    <div className="restaurant-overview">
    {orders.map((order) => (
      <div key={order.id} className="order">
        <h3
          className={`order-title ${activeOrderId === order.id ? 'active' : ''}`}
          onClick={() => handleOrderClick(order.id)}
        >
          {languageSelector(language, 'restaurantOverviewId')}: {order.id}
        </h3>
        {activeOrderId === order.id && (
          <>
            <p className="order-date">{languageSelector(language, 'restaurantOverviewDate')}: {new Date(order.date).toLocaleDateString()}</p>
            <div className="order-dishes">
              <h4>{languageSelector(language, 'restaurantOverviewDishes')}:</h4>
              {order.dishes.map((dish) => (
                <p key={dish.id}>
                  {dish.quantity} x {dish.title} ({dish.price} {languageSelector(language, 'each')})
                </p>
              ))}
            </div>
            <p className="order-total">{languageSelector(language, 'totalAmount')}: {order.totalAmount}</p>
          </>
        )}
      </div>
    ))}
  </div>
  );
};

export default RestaurantOverview;
