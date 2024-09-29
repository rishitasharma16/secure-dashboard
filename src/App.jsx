import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardWrapper from './layout/DashboardWrapper'
import Home from './pages/Dashboard/Home'
import Blog from './pages/Dashboard/Blog'
import World from './pages/Dashboard/World'
import History from './pages/Dashboard/History'
import Feedback from './pages/Dashboard/Feedback'
import Nature from './pages/Dashboard/Nature'
import Setting from './pages/Dashboard/Setting'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='index' element={<DashboardWrapper/>}>
      <Route index  element={<Home/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='world' element={<World/>}/>
      <Route path='history' element={<History/>}/>
      <Route path='nature' element={<Nature/>}/>
      <Route path='feedback' element={<Feedback/>}/>
      <Route path='setting' element={<Setting/>}/>
      </Route>
    </Routes>
  )
}

export default App

