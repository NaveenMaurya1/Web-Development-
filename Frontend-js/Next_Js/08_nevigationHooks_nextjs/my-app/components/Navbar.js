"use client"

import React from 'react'
import { usePathname } from "next/navigation";


function Navbar() {

 const pathname = usePathname()

  return (
    <div>

     <div>
      Hey I am Navbar
    </div>
     
     <div>You are inside {pathname}</div>

    </div>
  )
}

export default Navbar
