import React from 'react'
import style from '../../styles/form.module.css'
function Input({id,name,type,onchange,value}) {
  return (
    <div className="mt-2">
    <input
      id={id}
      name={name}
      type={type}
      onChange={onchange}
      value={value}
      className="block w-full rounded-md font-medium border-b-2 border-fuchsia-600 outline-none py-2
       bg-blue-900 px-3 text-white placeholder:text-white sm:text-sm sm:leading-6"
    />
  </div>
  )
}

export default Input