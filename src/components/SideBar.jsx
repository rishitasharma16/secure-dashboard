import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/sidebar.module.css";
import axios from "axios";
import AppContext from "../useContext/AppContext";
function SideBar() {
  const { token, setToken, user, setUser, dash } = useContext(AppContext);
  const [sideItems, setSideItems] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const config = {
      url: "http://localhost:3000/sidebar",
      method: "GET",
    };
    axios(config)
      .then((response) => {
        setSideItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={`${style} text-white font-medium px-5 overflow-hidden`}
      style={{ width: "100%" }}
    >
      <div className="flex flex-col justify-center items-center pt-5 ">
        <img className="rounded-full w-14" src={dash.avatar} alt="avatar" />
        <span>{dash.email}</span>
        <div className={`${style.log_section} py-3 flex items-center`}>
          <box-icon name="log-in-circle" color="#ffffff"></box-icon>
          <button onClick={handleLogout} className="ms-1">
            Logout
          </button>
        </div>
      </div>

      <div className={`${style.link_items} pt-2`}>
        <ul className="">
          {IsLoading ? (
            <h1>data</h1>
          ) : (
            sideItems.map((item) => {
              return (
                <Link to={item.to} key={item.id} className="active capitalize">
                  <li className="bg-center">
                    <span className="w-8 mt-1">
                      <box-icon
                        name={item.icon}
                        color="#ffffff"
                        className="text-sm"
                      ></box-icon>
                    </span>
                    {item.sidenav}
                  </li>
                </Link>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
