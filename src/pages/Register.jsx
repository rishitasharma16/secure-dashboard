import React, { useContext, useEffect } from 'react'
import style from '../styles/form.module.css'
import AppContext from '../useContext/AppContext'
import axios from 'axios'


function Register() {

  const {token,setToken} = useContext(AppContext)
  
  const handleSubmit =(event)=>{
    event.preventDefault()
    const config = {
      url:'https://reqres.in/api/register',
      method:'POST',
      headers:{
        'Content-Type':'application.json'
      },
      body:JSON.stringify({
      "email": "eve.holt@reqres.in",
     "password": "pistol"
      })
    }
    axios(config)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  return (
    <div
    className={`${style.form_section} flex flex-1 flex-col justify-center px-6 py-12 lg:px-8`}
  >
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      {/* <img
        alt="Your Company"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        className="mx-auto h-10 w-auto"
      /> */}
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form  className="space-y-6" onSubmit={handleSubmit}>
        
      <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-white"
          >
           Full Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              className="block w-full rounded-md font-medium border-b-2 border-fuchsia-600 outline-none py-2 bg-blue-900 px-3 text-white placeholder:text-white  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-white"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md font-medium border-b-2 border-fuchsia-600 outline-none py-2 bg-blue-900 px-3 text-white placeholder:text-white  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-white"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-white hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
               className="block w-full rounded-md font-medium border-b-2 border-fuchsia-600 outline-none py-2 bg-blue-900 px-3 text-white  placeholder:text-white  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover: focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register