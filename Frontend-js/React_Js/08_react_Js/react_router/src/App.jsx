import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './component/Home'
import About from './component/About'
import Login from './component/Login'
import User from './component/User'
import Navbar from './component/Navbar'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path:"/about",
      element: <><Navbar/><About/></>
    },
    {
      path:"/login",
      element: <><Navbar/><Login/></> 
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
