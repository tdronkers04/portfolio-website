import Image from 'next/image';
import React from 'react';

function Bio() {
  return (
    <div className='w-full h-fit md:h-screen text-center'>
      <div className='h-20 sm:h-0'></div>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex items-center'>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-52 w-full object-cover md:h-full md:w-80" src="/assets/boys.webp" alt="tim and boys"/>
            </div>
            <div className="p-8">
              <p className="mt-2 text-gray-700">I was born and raised in the San Francisco Bay Area (go Niners 🏈) but have called Colorado home for the last 10 years. I’m a husband and father of two boys. When I’m not coding or chasing my kids around, you can often find me outdoors, hopefully riding a snowboard 🏂 or bike 🚴‍♂️. If you enjoy Hunter S. Thompson’s writing I bet we would be fast friends.</p> 
              <br/>
              <p className="mt-2 text-gray-700">I started my professional life as an accountant but found my <a className="font-semibold text-[#011e6f] cursor-pointer" href="https://blog.dronkers.dev/buy-the-ticket-take-the-ride">true calling</a> in full-stack software development. I’m a problem-solver by nature and do my best work in collaboration with others. I love exploring new technologies but feel most at home in the JavaScript ecosystem.</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
