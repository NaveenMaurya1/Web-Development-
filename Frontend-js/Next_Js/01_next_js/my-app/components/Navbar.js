"use client" // this client side ,in defualt mode it runs at server side

import React, { useState } from 'react'
import Link from 'next/link' // when we use <a> </a> whole page reloads that's we gonna use <Link> </Link> tag , so we need to import that Link from nextJs

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className=" bg-linear-to-r from-violet-700 to-violet-900 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo      when we use <a> </a> whole page reloads that's we gonna use <Link> </Link> tag  */}
                    <div className="flex items-center">
                        <Link href="#" className="text-white font-bold text-2xl hover:text-violet-200 transition-colors duration-300 flex items-center gap-2">
                            <span className="bg-white text-violet-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                ✓
                            </span>
                            TodoApp
                        </Link>
                    </div>

                    {/* Desktop Menu when we use <a> </a> whole page reloads that's we gonna use <Link> </Link> tag*/}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-white hover:text-violet-200 transition-colors duration-300 font-medium">
                            Home
                        </Link>
                        <Link href="/features" className="text-white hover:text-violet-200 transition-colors duration-300 font-medium">
                            Features
                        </Link>
                        <Link href="/about" className="text-white hover:text-violet-200 transition-colors duration-300 font-medium">
                            About
                        </Link>
                        <Link href="/get-started" className="bg-white text-violet-800 px-6 py-2 rounded-lg font-semibold hover:bg-violet-100 transition-all duration-300 shadow-md hover:shadow-lg">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button when we use <a> </a> whole page reloads that's we gonna use <Link> </Link> tag*/}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-violet-200 focus:outline-none transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu when we use <a> </a> whole page reloads that's we gonna use <Link> </Link> tag*/}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-violet-600">
                        <Link href="/" className="block text-white hover:text-violet-200 py-2 px-4 transition-colors duration-300 hover:bg-violet-600 rounded-lg mt-2">
                            Home
                        </Link>
                        <Link href="/features" className="block text-white hover:text-violet-200 py-2 px-4 transition-colors duration-300 hover:bg-violet-600 rounded-lg">
                            Features
                        </Link>
                        <Link href="/about" className="block text-white hover:text-violet-200 py-2 px-4 transition-colors duration-300 hover:bg-violet-600 rounded-lg">
                            About
                        </Link>
                        <Link href="/get-started" className="block bg-white text-violet-800 px-4 py-2 rounded-lg font-semibold hover:bg-violet-100 transition-all duration-300 mt-3 text-center">
                            Get Started
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar