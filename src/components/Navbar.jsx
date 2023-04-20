import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto ">
        <h1 className="font-bold text-green-600 text-3xl px-10 py-5 cursor-pointer">React</h1>
        <ul className="hidden md:flex pr-8">
            <li className="p-3 text-xl hover:text-green-600 cursor-pointer">Home</li>
            <li className="p-3 text-xl hover:text-green-600 cursor-pointer">Company</li>
            <li className="p-3 text-xl hover:text-green-600 cursor-pointer">Resources</li>
            <li className="p-3 text-xl hover:text-green-600 cursor-pointer">About</li>
            <li className="p-3 text-xl hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        <div onClick={handleNav} className="block md:hidden pr-5">
            {!nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/> }
        </div>
        
        <div className={!nav ? "fixed left-[-100%]" : "fixed top-0 left-0 w-[70%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-700 md:hidden" } >
        <h1 className="font-bold text-green-600 text-3xl px-6 py-4 ">React</h1>
        <ul className=" pt-8 uppercase pr-4">
            <li className="p-3 pl-6 text-xl border-b border-gray-600">Home</li>
            <li className="p-3 pl-6 text-xl border-b border-gray-600">Company</li>
            <li className="p-3 pl-6 text-xl border-b border-gray-600">Resources</li>
            <li className="p-3 pl-6 text-xl border-b border-gray-600">About</li>
            <li className="p-3 pl-6 text-xl">Contact</li>
        </ul>


        </div>
    </div>
  )
    

    
}

export default Navbar