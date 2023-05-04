import React, { useState } from "react";
import "./RestaurantOverview.css";

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
        user: order.orders.users,
        orders: order.orders,
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
      {orders.map((order) => {
        const user = order.user;
        const name = `${user?.name ?? ""} ${user?.last_name ?? ""}`;
        const addressObj = user?.addresses?.find(
          (addr) => addr.id_address === order.orders.user_addressesId_address
        );
        const address = addressObj ? addressObj.address : "";

        return (
          <div
            key={order.id}
            className="order"
            onClick={() => handleOrderClick(order.id)}
          >
            <p
              className={`order-title ${
                activeOrderId === order.id ? "active" : ""
              }`}
              onClick={() => handleOrderClick(order.id)}
            >
              {languageSelector(language, "restaurantOverviewId")}: {order.id}
            </p>
            {activeOrderId === order.id && (
              <>
                <p className="order-date">
                  {languageSelector(language, "restaurantOverviewDate")}:{" "}
                  {new Date(order.date).toLocaleDateString()}
                </p>
                <p className="order-customer">
                  {languageSelector(language, "customerName")}: {name}
                </p>
                <p className="order-address">
                  {languageSelector(language, "customerAddress")}: {address}
                </p>
                <div className="order-dishes">
                  <h4>
                    {languageSelector(language, "restaurantOverviewDishes")}:
                  </h4>
                  {order.dishes.map((dish) => {
                    return (
                      <p key={dish.id}>
                        {dish.quantity} x {dish.title} ({dish.price}{" "}
                        {languageSelector(language, "each")})
                      </p>
                    );
                  })}
                </div>
                <p className="order-total">
                  {languageSelector(language, "totalAmount")}:{" "}
                  {order.totalAmount}
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantOverview;
