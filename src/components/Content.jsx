import React from 'react'
import Typed from 'react-typed';

const Content = () => {
  return (
    <div className="text-white md:h-full h-[25rem]">
        <div className="max-w-[800px] mx-auto text-center flex flex-col md:w-full sm:h-[70vh] h-[60vh] mt-[120px] md:p-2">
            <p className="text-green-600 md:text-5xl">Welcome to Our Website</p>
            <h2 className="py-3 font-bold text-2xl">Lorem ipsum dolor sit amet.</h2>
            <div className="flex justify-center"> 
                <p className="md:text-2xl sm:text-xl font-bold pr-2">Fast, Flexible financing for</p>
                <Typed className="md:text-2xl sm:text-xl font-bold"
                strings={["House","Cars","Bussiness"]} 
                typeSpeed={140} backSpeed={100} loop />

            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500 md:py-2 py-3 px-3"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti</p>
            <button className="bg-green-500 p-3 w-[9rem] rounded-md mx-auto md:mt-2 text-black font-bold mt-5">Get Started</button>
        
        </div> 

    </div>
  )
}

export default Content