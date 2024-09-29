import React from 'react'
import { Link } from 'react-router-dom'

function Button({text,to,linkTxt,btnTxt}) {
  return (
    <div>
    <p className='py-4 text-white'>{text} <Link className='text-blue-300 underline' to={to}>{linkTxt}</Link></p>
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover: focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {btnTxt}
    </button>
  </div>
  )
}

export default Button