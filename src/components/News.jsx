import React from "react";

const News = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4 lg:pl-10 p-0 w-max'>
          <h1 className='md:text-3xl sm:text-2xl px-0 text-[1.1rem] font-bold py-2 text-green-500'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4 md:pr-0 md:pl-0 pr-0'>
          <div className='flex md:flex-row items-center w-full'>
            <input
              className='p-3 flex rounded-md text-black md:w-[20rem] w-[11.5rem]'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-green-500 text-black rounded-md font-medium md:w-[150px] ml-2 my-6 md:px-6 md:py-3 p-3 w-[7rem]'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-green-500'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default News;
