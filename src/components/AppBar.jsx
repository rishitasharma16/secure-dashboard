import React from 'react'
import style from '../styles/appbar.module.css'
function AppBar() {
  return (
    <div className={`${style.appbar_items} flex justify-between items-center py-5 px-8`}>
      <div>
        <button><box-icon name='menu'></box-icon></button>
      </div>
      <div className='relative'>
        <input type='text'  placeholder='Search'/>
        <i class="fa fa-search absolute top-2.5 right-2.5" aria-hidden="true"></i>
        
      </div>

      <div >
      <box-icon name='envelope' type='solid' ></box-icon>
      <box-icon name='bell-ring' type='solid' animation='tada' ></box-icon>
      </div>
      
    </div>
  )
}

export default AppBar