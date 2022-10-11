import Image from 'next/image';
import React from 'react';
import trellificImg from '../../public/assets/projects/trellific.png';
import reactIcon from '../../public/assets/tech/react.png';
import reduxIcon from '../../public/assets/tech/redux.png';
import nodeIcon from '../../public/assets/tech/nodejs.png';
import mongodbIcon from '../../public/assets/tech/mongodb.png';
import dockerIcon from '../../public/assets/tech/docker.png';
import awsIcon from '../../public/assets/tech/aws.png';

function Trellific() {
  return (
    <div id="trellific" className="relative flex flex-items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#333333] to-[#666666]">
      <Image className="rounded-xl group-hover:opacity-10" src={trellificImg} alt="trellific screenshot" placeholder="blur" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-lg md:text-2xl text-white -tracking-wider text-center">Trellific</h3>
        <p className="hidden md:flex pb-4 pt-2 text-sm text-white text-center">A full-stack project management app inspired by Trello. Built in React/Redux with a Node back-end and MongoDB database. Containerized with Docker and deployed to AWS.</p>
        <p className="md:hidden pb-4 pt-2 text-sm text-white text-center">A full-stack project management app inspired by Trello.</p>
        <div className="grid grid-cols-6 gap-1 place-items-center py-1">
          <div className="image-container max-w-[35px]">
            <Image src={reactIcon} alt="react.js" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={reduxIcon} alt="redux" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={nodeIcon} alt="node.js" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={mongodbIcon} alt="mongo DB" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={dockerIcon} alt="docker" layout="responsive" className="image" />
          </div>
          <div className="image-container max-w-[35px]">
            <Image src={awsIcon} alt="amazon web services" layout="responsive" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trellific;
