import React from 'react'
import logo from '../assets/logo/plant.svg'

const Footer = ()=> {
    return (
        <footer className="bg-green-100 ">
            <div className="container flex flex-row items-start px-5 py-5 mx-auto text-black ">
                <div className="flex self-center justify-center w-64 mx-0 text-left ">
                    <a href="{}" className="flex content-center justify-center ">
                        <img src={logo} width="40" alt=""/>
                        <span className="self-center ml-1 text-xl font-medium ">Tanduran</span>
                    </a>
                </div>
                <div className="flex flex-wrap flex-grow pl-20 mt-0 text-left">
                    <div className="w-1/4 px-4 leading-7 ">
                        <h1 className="mb-3 text-sm font-medium">Category</h1>
                        <nav className="mb-5 list-none ">
                            <li>
                                <a href="{}" className="hover:text-gray-800">Succulent</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">Cactus</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">Flowers</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">Tools & Accessoris</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-1/4 px-4 leading-7 ">
                        <h1 className="mb-3 text-sm font-medium">Social Media</h1>
                        <nav className="mb-5 list-none ">
                            <li>
                                <a href="{}" className="hover:text-gray-800">Facebook</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">Instagram</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">Youtube</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">Twitter</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-1/4 px-4 leading-7 ">
                        <h1 className="mb-3 text-sm font-medium">Company</h1>
                        <nav className="mb-5 list-none ">
                            <li>
                                <a href="{}" className="hover:text-gray-800">Carrer</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">Term of Services</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">Privacy Policy</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-1/4 px-4 leading-7 ">
                        <h1 className="mb-3 text-sm font-medium">Contact</h1>
                        <nav className="mb-5 list-none ">
                            <li>
                                <a href="{}" className="hover:text-gray-800">10, Ciputra Residence, Surabaya</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">cs@tanduran.id</a>
                            </li>
                            <li>
                                <a href="{}" className="hover:text-gray-800">+62 112233445</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-green-700 border-t-2">
                <a href="{}" className="m-2 text-white ">
                © 2020 Tanduran - All Rights Reserved - Terms of Services / Privacy Policy
                </a>
            </div>
        </footer>
    )
}
export default Footer