"use clinet"   //  this client side ,in defualt mode it runs at server side

import React from 'react'

function Footer() {
  return (
    <footer className="bg-violet-800 text-white text-center py-6 mt-12">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; 2024 TodoApp. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-3 text-sm">
          <a href="#" className="hover:text-gray-200">Privacy</a>
          <a href="#" className="hover:text-gray-200">Terms</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer