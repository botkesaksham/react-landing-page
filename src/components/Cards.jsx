import React from 'react'
import Single from '..//assets/single.png'
import Double from '..//assets/double.png'
import Triple from '..//assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:cursor-pointer hover:scale-105 duration-500'>
                <img  className='mx-auto w-24 mt-[-3rem]' src={Single} alt="" srcset="" />
                <h2 className="text-center font-bold text-2xl">Single User</h2>
                <p className=" font-bold text-green-500 p-2">$49</p>
                <div>
                    <p className=" font-medium p-1" font-medium>500 GB Granted</p>
                    <p className=" font-medium p-1">1 Granted User</p>
                    <p className=" font-medium p-1 mb-3">Send up to 2 GB</p>
                </div>
                <button className="bg-green-500 p-2 w-[10rem] mx-auto rounded-lg font-bold">Start Trial</button>
            </div>

            <div className='w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:cursor-pointer hover:scale-105 duration-500 '>
                <img  className='mx-auto w-24 mt-[-3rem]' src={Double} alt="" srcset="" />
                <h2 className="text-center font-bold text-2xl">Double User</h2>
                <p className=" font-bold text-green-500 p-2">$99</p>
                <div>
                    <p className=" font-medium p-1" font-medium>1000 GB Granted</p>
                    <p className=" font-medium p-1">2 Granted User</p>
                    <p className=" font-medium p-1 mb-3">Send up to 10 GB</p>
                </div>
                <button className="text-green-500 bg-black p-2 w-[10rem] mx-auto rounded-lg font-bold">Start Trial</button>
            </div>

            <div className='w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:cursor-pointer hover:scale-105 duration-500'>
                <img  className='mx-auto w-24 mt-[-3rem]' src={Triple} alt="" srcset="" />
                <h2 className="text-center font-bold text-2xl">Triple User</h2>
                <p className=" font-bold text-green-500 p-2">$199</p>
                <div>
                    <p className=" font-medium p-1" font-medium>2000 GB Granted</p>
                    <p className=" font-medium p-1">3 Granted User</p>
                    <p className=" font-medium p-1 mb-3">Send up to 50 GB</p>
                </div>
                <button className="bg-green-500 p-2 w-[10rem] mx-auto rounded-lg font-bold">Start Trial</button>
            </div>
        </div>

    </div>
  )
}

export default Cards