import axios from "axios";
import { API_URL } from "../../constants/apiUrl";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const alreadyCommented = async (id_restaurant) => {
  try {
    const response = await axios.get(`${API_URL}/reviews`, {
      params: {
        id_restaurant,
      },
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addNewComment = async (id_restaurant, title, rating, comment) => {
  try {
    await axios.post(
      `${API_URL}/reviews`,
      {
        id_restaurant,
        title,
        rating,
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateRestaurantRating = async (
  id_restaurant,
  rating,
  userRating
) => {
  try {
    const res = await axios.get(`${API_URL}/reviews/count`, {
      params: { id_restaurant },
    });
    const count = await res.data.data;

    const newRating = ((count - 1) * rating + userRating) / count;
    await axios.put(`${API_URL}/restaurants/rating`, {
      id_restaurant,
      rating: newRating,
    });
  } catch (error) {
    console.log(error);
  }
};
