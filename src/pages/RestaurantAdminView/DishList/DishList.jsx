import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditModal from "../../../components/EditModal/EditModal";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../constants/apiUrl";
import Cookies from "universal-cookie";
import "./DishList.css";

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
      toast.success(languageSelector(language, "dishEditSuccess"));
    } catch (error) {
      toast.error(languageSelector(language, "dishEditFailure"));
    }
  };

  const handleDelete = async (dishToDelete) => {
    if (window.confirm(languageSelector(language, "dishHideWarning"))) {
      try {
        await axios.patch(
          `${API_URL}/dishes/${dishToDelete.id_dish}`,
          { active: false },
          config
        );
        toast.success(languageSelector(language, "dishHideSuccess"));
        setDishList(
          dishList.filter((dish) => dish.id_dish !== dishToDelete.id_dish)
        );
      } catch (error) {
        toast.error(languageSelector(language, "dishEditSuccess"));
      }
    }
  };

  const handleHideCategory = async (categoryObj) => {
    if (window.confirm(languageSelector(language, "categoryHideWarning"))) {
      try {
        await axios.patch(
          `${API_URL}/dishes-categories/${categoryObj.id_dishes_category}`,
          { active: false },
          config
        );
        toast.success(languageSelector(language, "categoryHideSuccess"));
        setHiddenCategories([
          ...hiddenCategories,
          categoryObj.id_dishes_category,
        ]);
      } catch (error) {
        toast.error(languageSelector(language, "categoryHideFailure"));
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
                <div className="restaurantAdminView_dish_category_header">
                  <p className="restauranAdminView__itemTitle">
                    {categoryObj.dishes_category}
                  </p>
                  <AiFillDelete
                    className="restaurantAdminView__icon"
                    onClick={() => handleHideCategory(categoryObj)}
                  />
                </div>
                <ul className="restauranAdminView__itemList">
                  {dishes.map((dish, index) => (
                    <li key={index} className="restaurantAdminView__details">
                      {languageSelector(language, "title")}: {dish.title} -{" "}
                      {languageSelector(language, "price")}: $
                      {dish.price.toLocaleString()}
                      <div>
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
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          );
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
