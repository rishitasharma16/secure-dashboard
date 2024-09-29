import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/sidebar.module.css";
import axios from "axios";
import AppContext from "../useContext/AppContext";
function SideBar() {

  const [sideItems,setSideItems] = useState([])
  const {IsLoading,setIsLoading} = useContext(AppContext)

  useEffect(()=>{
  const config = {
    url:'http://localhost:3000/sidebar',
    method:'GET'
  }
  axios(config)
  .then((response)=>{
    setSideItems(response.data)
    setIsLoading(false)
    console.log(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
  },[])

  return (
    <div className={`${style} text-white font-medium px-5`}>
      <div className="flex justify-center items center py-5 ">
        <Link to="">
          <p>Logo</p>
        </Link>
      </div>

      <div className={`${style.link_items} py-3`}>
        <ul className="">
        {
          IsLoading ? <h1>data</h1>:sideItems.map((item)=>{
            return(
              <Link to={item.to} key={item.id} className="active capitalize">
            <li className="bg-center"><span className="w-8 mt-1"><box-icon name={item.icon} type='solid' rotate='90' color='#ffffff' className="text-sm" ></box-icon></span>{item.sidenav} </li>
            
          </Link>
            )
            
          })
        
        }
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
