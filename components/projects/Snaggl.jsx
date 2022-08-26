import Image from 'next/image';
import React from 'react';
import snagglImg from '../../public/assets/projects/snaggl.png';
import reactIcon from '../../public/assets/tech/react.png';
import nodeIcon from '../../public/assets/tech/nodejs.png';
import psqlIcon from '../../public/assets/tech/psql.png';

function Snaggl() {
  return (
    <div id="trellific" className="relative flex flex-items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#333333] to-[#666666]">
      <Image className="rounded-xl group-hover:opacity-10" src={snagglImg} alt="snaggl screenshot" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg md:text-2xl text-white -tracking-wider text-center">Snaggl</h3>
        <p className="hidden md:flex pb-4 pt-2 text-sm text-white text-center">A full-stack application for inspecting and debugging webhook requests. Built with React.js, Node.js and PostgreSQL</p>
        <p className="md:hidden pb-4 pt-2 text-sm text-white text-center">A full-stack application for inspecting and debugging webhook requests.</p>
        <div className="grid grid-cols-3 gap-1 place-items-center py-1">
          <div className="image-container max-w-[35px]">
            <Image src={reactIcon} alt="react.js" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={nodeIcon} alt="node.js" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={psqlIcon} alt="psql" layout="responsive" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snaggl;
