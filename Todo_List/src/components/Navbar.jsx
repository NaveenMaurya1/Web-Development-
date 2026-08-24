import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-between bg-blue-400 text-white py-2'>
            <div className="logo">
                <span className='font-bold text-xl mx-4 '>iTask</span>
            </div>
            <ul className='flex gap-10 mx-4'>
                <li className="cursor-pointer hover:scale-105 font-semibold transition-transform">
                    Home
                </li>
                <li className="cursor-pointer hover:scale-105 font-semibold transition-transform">
                    Your Task
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
