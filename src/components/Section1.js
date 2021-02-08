import React from 'react'
import cactus from '../assets/img/cactus.jpg'
import flowers from '../assets/img/flowers.jpg'
import succulent from '../assets/img/succulent.jpg'
import tools from '../assets/img/tools.jpg'

const Section1 = () => {
    return(
        <section className="bg-green-50">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex justify-center mb-10 text-center">
                    <div className="mb-0">
                        <h1 className="text-3xl font-bold text-green-700">Category</h1>
                        <div className="h-1 mt-1 bg-green-500 rounded-xl w-36"></div>
                    </div>
                </div>
                <div className="flex flex-wrap ">
                    <div className="w-1/4 duration-200 transform cursor-pointer hover:scale-105 ">
                        <div className="m-3 bg-green-700 rounded-xl">
                            <img src={cactus} alt="" className="object-cover w-full h-40"/>
                            <h1 className="p-2 text-2xl font-medium text-center text-white "> Cactus</h1>
                        </div>
                    </div>
                    <div className="w-1/4 duration-200 transform cursor-pointer hover:scale-105 ">
                        <div className="m-3 bg-green-700 rounded-xl">
                            <img src={succulent} alt="" className="object-cover w-full h-40"/>
                            <h1 className="p-2 text-2xl font-medium text-center text-white "> Succulent</h1>
                        </div>
                    </div>
                    <div className="w-1/4 duration-200 transform cursor-pointer hover:scale-105 ">
                        <div className="m-3 bg-green-700 rounded-xl">
                            <img src={flowers} alt="" className="object-cover w-full h-40"/>
                            <h1 className="p-2 text-2xl font-medium text-center text-white "> Flowers</h1>
                        </div>
                    </div>
                    <div className="w-1/4 duration-200 transform cursor-pointer hover:scale-105 ">
                        <div className="m-3 bg-green-700 rounded-xl">
                            <img src={tools} alt="" className="object-cover w-full h-40"/>
                            <h1 className="p-2 text-2xl font-medium text-center text-white "> Tools & Accessoris</h1>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Section1