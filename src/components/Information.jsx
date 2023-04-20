import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Information = () => {
  return (
    <div className="bg-white md:px-10 md:py-4 w-full px-5 pb-14">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
            <div className="flex flex-col justify-center">
                <p className="text-green-500 text-2xl font-bold py-2">Data Analytics</p>
                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus inventore unde a omnis nesciunt cupiditate minus amet deleniti assumenda temporibus excepturi labore rerum porro commodi, iste debitis eius voluptates.</p>
                <button className="bg-green-500 p-3 w-[9rem] rounded-md mt-4 text-black font-bold">Get Started</button>
            </div>
            

        </div>
    </div>
  )
}

export default Information