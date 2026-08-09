import React from 'react'
import { useEffect } from 'react';

function Navbar({ color }) {

 // case:1 run on every render
  useEffect(()=>{
    alert("Hey i will run on every render")
  }) // we don't give "[]" this here

  // case:2 this runs on only first render
  useEffect(()=>{
    alert("Welcome to this page. i only run on first render.")
  },[])

  // case:3 this runs on certain changes like here on color change.
  useEffect(()=>{
    alert("color changed !")
  },[color])  // this will execute when color will be change

  useEffect(() => {
    alert("Welcome to this page. i only run on first render of navbar.jsx")
  
    return () => {
      alert("Navbar unmounted")   // this runs when  navbar disconnected from main appfile of jsx
    }
  }, [])
  

  return (
    <>
    <div>
      Hey i am Navbar and my color is {color}
    </div>
    </>
  )
}

export default Navbar
