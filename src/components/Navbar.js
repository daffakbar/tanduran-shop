import React from 'react'
import logo from "../assets/logo/plant.svg";

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-30 w-full bg-green-700 ">
            <div className="container flex p-2 mx-auto mt-0 " >
                <a href="{}" className="flex ">
                    <img src={logo} width="35" alt="" className="inline "/>
                    <span className="self-center pl-2 text-xl font-semibold uppercase text-green-50">Tanduran</span>
                </a>
                <div className="flex-grow text-green-50">
                    <ul className="flex items-center justify-end ">
                        <li className="mr-3 ">
                            <a href="{}" className="px-4 py-2 text-xl font-semibold uppercase transition-colors delay-100 hover:bg-white hover:text-green-700"> Home</a>
                        </li>
                        <li className="mr-3 ">
                            <a href="{}" className="px-4 py-2 text-xl font-normal transition-colors delay-100 hover:bg-white hover:text-green-700"> Shop</a>
                        </li>
                        <li className="mr-3 ">
                            <a href="{}" className="px-4 py-2 text-xl font-normal transition-colors delay-100 hover:bg-white hover:text-green-700"> Collection</a>
                        </li>
                        <li className="mr-3 ">
                            <a href="{}" className="px-4 py-2 text-xl font-normal transition-colors delay-100 hover:bg-white hover:text-green-700"> About</a>
                        </li>
                        <li className="mr-3 ">
                            <a href="{}" className="px-4 py-2 text-xl font-normal transition-colors delay-100 hover:bg-white hover:text-green-700"> Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar