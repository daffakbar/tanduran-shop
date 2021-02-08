import React from 'react'
import Water from '../assets/icons/drop.svg'
import Fertilizer from '../assets/icons/fertilizer.svg'
import Scissors from '../assets/icons/scissors.svg'


const Section3 = () =>{
    return (
        <section className=" bg-green-50">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex justify-center mb-10 text-center">
                    <div className="mb-0">
                        <h1 className="text-3xl font-bold text-green-700">How to Care Plant</h1>
                        <div className="w-64 h-1 mt-1 bg-green-500 rounded-xl"></div>
                    </div>
                </div>
                {/* Card */}
                <div className="flex flex-row items-center w-3/5 pb-10 mx-auto mb-10 border-b border-gray-200 ">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-32 h-32 mr-10 bg-green-200 rounded-full ">
                        <img src={Water} width="60" alt="" />
                    </div>
                    <div className="flex-grow mt-0 text-left ">
                        <h1 className="mb-2 text-lg font-medium text-gray-900">Routinely Watered</h1>
                        <p className="text-base leading-snug ">Observe your plants carefully to note which ones need more frequent watering and the ones that only require water every other week.</p>
                    </div>
                </div>
                {/* Card */}
                <div className="flex flex-row items-center w-3/5 pb-10 mx-auto mb-10 border-b border-gray-200 ">
                    
                    <div className="flex-grow mt-0 text-left ">
                        <h1 className="mb-2 text-lg font-medium text-gray-900">Fertilizing</h1>
                        <p className="text-base leading-snug ">Feeding your plants monthly with a balanced liquid fertilizer diluted to half of its strength is a good idea.</p>
                    </div>
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-32 h-32 mr-10 bg-green-200 rounded-full ">
                        <img src={Fertilizer} width="60" alt="" />
                    </div>
                </div>
                {/* Card */}
                <div className="flex flex-row items-center w-3/5 pb-10 mx-auto mb-10 border-b border-gray-200 ">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-32 h-32 mr-10 bg-green-200 rounded-full ">
                        <img src={Scissors} width="60" alt="" />
                    </div>
                    <div className="flex-grow mt-0 text-left ">
                        <h1 className="mb-2 text-lg font-medium text-gray-900">Cut Rotten Leaf</h1>
                        <p className="text-base leading-snug ">While watering, keep a pair of gardening sheers with yourself to trim off dead, dying, and diseased parts of plants every week.</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default Section3