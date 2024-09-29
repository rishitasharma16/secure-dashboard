import React, { useContext, useEffect, useState } from 'react'
import style from '../styles/form.module.css'
import AppContext from '../useContext/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import Label from '../components/Forms/Label'
import Input from '../components/Forms/Input'
import Button from "../components/Forms/Button";


function Login() {
 const {token, setToken ,setUser} = useContext(AppContext)
const navigate = useNavigate()

useEffect(()=>{
  if(token){
    navigate('/dashboard')
  }
},[token])


const [userData,setUserData] = useState({
  email:'',
  password:''
})

 
const handleChange = (event) =>{
  let name = event.target.name;
  let value = event.target.value
  setUserData({...userData,[name]:value})
}


const handleSubmit =(event)=>{
  event.preventDefault()
  const config = {
    url:'https://reqres.in/api/register', 
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    data:userData
  }
  axios(config)
  .then((response)=>{
    console.log(response)
    localStorage.setItem('token',response.data.token)
    localStorage.setItem('userId',response.data.id)
    setToken(response.data.token)
    setUser(response.data.id)
    navigate('/dashboard')
  })
  .catch((error)=>{ 
    console.log(error)
    if(error.response.data.error === "Note: Only defined users succeed registration"){
        toast("Only defined users succeed registration",{toastId:1,autoClose: 2000,})
    }
    else if(error.response.data.error ===  "Missing password"){
      toast("Enter your password",{toastId:2,autoClose: 2000,})
      }
  })
}


  return (
    <div
    className={`${style.form_section} flex flex-1 flex-col justify-center px-6 py-12 lg:px-8`}
  >
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form  className="space-y-6" onSubmit={handleSubmit}>      
        <div>
          <Label htmlFor="email" text="Email"/>
          <Input id="email" name="email" type="text" onchange={handleChange} value={userData.email}/>
        </div>

        <div>
          <div className="flex items-center justify-between">
          <Label htmlFor="password" text="Password"/>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-white hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <Input id="password" name="password" type="password" onchange={handleChange} value={userData.password}/>
        </div>

          <Button
           btnTxt="Sign In"
           text="Create new account. please" 
           to={'/register'}
           linkTxt="Sign Up"
           />
      </form>
    </div>
    <ToastContainer />
  </div>
  )
}

export default Login