import React, { useContext, useState } from "react";
import style from "../styles/appbar.module.css";
import AppContext from "../useContext/AppContext";

function AppBar() {
  const { dash, sideOpen, setSideOpen } = useContext(AppContext);
  return (
    <div
      className={`${style.appbar_items} flex justify-between items-center py-md-5 py-2 px-3`}
    >
      <div>
        <button
          onClick={() => (sideOpen ? setSideOpen(false) : setSideOpen(true))}
        >
          <box-icon name="menu" color="#2B3098"></box-icon>
        </button>
      </div>
      <div className="relative flex items-center justify-between bg-slate-200 px-3 py-1 rounded-lg">
        <input className="bg-slate-200" type="text" placeholder="Search" />
        <div className="bg-slate-200">
          <box-icon name="search" color="#2B3098"></box-icon>
        </div>
      </div>

      <div className="flex">
        <div className={`${style.box_icon} hidden md:block`}>
          <box-icon name="envelope" type="solid" color="#2B3098"></box-icon>
        </div>
        <div className={`${style.box_icon} hidden md:block mx-3`}>
          <box-icon
            name="bell"
            type="solid"
            animation="tada"
            color="#2B3098"
          ></box-icon>
        </div>
        <img className="rounded-full w-8 me-2" src={dash.avatar} alt="avatar" />
        <span className="font-medium underline underline-offset-2 text-blue-600">
          {dash.first_name}
        </span>
      </div>
    </div>
  );
}

export default AppBar;
