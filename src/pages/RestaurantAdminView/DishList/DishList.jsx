import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditModal from "../../../components/EditModal/EditModal";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../constants/apiUrl";
import Cookies from "universal-cookie";
import './DishList.css';

const DishList = ({
  dishes = [],
  language,
  languageSelector,
  dishCategories,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [dishToEdit, setDishToEdit] = useState(null);
  const [dishList, setDishList] = useState(dishes);
  const [hiddenCategories, setHiddenCategories] = useState([]);
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  useEffect(() => {
    setDishList(dishes);
  }, [dishes]);

  const handleEditClick = (dish, index, category) => {
    setDishToEdit({ ...dish, index, category });
    setShowModal(true);
  };

  const handleUpdate = async (title, price, description) => {
    const updatedDish = {
      ...dishToEdit,
      title,
      price,
      description,
    };

    try {
      await axios.put(
        `${API_URL}/dishes/${dishToEdit.id_dish}`,
        updatedDish,
        config
      );
      setShowModal(false);
      setDishList(
        dishList.map((dish) =>
          dish.id_dish === dishToEdit.id_dish ? updatedDish : dish
        )
      );
      toast.success("Dish updated successfully");
    } catch (error) {
      toast.error("There is a problem updating the dish, please try again.");
    }
  };

  const handleDelete = async (dishToDelete) => {
    if (
      window.confirm(
        "Are you sure you want to delete this dish? This action cannot be undone."
      )
    ) {
      try {
        await axios.patch(
          `${API_URL}/dishes/${dishToDelete.id_dish}`,
          { active: false },
          config
        );
        toast.success("Dish deleted successfully");
        setDishList(
          dishList.filter((dish) => dish.id_dish !== dishToDelete.id_dish)
        );
      } catch (error) {
        toast.error("There was a problem, please try again");
      }
    }
  };

  const handleHideCategory = async (categoryObj) => {
    if (
      window.confirm(
        "Are you sure you want to hide this category? This action cannot be undone."
      )
    ) {
      try {
        await axios.patch(
          `${API_URL}/dishes-categories/${categoryObj.id_dishes_category}`,
          { active: false },
          config
        );
        toast.success("Category hidden successfully");
        setHiddenCategories([
          ...hiddenCategories,
          categoryObj.id_dishes_category,
        ]);
      } catch (error) {
        toast.error(
          "There was a problem hiding the category, please try again"
        );
      }
    }
  };

  const dishCategoriesMap = dishList.reduce((acc, dish) => {
    const category = dish.dishes_categoriesId_dishes_category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(dish);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(dishCategoriesMap)
        .filter(([category]) => !hiddenCategories.includes(category))
        .map(([category, dishes]) => {
          const categoryObj = dishCategories.find(
            (dc) => dc.id_dishes_category === category
          );
          return (
            categoryObj && (
              <div key={category}>
                <p className="restauranAdminView__itemTitle">
                  {categoryObj.dishes_category}
                </p>
              <ul className="restauranAdminView__itemList">
                {dishes.map((dish, index) => (
                  <li key={index} className="restaurantAdminView__details">
                    {languageSelector(language, "title")}: {dish.title} -{" "}
                    {languageSelector(language, "price")}: {dish.price}
                    <AiFillEdit
                      className="restaurantAdminView__icon restaurantAdminView__edit"
                      onClick={() => handleEditClick(dish, index, category)}
                    />
                    <AiFillDelete
                      className="restaurantAdminView__icon"
                      onClick={() => {
                        handleDelete(dish);
                      }}
                    />
                  </li>
                ))}
              </ul>
              <div className="restaurantAdminView__hideCategory">
                <AiFillDelete
                  className="restaurantAdminView__icon"
                  onClick={() => handleHideCategory(categoryObj)}
                />
                <span>Hide Category</span>
              </div>
            </div>
          ));
        })}
      {showModal && (
        <EditModal
          item={dishToEdit}
          onClose={() => setShowModal(false)}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default DishList;
