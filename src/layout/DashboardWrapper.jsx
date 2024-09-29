import React from "react";
import style from "../styles/wrapper.module.css";
import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
function DashboardWrapper() {
  return (
    <div>
      <div className={`${style.wrapper_section} flex `}>
        <div className={`${style.lhs_area} `}>
          <SideBar />
        </div>

        <div className={`${style.rhs_area}`}>

          <div className={style.appbar_section}>
            <AppBar />
          </div>

          <div className={`${style.dashboard_content} px-8 py-3`} >
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
}

export default DashboardWrapper;
