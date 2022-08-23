import Image from 'next/image';
import React from 'react';
import airlinesImg from '../../public/assets/projects/airline_routes.png';
import jsIcon from '../../public/assets/tech/js.png';
import reactIcon from '../../public/assets/tech/react.png';

function AirlineRoutes() {
  return (
    <div id="game-alert" className="relative flex flex-items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#333333] to-[#666666]">
      <Image className="rounded-xl group-hover:opacity-10" src={airlinesImg} alt="airline routes screenshot" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg md:text-2xl text-white -tracking-wider text-center">Airline Routes</h3>
        <p className="hidden md:flex pb-4 pt-2 text-sm text-white text-center">A front-end data visualiztion tool using React.js.</p>
        <p className="md:hidden pb-4 pt-2 text-sm text-white text-center">A front-end data visualiztion tool using React.js.</p>
        <div className="grid md:grid-cols-2 gap-4 py-1">
          <a href="https://github.com/tdronkers04/airline-routes">
            <p className="text-center py-1 rounded-lg bg-white text-gray-700 font-bold text-sm md:text-md cursor-pointer">Code</p>
          </a>
          <a href="https://lit-cove-46060.herokuapp.com/">
            <p className="text-center py-1 rounded-lg bg-white text-gray-700 font-bold text-sm md:text-md cursor-pointer">Demo</p>
          </a>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-1 place-items-center py-1">
          <div className="image-container max-w-[35px]">
            <Image src={jsIcon} alt="javascript" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={reactIcon} alt="react.js" layout="responsive" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirlineRoutes;
