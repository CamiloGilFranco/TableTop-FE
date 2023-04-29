import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import languageSelector from "../../../assets/languages/languageSelector";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Cookies from "universal-cookie";
import "./GeneralAdminUserChange.css";
import { API_URL } from "../../../constants/apiUrl";

const GeneralAdminUserChange = () => {
  const language = useSelector((state) => state.languageReducer);
  const [email, setEmail] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [users, setUsers] = useState([]);
  const cookie = new Cookies();
  const token = cookie.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [filter, setFilter] = useState("");
  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    setRenderList([...users]);
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: { role: "user" },
        ...config,
      });
      setUsers(response.data.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          languageSelector(language, "usersFetchError")
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_URL}/users/change-role`,
        {
          email,
          user_role: "appAdmin",
        },
        config
      );
      setEmail("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          languageSelector(language, "updateUserError")
      );
    }
  };

  const hanldeUserDelete = async (id) => {
    if (window.confirm(languageSelector(language, "deactivateUserWarning"))) {
      try {
        const response = await axios.put(`${API_URL}/users/${id}`, {}, config);
        toast.success(
          response.data.message ||
            languageSelector(language, "deactivatedUserSuccess")
        );
        fetchUsers();
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            languageSelector(language, "deactivatedUserFailure")
        );
      }
    }
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);

    setRenderList(
      users.filter((user) => {
        if (
          user.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          user.last_name
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        ) {
          return true;
        }
        return false;
      })
    );
  };

  useEffect(() => {
    if (!filter) {
      setRenderList([...users]);
    }
  }, [filter]);

  return (
    <>
      <div className="generalAdminView__warning">
        {languageSelector(language, "appAdminUserTitle")}{" "}
        <b>{languageSelector(language, "appAdminUserWarning")}</b>
      </div>
      <form className="generalAdminView__form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          {languageSelector(language, "appAdminUserEmail")}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={languageSelector(language, "signInEmail")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">
          {languageSelector(language, "appAdminUserButton")}
        </button>
      </form>
      <div className="generalAdmin_userList">
        <h3>{languageSelector(language, "generalAdminUserList")}</h3>
        <span>
          {languageSelector(language, "generalAdminUserListDeactivate")}{" "}
        </span>
        <button
          className="app-admin-show-users-button"
          onClick={toggleExpanded}
        >
          {isExpanded
            ? languageSelector(language, "hideUsers")
            : languageSelector(language, "showUsers")}
        </button>
        {isExpanded && (
          <div className="user__list_main_container">
            <input
              type="text"
              placeholder="Search"
              className="user__list_search_input"
              value={filter}
              onChange={handleFilter}
            />
            {renderList.map((item, index) => {
              return (
                <ul key={index} className="user__list-container">
                  <div className="user__list">
                    <span>
                      {languageSelector(language, "name")}: {item.name}{" "}
                      {item.last_name}
                    </span>

                    <span>{item.user_role}</span>
                    {
                      <AiFillDelete
                        className="generalAdminView__icon"
                        onClick={() => hanldeUserDelete(item.user_id)}
                      />
                    }
                  </div>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default GeneralAdminUserChange;
