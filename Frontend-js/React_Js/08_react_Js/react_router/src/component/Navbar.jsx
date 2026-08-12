import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>

       {/* we don't use that */}

        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a> */}   

       {/* <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/login">Login</Link> */}

      {/* red is a class here  */}
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink>

      </nav>
    </div>
  )
}

export default Navbar
