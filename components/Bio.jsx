import Image from 'next/image';
import React from 'react';
import boysImg from '../public/assets/boys.png'


function Bio() {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex items-center'>

        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="/assets/boys.png" alt="Man looking at item at a store"/>
            </div>
            <div class="p-8">
              <p class="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget aliquet nibh praesent tristique magna. At risus viverra adipiscing at in tellus integer. Ut placerat orci nulla pellentesque dignissim. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Viverra nam libero justo laoreet sit amet cursus sit amet. Praesent elementum facilisis leo vel fringilla est. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Sapien nec sagittis aliquam malesuada bibendum arcu. In hac habitasse platea dictumst vestibulum rhoncus. Hac habitasse platea dictumst quisque sagittis purus sit amet.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Bio;
