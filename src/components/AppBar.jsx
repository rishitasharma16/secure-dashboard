import React, { useContext, useState } from "react";
import style from "../styles/appbar.module.css";
import AppContext from "../useContext/AppContext";

function AppBar() {
  const { dash, sideOpen, setSideOpen } = useContext(AppContext);
  return (
    <div
      className={`${style.appbar_items} flex justify-between items-center py-5 px-8`}
    >
      <div>
        <button
          onClick={() => (sideOpen ? setSideOpen(false) : setSideOpen(true))}
        >
          <box-icon name="menu" color="#2B3098"></box-icon>
        </button>
      </div>
      <div className="relative">
        <input type="text" placeholder="Search" />
        <div className="absolute top-2 right-2.5">
        <box-icon name='search' color="#2B3098" ></box-icon>
        </div>
      </div>

      <div className="flex">
        <div className={style.box_icon}>
          <box-icon name="envelope" type="solid" color="#2B3098"></box-icon>
        </div>
        <div className={`${style.box_icon} mx-3`}>
          <box-icon name="bell" type="solid" animation="tada" color="#2B3098" ></box-icon>
        </div>
        <img className="rounded-full w-8 me-2" src={dash.avatar} alt="avatar" />
        <span className="font-medium underline underline-offset-2 text-blue-600">
          {dash.first_name} {dash.last_name}
        </span>
      </div>
    </div>
  );
}

export default AppBar;
