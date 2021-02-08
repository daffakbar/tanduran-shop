import React from 'react'
import imgContent from '../assets/img/content.jpg'

const Content = () => {
    return (
        <div className="mt-10">
            <img src={imgContent} className="w-screen h-screen" alt=""/>
            <div className="absolute text-left top-1/3 left-20">
                <h1 className="text-3xl font-bold leading-snug text-green-700 uppercase ">
                make your days comfortable <br/> with <span className="text-yellow-600">beautiful plant </span> 
                </h1>
                <p className="mt-3 text-xl text-gray-500 ">
                Tanduran helps you discover the best plants for your space, <br/> delivers them to your door and helps you look after them.
                </p>
                <button className="py-2 mt-10 text-xl font-semibold text-white bg-green-700 px-7 rounded-2xl"> Shop Now</button>
            </div>
        </div>
    )
}
export default Content