import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1000px] mx-auto grid lg:grid-cols-3 md:gap-8 text-gray-300 sm:p-10 p-5 gap-0'>
        <div className='pr-5'>
        <h1 className="font-bold text-green-600 text-3xl py-5 cursor-pointer">React</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum laboriosam minus consequatur ratione</p>

        <div className='flex justify-between my-5'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
        </div>
        <div className="md:col-span-2 flex justify-between pt-6">
            <div>
                <h6 className='font-bold text-gray-500 md:text-xl text-[1rem]'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold text-gray-500 md:text-xl text-[1rem]'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Statics</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold text-gray-500 md:text-xl text-[1rem]'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Careers</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold text-gray-500 md:text-xl text-[1rem]'>Legal</h6>
                <ul>
                    <li className='py-1'>Claim</li>
                    <li className='py-1'>Policy</li>
                    <li className='py-1'>Terms</li>
                </ul>
            </div>

        </div>



        
    </div>
  )
}

export default Footer