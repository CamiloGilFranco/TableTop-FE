import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import languageSelector from "../../../assets/languages/languageSelector";
import axios from "axios";
import "./AdminList.css";
import { API_URL } from "../../../constants/apiUrl";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillDelete } from "react-icons/ai";

const AdminList = ({ restaurant = {}, onAdminUpdate }) => {
  const language = useSelector((state) => state.languageReducer);
  const [admins, setAdmins] = useState(restaurant.admins || []);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  useEffect(() => {
    setAdmins(restaurant.admins || []);
  }, [restaurant]);

  const handleAddAdmin = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/restaurants/add-admin`,
        {
          email: newAdminEmail,
          restaurantId: restaurant.id_restaurant,
        },
        config
      );

      if (response.status === 200) {
        const updatedAdmins = response.data.data.admins;
        if (updatedAdmins) {
          setAdmins(updatedAdmins);
        }
        setNewAdminEmail("");
        toast.success(languageSelector(language, "addResAdminSuccess"));
        onAdminUpdate();
      }
    } catch (error) {
      console.error(error);
      toast.error(languageSelector(language, "addResAdminFailure"));
    }
  };

  return (
    <div className="adminList">
      <h3>{languageSelector(language, "restaurantAdmins")}</h3>
      <ul className="adminList__list">
        {admins.map((admin, index) => (
          <div className="adminList_single_admin_container">
            <li key={index}>
              {admin.name} {admin.last_name} - {admin.email}
            </li>
            <AiFillDelete className="restaurantAdminView__icon" />
          </div>
        ))}
      </ul>
      <div className="adminList__addAdmin">
        <span className="Add_new_admin_span">Add new admin</span>
        <input
          type="email"
          placeholder={languageSelector(language, "signInEmail")}
          value={newAdminEmail}
          onChange={(e) => setNewAdminEmail(e.target.value)}
        />
        <button onClick={handleAddAdmin}>
          {languageSelector(language, "bookingButton")}
        </button>
      </div>
    </div>
  );
};

export default AdminList;
