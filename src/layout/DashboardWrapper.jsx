import React, { useContext, useEffect, useState } from "react";
import style from "../styles/wrapper.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import AppContext from "../useContext/AppContext";
import axios from "axios";
import SidebarSmall from "../components/SidebarSmall";

function DashboardWrapper() {
  const { token, user, setDash, sideOpen } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      const config = {
        url: `https://reqres.in/api/users/${user}`,
        method: "get",
      };

      axios(config)
        .then((response) => {
          setDash(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  return loading ? (
    <h2>please wait...</h2>
  ) : (
    <div>
      <div className={`${style.wrapper_section} flex `}>
        <div
          className={`${style.lhs_area} `}
          style={{ width: sideOpen ? "" : "5rem" }}
        >
          {sideOpen ? <SideBar /> : <SidebarSmall />}
        </div>

        <div
          className={`${style.rhs_area}`}
          style={{ width: sideOpen ? "" : "calc(100% - 5rem)" }}
        >
          <div className={style.appbar_section}>
            <AppBar />
          </div>

          <div className={`${style.dashboard_content} px-8 py-3`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardWrapper;
