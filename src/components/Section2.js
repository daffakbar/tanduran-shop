import React from 'react'
// import produk1 from '../assets/img/produk/produk1.jpg'
// import produk2 from '../assets/img/produk/produk2.jpg'
// import produk3 from '../assets/img/produk/produk3.jpg'
// import produk4 from '../assets/img/produk/produk4.jpg'

class Section2 extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            plants: []
        }
    }
    componentDidMount(){
        fetch("https://raw.githubusercontent.com/daffakbar/testcoba/main/api/v1/data2.json")
        .then(response => response.json())
        .then(data => this.setState({ plants: data}))
    }

    render(){
        const {plants} = this.state

    return (
        <section className="bg-green-100 ">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex justify-center mb-10 text-center">
                    <div className="mb-0">
                        <h1 className="text-3xl font-bold text-green-700">Popular plant</h1>
                        <div className="w-48 h-1 mt-1 bg-green-500 rounded-xl"></div>
                    </div>
                </div>

                <div className="flex flex-wrap ">
                    { plants.map((plant)=> 
                    <div className="w-1/4 p-4 ">
                        <a href="{}" className="relative block">
                            <span className="absolute right-0 px-3 py-3 text-white bg-yellow-600 rounded ">{plant.diskon_plant}</span>
                            <img src={plant.img_plant} className="rounded-md " alt=""/>
                        </a>
                        <div className="flex justify-center bg-green-600">
                            <h1 className="text-base font-medium text-white ">{plant.nama_plant}</h1>
                        </div>
                        <div className="flex justify-between bg-green-600 rounded-b-xl ">
                            <h1 className="ml-2 text-lg font-medium text-white"> <span className="text-sm text-gray-200 line-through ">{plant.harga_plant}</span> {plant.harga_diskon_plant} </h1>
                            <buttton className="px-3 py-1 text-white transition-colors delay-100 bg-yellow-600 cursor-pointer rounded-br-xl hover:bg-yellow-700 "> Add</buttton>
                        </div>
                    </div>
                    )}

        
                </div>
            </div>
        </section>
    )
}
}
export default Section2