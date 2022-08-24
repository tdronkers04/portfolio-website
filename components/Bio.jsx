import Image from 'next/image';
import React from 'react';
import boysImg from '../public/assets/boys.png'


function Bio() {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-xl w-full h-full mx-auto p-2 flex items-center'>
        
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <div id="profile-picture" className="image-container md:max-w-[250px]">
              <Image layout="responsive" className="image h-48 w-full object-cover md:h-full md:w-48" src={boysImg} alt="tim and sons"/>
              </div>
              
            </div>
            <div class="p-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
